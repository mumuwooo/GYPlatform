import React from 'react'
import { StyleSheet,View, Text ,Dimensions} from 'react-native'
import { Touchable,Iconfont } from '../../components'
const { width, height } = Dimensions.get('window');


export const TechBlock = ({ title,text, data, style, textStyle, ...rest }) => {
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
        <Iconfont name='&#xe63d;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>科技成果服务</Text>
        </View>
       </View>

       <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe637;' style={styles.icon} textStyle={{fontSize:14}}/>
        <Text style={styles.iconText} numberOfLines={1}>科技项目服务</Text>
        </View>
       </View>

       <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe636;' style={styles.icon} textStyle={{fontSize:18}}/>
        <Text style={styles.iconText} numberOfLines={1}>专利申报服务</Text>
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
     backgroundColor:'#8292f3',
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

export default TechBlock

