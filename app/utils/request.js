import fetch from 'dva/fetch'
import { BASE_URL, X_HOST } from './config'
import Storage from './storage'

const CONFIG_HEADERS = {
  Referrer: '6s.pinpin.pro',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'X-Host': X_HOST,
}
const CONFIG_HEADERS_XML = {
  'Content-Type': 'text/html',
  'Access-Control-Allow-Origin': '*',
}
const CONFIG_FILE_HEADERS = {
  // 'X-Host':'6s.pinpin.pro'
  'X-Host': X_HOST,
}
function prevController(params = {}) {
  // 需要翻页 自动展开paging对象
  if (params && params.paging) {
    const { PageSize, PageIndex, PageStatus } = params.paging // paging属性 PageStatus:1分页
    params.PageSize = PageSize
    params.PageIndex = PageIndex
    params.PageStatus = PageStatus
    delete params.paging
  }

  // 需要plantype
  if (params && params.hasPlanType) {
    if (window._PlanType > 1) {
      params.PlanType = window._PlanType
    }
    delete params.hasPlanType
  }

  // 存在StuDetail_ID
  if (window._UserDetailKey) {
    params.StuDetail_ID = window._UserDetailKey
  }
  return params
}

export default function request(options) {
  var result = ''
  const params = prevController(options.params)
  let base = BASE_URL
  if (options.url.search(/^http/) == 0) {
    base = ''
  }
  if (options.method === 'get') {
    result = requestGET(base + options.url, params)
  } else {
    var result = requestPOST(base + options.url, params)
  }
  return result
}

export function POST(options) {
  let base = BASE_URL
  if (options.url.search(/^http/) == 0) {
    base = ''
  }
  const params = prevController(options.params)
  const result = requestPOST(base + options.url, params)
  return result
}
export function GET(options) {
  let base = BASE_URL
  if (options.url.search(/^http/) == 0) {
    base = ''
  }
  const params = prevController(options.params)
  const result = requestGET(base + options.url, params)
  return result
}

export function FILE(options) {
  let base = BASE_URL
  if (options.url.search(/^http/) == 0) {
    base = ''
  }
  return requestFILE(base + options.url, options.data)
}
export function XML(options) {
  let base = BASE_URL
  if (options.url.search(/^http/) == 0) {
    base = ''
  }
  return requestXML(base + options.url, options.data)
}

function requestGET(url, params) {
  if (params) {
    const paramsArray = []
    Object.keys(params).forEach(key =>
      paramsArray.push(`${key  }=${  params[key]}`)
    )
    if (url.search(/\?/) === -1) {
      url += `?${  paramsArray.join('&')}`
    } else {
      url += `&${  paramsArray.join('&')}`
    }
  }
  // 请求参数
  if (url.search('/datastore/Discipline/GetAllDisciplineInfoOnly') >= 0) {
    url = `${url  }?${  new Date().getTime()  }${Math.random()}`
  }
  let headers
  if (window._userToken) {
    headers = { ...CONFIG_HEADERS, Authorization: window._userToken }
  } else {
    headers = CONFIG_HEADERS
  }
  const requestOBJ = [
    url,
    {
      method: 'GET',
      credentials: 'include',
      cache: 'no-cache',
      headers,
    },
  ]
  return new Promise(((resolve, reject) => {
    fetch(requestOBJ[0], requestOBJ[1])
      .then(response => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } 
          consoleReq(response, requestOBJ, 'error', params)
        
      })
      .then(response => {
        if (typeof response != 'object') return
        RequestCodeStatus(response)
        resolve(response)
        consoleReq(response, requestOBJ, 'success', params)
      })
      .catch(response => {
        consoleReq(response, requestOBJ, 'error', params)
        
      })
  })).catch((err) => {
    alert('err')
  })
}

function requestPOST(url, params) {
  const requestOBJ = [
    url,
    {
      method: 'POST',
      cache: 'no-cache',
      headers: CONFIG_HEADERS,
      body: JSON.stringify(params),
      credentials: 'include',
    },
  ]
  return new Promise(((resolve, reject) => {
    fetch(requestOBJ[0], requestOBJ[1])
      .then(response => {
        if (response.ok) {
          return response.json()
        } 
          // 错误提示信息
          consoleReq(response, requestOBJ, 'error', params)
          
        
      })
      .then(response => {
        if (typeof response != 'object') return
        RequestCodeStatus(response)
        resolve(response)
        consoleReq(response, requestOBJ, 'success', params)
      })
      .catch(response => {
        consoleReq(response, requestOBJ, 'error', params)
        
      })
  })).catch((err) => {
    alert('err')
  })
}

function requestXML(url) {
  const requestOBJ = [
    url,
    {
      method: 'GET',
      credentials: 'include',
      headers: CONFIG_HEADERS_XML,
    },
  ]
  //  console.log(requestOBJ)
  return new Promise(((resolve, reject) => {
    fetch(requestOBJ[0], requestOBJ[1])
      .then(response => {
        if (response.ok) {
          return response.text()
        } 
          consoleReq(response, requestOBJ)
        
      })
      .then(response => {
        if (typeof response != 'object') return
        RequestCodeStatus(response)
        resolve(response)
        consoleReq(response, requestOBJ)
      })
      .catch(response => {
        consoleReq(response, requestOBJ, 1)
        
      })
  })).catch((err) => {
    alert('err')
  })
}
function requestFILE(url, params) {
  const filedata = new FormData()
  if (params) {
    filedata.append('file', params.file)
  }
  const requestOBJ = [
    url,
    {
      method: 'POST',
      credentials: 'include',
      headers: CONFIG_FILE_HEADERS,
      body: filedata,
    },
  ]
  //  console.log(requestOBJ)
  return new Promise(((resolve, reject) => {
    fetch(requestOBJ[0], requestOBJ[1])
      .then(response => {
        if (response.ok) {
          return response.json()
        } 
          consoleReq(response, requestOBJ)
        
      })
      .then(response => {
        if (typeof response != 'object') return
        RequestCodeStatus(response)
        resolve(response)
        consoleReq(response, requestOBJ)
      })
      .catch(response => {
        consoleReq(response, requestOBJ, 1)
        
      })
  })).catch((err) => {
    alert('err')
  })
}
function consoleReq(response, requestOBJ, status, params) {
  let res = {}
  if (status == 'success') {
    res = { ...response }
    res.__REQUEST_DATA = {
      _URL: requestOBJ[0].split('?')[0],
      url: requestOBJ[0],
      _PARAMS: params,
      _METHOD: requestOBJ[1].method,
      requestOBJ: requestOBJ[1],
    }
    res.response = response
    if (!window._IsRelease) {
      // 非正式环境
      console.log(res)
    }
  } else {
    res = { ...response }
    res.TypeError = response.Message
    res.__REQUEST_DATA = {
      _URL: requestOBJ[0].split('?')[0],
      _PARAMS: params,
      _METHOD: requestOBJ[1].method,
      requestOBJ: requestOBJ[1],
    }
    res.response = response
    if (!window._IsRelease) {
      // 非正式环境
      console.warn(res)
    }
  }
}
function RequestCodeStatus(response) {
  const success = response.SuccessResponse
  const code = response.ResponseCode
  const msg = response.Message
  if (code === 403) {
    // 跳转到登录页  （建议记录当前路由页面，登录完成后再跳回来）
    dispatch && dispatch({ type: 'app/isLogout' })
    return // 403 不提示 未登录
  }
  if (!success) {
    // message.info(msg);// 提示信息
  }
}
