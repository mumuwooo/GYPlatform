import React from 'react'
import { StyleSheet,View, Text ,Dimensions} from 'react-native'
import { Touchable,Iconfont } from '../../components'
const { width, height } = Dimensions.get('window');


export const ProjectBlock = ({ title,text, data, style, textStyle, ...rest }) => {
    return (
      <View style={[styles.container, style]} {...rest}>
    <View style={styles.headerLine}>
        <Text style={styles.devideLine}/>
        <Text style={styles.headerTitle} onPress={this.handleTest}>{title}</Text>
        <Text style={styles.devideLine}/>
    </View>
    <View style={styles.content}>
        <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe635;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>经济合作</Text>
        </View>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe639;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>项目申报</Text>
        </View>
       </View>

       <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe63b;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>投资在线审批服务</Text>
        </View>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe631;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>建设项目协调服务</Text>
        </View>
       </View>

       <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe633;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>一站通</Text>
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
      marginBottom:10,
  },
  iconItem:{
    width:width*0.31,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
  },
 icon:{
     backgroundColor:'#b8d763',
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

export default ProjectBlock

