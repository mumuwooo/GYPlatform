import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage, } from 'teaset'
import moment from 'moment'
// import HTMLView from 'react-native-htmlview'
import HTML from 'react-native-render-html-for-maxwidth'
import {IconFont, NavBar, Divider} from '.'
import { commonStyle } from '../utils'
import { htmlDecodeByRegExp } from '../utils/tools'


const { width } = Dimensions.get('window')

class NewsDetail extends NavigationPage {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {

  }

  renderNavigationBar() {
    const {navTitle}=this.props.navigation.state.params
    return <NavBar title={navTitle} />
  }

  renderPage() {
    let newsList=null;
    //  const { zhInfoList } = this.props.zhInfos
     const { data} = this.props.navigation.state.params
    newsList=data
    let htmlContent = null
    if (newsList) {
      htmlContent =htmlDecodeByRegExp(newsList.content)
    }
    
    // const htmlContent =`
    // <p style="text-align: center;"><b>你头上有一个很长很长的犄角。。。。。。。。我是一个标题很长的标题的标题的标题总之就是很长就看你换不换行</b> </p><p style="text-align: center;"><img src="http://ctfive.oss-cn-hangzhou.aliyuncs.com/Course/2019/01/09/2417b42526634e3a82e94a3e64cff5fb0012.png" style="max-width:100%;"><br></p><p style="text-align: center;">开局一张图，后面全靠编。</p><p>        对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！<br></p>
    // `;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <View style={styles.top}>
                <Text style={styles.top_title}>
                    {newsList.title}
                </Text>
                <View style={styles.top_bottom}>
                    <Text style={styles.bottom_text}>发布时间：{moment(newsList.customTime).format('YYYY-MM-DD')} </Text>
                    {newsList.contentSource&&<Text style={styles.bottom_text}>来源：{newsList.contentSource}</Text>}
                </View>
            </View>
            <View style={styles.content}>
            <HTML
            html={htmlContent}
            imagesMaxWidth={width*0.95}
            tagsStyles={{
              p: {
                // fontFamily: "PingFang-SC-Medium",
                // fontSize: 16,
                // lineHeight:24,
                // color: "#666"
              },
            }}
          />
          <Divider type="bottomSpace" color='#fff'/>
                {/* <Text style={styles.content_text}>
                        3月29日、30日，昭化区司法局召开2019年度工作会。党组书记局长张远亮主持会议，局班子成员、全体司法行政干部、各法律服务机构负责人参加会议。
                </Text>
                <Text style={styles.content_text}>
                        会议传达学习了习近平总书记在中央全面依法治国委员会第二次会上的讲话、各级“两会”、司法部省市相关工作会议精神，各分管领导对2019年工作进行了安排。                
                </Text>
                <Image source={require('../../assets/images/zhinfos.png')} style={{width: 350,height: 235,alignSelf:'center',marginBottom:40,}} resizeMode='contain'/>
                <Text style={styles.content_text}>
                        会议指出，2018年，区司法行政系统在区委区政府的领导和上级主管部门的指导下，紧紧围绕区委区政府中心工作，充分发挥法治宣传、法律服务、法律保障职能作用，扎实有效开展了“七五”普法、公共法律服务体系建设、法治扶贫、人民调解、社区矫正、安置帮教和扫黑除恶等重点工作。我区村级治理工作得到省厅领导认可，“12.4国家宪法日”宣传活动和公共法律服务体系建设分别得到副市长、区委书记陈正永，区长龙兆学肯定批示。           
                </Text>
                <Text style={styles.content_text}>
                会议强调，2019年，全区司法行政系统充分发挥职能优势，按照“五年三步走”发展规划，对标“一年一变化、三年铸特色、五年创一流”的战略部署，围绕区委区政府重大决策，扎实有序推进各项工作。一是认真贯彻落实中央省市区重要会议精神，强化思想政治建设、履职能力建设、作风纪律建设、班子和干部队伍建设，保持奋发有为的精神状态和真抓实干的工作作风，打造忠诚干净担当的司法行政队伍；二是始终坚持以人民中心，以依法治区统揽司法行政各项工作，逐步推进依法治区和法治政府建设相互融合，抓实法律援助、特殊人员管控、人民调解三项重要工作，抓住普法教育中干部队伍、青少年、农村人群三个关键少数，切实提高人民群众法治意识，维护自身合法权益；三是严格落实“一年打基础，二年做推进，三年全建成”工作思路，扎实推进公共法律服务体系建设，充分整合法律服务保障职能，优化办事环境，提升工作效率，为全区人民群众提供普惠、均等、优质、高效的法律服务；四是自觉践行社会主义法治理念，聚焦能力建设、组织建设，强化矛盾纠纷多元化解，助力基层依法治理，奋力开创全区司法行政工作新局面，努力为建设现代化产城一体城乡融合绿色发展的昭化新区做出新的更大的贡献。                </Text> */}
            </View>

            <View style={styles.bottom}>
                <View style={styles.bottom_item}>
                    <IconFont name="&#xe638;" size={30} color='gray' />
                    <Text style={styles.item_text}>点赞</Text>
                </View>
                <View style={styles.bottom_item}>
                    <IconFont name="&#xe638;" size={30} color='gray' />
                    <Text style={styles.item_text}>收藏</Text>
                </View>
                <View style={styles.bottom_item}>
                    <IconFont name="&#xe638;" size={30} color='gray' />
                    <Text style={styles.item_text}>分享</Text>
                </View>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     paddingHorizontal: 13,
     flex: 1,
     backgroundColor: '#fff',
    // minHeight: height - 80,
    // alignItems: 'center',
  },
  top: {
    borderBottomColor:'#bfbfbf',
    borderBottomWidth:1,    
  },
  top_title: {
    alignSelf:'center',
    fontFamily: commonStyle.PFmedium,
    fontSize: commonStyle.h1Size,
    color: "#414141",
    marginBottom: 36,
    marginTop:46,
  },
  top_bottom:{
      paddingHorizontal:6,
      flexDirection:'row',
      justifyContent:'space-between',
  },
  bottom_text: {
    fontFamily: commonStyle.PFregular,
	fontSize: commonStyle.h5Size,
    color: "#414141",
    marginBottom:11,
  },
  content:{
    paddingTop:42,
  },
  content_text:{
    fontFamily: commonStyle.PFregular,
	fontSize: commonStyle.h21Size,
    color: "#414141",
    marginBottom:40,
  },
  bottom:{
      flexDirection:'row',
      paddingHorizontal:70,
      marginTop:20,
      marginBottom:54,
      justifyContent:'space-between',
  },

  item_text:{
    fontFamily: commonStyle.PFregular,
	fontSize: 15,
    color: "#414141",
    marginTop:13,
  },

})

// export default NewsDetail
export default connect(({zhInfos})=>({zhInfos}))(NewsDetail)
