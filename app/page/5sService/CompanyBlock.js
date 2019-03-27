import React from 'react'
import { StyleSheet,View, Text ,Dimensions} from 'react-native'
import { Touchable,Iconfont } from '../../components'
const { width, height } = Dimensions.get('window');
import { NavigationActions } from '../../utils'

export const CompanyBlock = ({ title,text, data, style, textStyle, ...rest }) => {
    return (
      <View style={[styles.container, style]} {...rest}>
    <View style={styles.headerLine}>
        <Text style={styles.devideLine}/>
        <Text style={styles.headerTitle} >{title}</Text>
        <Text style={styles.devideLine}/>
    </View>
    <View style={styles.content}>
        <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe638;' style={styles.icon} textStyle={{fontSize:10}}/>
        <Text style={styles.iconText} numberOfLines={1}>园区及企业概述</Text>
        </View>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe61b;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>要素保障服务</Text>
        </View>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe629;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>法律服务直通车</Text>
        </View>
       </View>

       <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe61f;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>企业即时运行情况</Text>
        </View>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe61d;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>动态资讯</Text>
        </View>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe622;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>税务直通车</Text>
        </View>
       </View>

       <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe61a;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>企业数据汇总分析</Text>
        </View>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe61e;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>行政审批事项</Text>
        </View>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe620;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>社保直通车</Text>
        </View>
        
       </View>
    </View>
   </View>
)
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
  },
  headerLine:{
    height:35,
    marginTop: 15,
    marginBottom: 17,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  devideLine:{
      width:100,
      height:0.5,
      opacity: 0.3,
	  backgroundColor: "#b8d763"
  },
  headerTitle:{
	fontFamily: "MicrosoftYaHei",
	fontSize: 12,
	color: "#454545",
	opacity: 0.75,
    paddingHorizontal: 10,  
  },
  content:{
    paddingLeft: 10,
      flexDirection:'row',
      // justifyContent:'space-around',
      marginBottom:10,
  },
  iconItem:{
    width:width*0.31,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
  },
 icon:{
     backgroundColor:'#ff5971',
     width:17,
     height:17,
     borderRadius:9,
     textAlign:'center',
     textAlignVertical:'center',
     marginRight: 5,
     },
 iconText:{
    fontFamily: "MicrosoftYaHeiUI",
	fontSize: 10,
	color: "#5d5b5b"
 },   
})

export default CompanyBlock
