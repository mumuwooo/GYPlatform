import React from 'react'
import { StyleSheet,View, Text ,Dimensions} from 'react-native'
import { Touchable,Iconfont } from '../../components'
const { width, height } = Dimensions.get('window');


export const BrandBlock = ({ title,text, data, style, textStyle, ...rest }) => {
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
        <Iconfont name='&#xe63e;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>市场开拓</Text>
        </View>
       </View>

       <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe619;' style={styles.icon} textStyle={{fontSize:14}}/>
        <Text style={styles.iconText} numberOfLines={1}>金字招牌工程</Text>
        </View>
       </View>

       <View style={styles.iconSection}>
        <View style={styles.iconItem}>
        <Iconfont name='&#xe61c;' style={styles.icon} textStyle={{fontSize:16}}/>
        <Text style={styles.iconText} numberOfLines={1}>“昭化造”品牌展示</Text>
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
     backgroundColor:'#f2b975',
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

export default BrandBlock

