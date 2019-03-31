import React , { Component } from 'react'
import { StyleSheet,View, Text ,Dimensions,Image} from 'react-native'
import Swiper from 'react-native-swiper'
import {Carousel} from 'teaset'
import { Touchable,IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window');


export const AchiveInfos =({style, ...rest})=>{
handleSubmenuShow=()=>{
        alert('二级菜单')
    }

    return (
    <View style={[styles.container,style]}>
            {data.map((item,index)=>(
            <View style={styles.item_view} key={index}>
            <Image style={{width: 154, height: 96}} resizeMode='contain' source={require('../../../assets/images/achiveinfos1.png')} />
            <View style={styles.item_text}>
                <Text style={styles.text_content} numberOfLines={2}>{item.content}</Text>
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
    width,
    flexDirection:'row',
    paddingHorizontal:16,
    justifyContent:'space-between',
    // alignItems:'center',

  },
  item_view:{
    alignItems:'center',
    // width:width*0.4,
   // justifyContent:'center',
    marginTop:17,
  },

  item_text:{
    alignItems:'center',
    justifyContent:'center',
    width:width*0.32,
    paddingTop:9,
  },
  text_content:{
    textAlign:'center',
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: commonStyle.h2Color,
  },

})

const data=[
    {'Title':'广元大汉科技有限责任公司','content':'山清米业荣获全国青少年儿童食品安全示范基地'},
    {'Title':'广元大汉科技有限责任公司','content':'王家贡米斩获“全国优质鱼米金奖'},
]
export default AchiveInfos

