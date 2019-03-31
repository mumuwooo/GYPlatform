import React , { Component } from 'react'
import { StyleSheet,View, Text ,Dimensions,Image} from 'react-native'
import Swiper from 'react-native-swiper'
import {Carousel} from 'teaset'
import { Touchable,IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window');


export const CompanyInfos =({style, ...rest})=>{
handleSubmenuShow=()=>{
        alert('二级菜单')
    }

    return (
    <View style={[styles.container,style]}>
            {data.map((item,index)=>(
            <View style={styles.item_view} key={index}>
            <View style={styles.item_top}>
            <Image style={{width: 123, height: 83}} resizeMode='contain' source={require('../../../assets/images/companginfos1.png')} />
            <View style={styles.item_text}>
                <Text style={styles.text_title}>{item.Title}</Text>
                <Text style={styles.text_content} numberOfLines={3}>{item.content}</Text>
            </View>
            </View>
            </View>
            ))}
            {/* <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../../../assets/images/companginfos2.png')} />
            <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../../../assets/images/companginfos3.png')} /> */}
    </View>
)

}

const styles = StyleSheet.create({
  container: {
    paddingRight:12,
    marginBottom:10,
  },
  item_dot:{
    width: 6,
    height: 6,
    borderRadius:3,
    backgroundColor: "#b5b5b5",
    margin:6,
    marginTop:7,
    // position:'relative'
  },
  item_activeDot:{
    // position:'relative',
    marginTop:7,
    width: 6,
    height: 6,
    borderRadius:3,
    margin:6,
	  backgroundColor: "#e44a4c"
  },
  item_top:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:27
  },
  crossLine:{
    width,
	height: 1,
	opacity: 0.2,
    backgroundColor: '#8b8b8b',
    marginVertical:13,
  },
  item_bottom:{
    paddingTop:12,
  },
  item_text:{
      paddingTop:9,
      flex:2,
  },
  text_title:{
    fontFamily: commonStyle.PFregular,
	fontSize: commonStyle.h21Size,
    color: commonStyle.themeColor,
    paddingBottom:9,
  },
  text_content:{
    fontFamily: commonStyle.PFregular,
	fontSize: commonStyle.h4Size,
	color: commonStyle.h2Color,
  },

})

const data=[
    {'Title':'广元大汉科技有限责任公司','content':'公司专业从事墙体基层材料的研发、生产，从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},
    {'Title':'广元大汉科技有限责任公司','content':'从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},
]
export default CompanyInfos

