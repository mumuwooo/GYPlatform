import React,{Component} from 'react'
import { StyleSheet, Text, View,Dimensions} from "react-native";
import { commonStyle } from "../utils";
import {Touchable} from './index'
const {width,height} = Dimensions.get('window')

class TipsBlock extends Component {
  gotoDetail=()=>{

  }
  render(){
    const {type,title,info} = this.props;
    if(!type){
      return (
        <View style={styles.tips_block} activeOpacity={1}>
          <View style={styles.top_view}>
            <View style={styles.top_left}>
                <Text style={styles.title_text}>温馨提示</Text>
            </View>
          </View>
          <View style={styles.bottom_view}>
              <Text style={styles.info_text}>查看其它专业课程，请点击右上角图标，切换专业</Text>
          </View>
          {info&&
          <View style={styles.bottom_view}>
              <Text style={styles.info_text}>{info}</Text>
          </View>}
        </View>
      )
    }
    if(type == 'title'){
      return (
        <View style={styles.title_block} activeOpacity={1}>
          <View style={styles.left_view}>
                <Text style={styles.title_text_black}>{title}</Text>
          </View>
          {info&&<View style={styles.right_view}>
              <Text style={styles.info_text_black}>{info}</Text>
          </View>}
        </View>
      )
    }
  }
}

export default TipsBlock;

const styles = StyleSheet.create({
  tips_block:{
    width:width-24,
    borderRadius:commonStyle.borderRadiusMin,
    padding:15,
    backgroundColor: '#fff',
    marginBottom:commonStyle.blockSpace,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  top_view:{
    flexDirection:'row'
  },
  top_left:{
    flex:8,
    flexDirection:'row',
    alignItems:'center'
  },
  title_text:{
    color: commonStyle.h1Color,
    fontFamily: commonStyle.PFregular,
    fontSize:commonStyle.h3Size,
  },
  info_text:{
    color: commonStyle.h1Color,
    fontFamily: commonStyle.PFregular,
    fontSize:commonStyle.h4Size,
    marginTop:5
  },
  /** 标题块 */
  title_block:{
    width:width-24,
    borderRadius:commonStyle.borderRadiusMin,
    padding:15,
    backgroundColor: '#fff',
    marginBottom:commonStyle.blockSpace,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  left_view:{
    flex:5,
  },
  right_view:{
    flex:3,
    alignItems:'flex-end',
  },
  title_text_black:{
    color:commonStyle.h2Color,
    fontSize:commonStyle.h1Size,
    fontFamily:commonStyle.PFheavy,
  },
  info_text_black:{
    color:commonStyle.h4Color,
    fontSize:commonStyle.h4Size,
    fontFamily:commonStyle.PFregular,
  },
})