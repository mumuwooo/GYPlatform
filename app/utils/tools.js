// export function checkExistInfoList(infoList){//检验用户信息匹配
// let StuID =  isLogin()
// if(StuID&&infoList.length>0){
//   //獲取站點id
//  let configinfo = JSON.parse(Storage.get('configinfo')||null)
//  if(configinfo){//匹配站点id(System_Station_ID)  StuID
//   let info = infoList.find( o=>(o.StuID==StuID&&o.System_Station_ID==configinfo.System_Station_ID))
//   if(info){
//     return info
//   }
//  }
// }
//   return false
// }
import { Dimensions, Platform, PixelRatio } from 'react-native'

const { width } = Dimensions.get('window')
const basePx = Platform.OS === 'ios' ? 750 : 720

export const Px2Dp = function px2dp(px: number): number {
  const layoutSize = (px / basePx) * width

  return PixelRatio.roundToNearestPixel(layoutSize)
}
// 获取当前路由
export function getCurrentRouter(routes) {
  const len = routes.length
  const { currentRouter } = formatRoutes(routes)[0]
  if (len > 0) {
    return { currentRouter, params: routes[len - 1].params }
  }
  return { currentRouter, params: null }
}

// 格式化路由 提取当前路由 currentRouter
export function formatRoutes(routes) {
  const firstRouter = routes[0]
  const len = routes.length
  if (len > 1) {
    firstRouter.currentRouter = routes[len - 1].routeName
  } else {
    firstRouter.currentRouter = firstRouter.routes[firstRouter.index].routeName
  }
  return routes
}

// 判断路由是否存在缓存
export function hasRouterCache(routerHistory) {
  if (routerHistory.length >= 3) {
    // 存在参数，路由和参数一样则存在缓存
    if (JSON.stringify(routerHistory[0]) == JSON.stringify(routerHistory[2])) {
      return true
    }
  }
  return false
}

// 初始化的paging对象
export function pageInit() {
  return {
    PageSize: 10,
    PageIndex: 1,
    PageStatus: 1,
  }
}

export function checkPhoneNum(value) {
  // 验证手机规则
  const phone = /^[1][3,4,5,7,8][0-9]{9}$/ // 应该前后都可以有空格自动去掉
  if (value && value.trim() !== '' && !phone.test(value.trim())) {
    return false
  }
  return true
}

export function htmlDecodeByRegExp(str) {
  // html 转义字符
  let s = ''
  if (str.length == 0) return ''
  s = str.replace(/&amp;/g, '&')
  s = s.replace(/&lt;/g, '<')
  s = s.replace(/&gt;/g, '>')
  s = s.replace(/&nbsp;/g, ' ')
  s = s.replace(/&#39;/g, "'")
  s = s.replace(/&quot;/g, '"')
  return s
}

export const sortQuestion = (a, b) =>
  a.TypeInfo.QuestionType_ID - b.TypeInfo.QuestionType_ID

export const formatQuestion2Type = data => {
  // List 格式 转  QuestionType  并判断正误
  const questions = []
  for (const i in data) {
    const obj = {}
    data[i]._no = 1
    if (data[i].QuestionType_ID == 2) {
      data[i].Judge = data[i].MyAnswer
        ? data[i].MyAnswer ==
          data[i].Answer.split(',')
            .sort()
            .toString()
        : 0
    } else if (data[i].QuestionType_ID == 3 || data[i].QuestionType_ID == 5) {
      data[i].Judge = null
    } else {
      data[i].Judge = data[i].MyAnswer ? data[i].MyAnswer == data[i].Answer : 0
    }
    if (data[i].MyAnswer || data[i].FileList) {
      // 是否已答题
      data[i]._did = true
    }
    data[i].Judge = data[i].Judge ? 1 : 0
    obj.Question = [data[i]]
    obj.TypeInfo = {
      // ExamPaper_ID: payload.examId,
      QuestionType_ID: data[i].QuestionType_ID,
      QuestionType_Name: data[i].QuestionType_Name,
      Title: data[i].QuestionType_Name,
      QuestionType_Mark: data[i].QuestionType_Mark,
      Sorce: data[i].Sorce,
      Sort: data[i].Sort,
    }
    let qLen = questions.length
    if (qLen > 0) {
      let count = 0
      for (const j in questions) {
        const qItem = questions[j]
        // 循环遍历 整合
        if (qItem.TypeInfo.QuestionType_ID == data[i].QuestionType_ID) {
          // 已有类型
          if (j > 0) {
            // 类型之前已有类型  找之前类型数再相加
            const prevLen = questions[j - 1].Question.length
            data[i]._no =
              questions[j - 1].Question[prevLen - 1]._no +
              qItem.Question.length +
              1
          } else {
            // 当前类型为第一个
            data[i]._no = qItem.Question.length + 1
          }
          qItem.Question.push(data[i])
          count += 1
          break
        }
      }
      if (count == 0) {
        qLen = questions.length
        let prevLen = 0
        if (qLen > 0) {
          prevLen = questions[qLen - 1].Question.length
        }
        const item = obj.Question[0]
        item._no = questions[qLen - 1].Question[prevLen - 1]._no + 1
        questions.push(obj)
      }
    } else {
      questions.push(obj)
    }
  }
  return questions
}

export const formatQuestion2List = data => {
  // QuestionType 格式 转  List  顺便加序号
  let count = 0
  const List = []
  for (const i in data) {
    const question = data[i].Question
    const { QuestionType_ID, Title } = data[i].TypeInfo
    for (const j in question) {
      count += 1
      // question[j].Sort = Sort
      // question[j].Sorce = Sorce
      question[j].QuestionType_ID = QuestionType_ID
      question[j].QuestionType_Name = Title
      // question[j].QuestionType_Mark = QuestionType_Mark
      List.push(question[j])
      question[j]._no = count
    }
  }
  return { qList: List, qType: data }
}
export const formatQuestion2List4submit = data => {
  // QuestionType 格式 转  List 提交
  const List = []
  for (const i in data) {
    const question = data[i].Question
    for (const j in question) {
      const { ID, MyAnswer, Judge } = question[j]
      List.push({ ID, MyAnswer, Judge })
    }
  }
  return List
}
export function QuestionTypeName(num) {
  // 题目序号
  switch (num) {
    case 1:
      return '单选题'
    case 2:
      return '多选题'
    case 3:
      return '填空题'
    case 4:
      return '判断题'
    case 5:
      return '问答题'
    case 6:
      return '计算题'
    case 7:
      return '组合题'
    default:
      return '未知题型'
  }
}
// 遍历获取试题数据
export function getQuestionCount(
  questions,
  modeType = 'exam',
  total = 0,
  doCount = 0,
  rightCount = 0,
  sectionTotal = 0,
  wrongCount = 0,
  subjectiveCount = 0,
  score = 0
) {
  // hasSubjective 主观题
  for (const j in questions) {
    const qItem = questions[j]
    total += 1
    if (qItem.QuestionType_ID == 3 || qItem.QuestionType_ID == 5)
      sectionTotal += 1
    if (
      qItem.FileList ||
      qItem._did ||
      (qItem.MyAnswer &&
        (modeType === 'analysis' ||
          modeType === 'exam' ||
          modeType == 'chaptexer') &&
        qItem.MyAnswer)
      // ||(qItem._watchAnswer&&modeType=='chaptexer')
    ) {
      // 已做标志
      doCount += 1
      if (qItem.QuestionType_ID == 5 || qItem.QuestionType_ID == 3) {
        subjectiveCount += 1
      } else if (qItem.Judge === 0) {
        // 根据题型判断正误
        if (
          qItem.QuestionType_ID == 1 ||
          qItem.QuestionType_ID == 4 ||
          (modeType != 'chaptexer' || qItem._submit)
        ) {
          wrongCount += 1
        }
      }
    }
    if (qItem.Judge === 1) {
      // 根据题型判断正误
      if (
        qItem.QuestionType_ID == 1 ||
        qItem.QuestionType_ID == 2 ||
        qItem.QuestionType_ID == 4 ||
        (modeType != 'chaptexer' || qItem._submit)
      ) {
        rightCount += 1
        score += qItem.AllScore
      }
    }
  }

  return {
    sectionTotal,
    total,
    doCount,
    rightCount,
    wrongCount,
    subjectiveCount,
    score,
  }
}
// 时间转换{h,m,s}
export function SecTimeObj(time) {
  let s = 0
  let m = 0
  let h = 0
  s = time % 60 || 0
  m = parseInt(((time % 3600) - s) / 60) || 0
  h = parseInt(time / 3600) || 0
  return { h, m, s }
}

// 时间累加
export const addTime = ({ timeText = '00:00:00', times = 0 }, t = 1) => {
  let { h, m, s } = SecTimeObj(times)
  s += t
  if (s == 60) {
    s = 0
    m += 1
    if (m == 60) {
      m = 0
      h += 1
    }
  }
  times = s + m * 60 + h * 3600
  if (s < 10) {
    s = `0${s}`
  }
  if (m < 10) {
    m = `0${m}`
  }
  if (h < 10) {
    h = `0${h}`
  }
  return { text: `${h}:${m}:${s}`, h: `${h}`, m: `${m}`, s: `${s}`, times }
}
// 时间递减
export const reduceTime = ({ timeText = '00:90:00', times = 5400 }, t = 1) => {
  let { h, m, s } = SecTimeObj(times)
  s -= t
  if (s < 0) {
    s = 59
    m -= 1
    if (m < 0) {
      m = 59
      h -= 1
    }
    if (h < 0) {
      h = 0
    }
  }
  times = s + m * 60 + h * 3600
  if (s < 10) {
    s = `0${s}`
  }
  if (m < 10) {
    m = `0${m}`
  }
  if (h < 10) {
    h = `0${h}`
  }
  return { text: `${h}:${m}:${s}`, h: `${h}`, m: `${m}`, s: `${s}`, times }
}

// 做题题目开头插入题型
export function replaceTitle(title, start) {
  if (title.search(/^<p>/) == 0) {
    return title.replace(/^<p>/, `<p><span>${start}</span>  `)
  }
  return `<span>${start}</span>  ${title}`
}

export function limitClick(timer) {
  global.LIMIT_CLICK_TIMER && clearTimeout(global.LIMIT_CLICK_TIMER)
  global.LIMIT_CLICK_TIMER = setTimeout(() => {
    global.LIMIT_CLICK_STATUS = false
  }, timer || 500)
  if (global.LIMIT_CLICK_STATUS == true) {
    return true
  }
  global.LIMIT_CLICK_STATUS = true
  return false
}

export function getfileType(path) {
  // 获取文件类型
  const tailArr = path.split('.')
  const tail = tailArr[tailArr.length - 1]
  if (tail.search(/^(jpg|png|gif|jpeg|bmp)$/i) > -1)
    return { mode: 'img', mimeType: `${tail.toLowerCase()}/image` }
  if (tail.search(/^txt$/i) > -1) return { mode: 'txt', mimeType: `txt/plain` }
  if (tail.search(/^doc$/i) > -1)
    return { mode: 'doc', mimeType: `application/msword` }
  if (tail.search(/^docx$/i) > -1)
    return {
      mode: 'doc',
      mimeType: `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
    }
  if (tail.search(/^xls$/i) > -1)
    return { mode: 'xls', mimeType: `application/vnd.ms-excel` }
  if (tail.search(/^xlsx$/i) > -1)
    return {
      mode: 'xls',
      mimeType: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
    }
  if (tail.search(/^ppt$/i) > -1)
    return { mode: 'ppt', mimeType: `application/vnd.ms-powerpoint` }
  if (tail.search(/^pptx$/i) > -1)
    return {
      mode: 'ppt',
      mimeType: `application/vnd.openxmlformats-officedocument.presentationml.presentation`,
    }
  if (tail.search(/^pdf$/i) > -1)
    return { mode: 'pdf', mimeType: `application/pdf` }
  if (tail.search(/^zip$/i) > -1)
    return { mode: 'zip', mimeType: `application/zip` }
  return { mode: false, mimeType: false }
}

export function xmlToJson(xmlStr) {
  xmlStr = xmlStr.replace(/&lt;/g, '<') // 防止有转义字符
  xmlStr = xmlStr.replace(/&gt;/g, '>')
  xmlStr = xmlStr.replace(/&amp;/g, '&')
  let str1 = ''
  let str2 = ''
  const str3 = ''
  const str = xmlStr
  let start1 = false
  let start2 = false
  const arr = []
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    if (start1 && s !== '>' && s !== '<') {
      str1 += s
    } else if (str1 !== '') {
      arr.push(str1)
      str1 = ''
    }
    if (start2 && s !== '>' && s !== '<') {
      str2 += s
    } else if (str2 !== '') {
      arr.push(str2)
      str2 = ''
    }
    if (s === '<') {
      start1 = true
      start2 = false
    }
    if (s === '>') {
      start1 = false
      start2 = true
    }
  }
  const json = {}
  for (let i = 0; i < arr.length - 2; i++) {
    let strtemp = arr[i + 2]

    if (strtemp.length > 2 && strtemp === `/${arr[i]}`) {
      strtemp = strtemp.substring(1, strtemp.length)

      if (arr[i] === strtemp) {
        json[arr[i]] = arr[i + 1]
      }
    }
  }

  return json
}
