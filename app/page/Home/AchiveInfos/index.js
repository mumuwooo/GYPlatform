import React , { Component } from 'react'
import { StyleSheet,View, Text ,Dimensions, Image, ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { Touchable,IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import _baseURLGlobal from '../../../utils/global'

const { width, height } = Dimensions.get('window');


export const AchiveInfos =({style, data,dispatch,...rest})=>{

  const gotoDetail=(index)=>{
    const itemData=data[index]
    dispatch(NavigationActions.navigate({ routeName: 'NewsDetail', params: { navTitle:"成果展示",data:itemData } }))
}
    console.log('========AchiveInfos============================');
    console.log(data);
    console.log('====================================');
    return (
    <ScrollView style={[styles.container,style]} horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((item,index)=>(
            <Touchable style={styles.item_view} key={index} onPress={()=>gotoDetail(index)}>
            <Image style={{width: 154, height: 96}} resizeMode='contain' source={{uri: _baseURLGlobal+item.pictureUrl}} />
            <View style={styles.item_text}>
                <Text style={styles.text_content} numberOfLines={2}>{item.title}</Text>
            </View>
            </Touchable>
            ))}
            {/* <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../../../assets/images/companginfos2.png')} />
            <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../../../assets/images/companginfos3.png')} /> */}
    </ScrollView>
)

}

const styles = StyleSheet.create({
  container: {
    width,
    flexDirection:'row',
    paddingHorizontal:16,
    // justifyContent:'space-between',
    // alignItems:'center',

  },
  item_view:{
    alignItems:'center',
    // width:width*0.4,
   // justifyContent:'center',
   paddingRight:25,
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
export default connect(({home})=>({home}))(AchiveInfos)

