import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native'
import { NavigationBar, NavigationPage, Button } from 'teaset'
import { connect } from 'react-redux'
import { commonStyle, NavigationActions, Storage } from '../../utils'
import { Divider, Touchable, IconFont } from '../../components'

const { width, height } = Dimensions.get('window');

export const NewsBlock = ({
    text,
    data,
    style,
    type,
    size,
    disabled,
    gray,
    textStyle,
    ...rest
  }) => {
    // const dataImg={uri:data.img}
    const dataImg=require('../../assets/images/companginfos1.png')
    return (
    <Touchable style={styles.eachitem} >
      <Image source={dataImg} style={styles.left_img} />
      <View style={styles.right_content}>
        <Text style={styles.right_title}>{data.title}</Text>
        <View style={styles.right_bottom}>
          <Text style={styles.bottom_date}>{data.date}</Text>
          <Text style={styles.bottom_source}>{data.source}</Text>
        </View>
      </View>
    </Touchable>
    )
  }
  
  const styles = {
    eachitem: {
      flexDirection:'row',
      paddingLeft:14,
      paddingRight:20,
      paddingVertical:16,
    },
    left_img: {
      width: 105,
      height: 77,
      marginRight:14,
    },
    right_content:{
      justifyContent:'space-between',
      width:width*0.6

    },
    right_title:{
      fontFamily: commonStyle.PFregular,
      fontSize: commonStyle.h21Size,
      color: commonStyle.h2Color,
    },
    right_bottom:{
      flexDirection:'row',
    },
    bottom_date:{
      fontFamily: commonStyle.PFregular,
      fontSize: commonStyle.h4Size,
      color: "#9d9999",
      paddingRight:10,
      borderRightColor:'#afafaf',
      borderRightWidth:1,
      marginRight:10,
    },
    bottom_source:{
      fontFamily: commonStyle.PFregular,
      fontSize: commonStyle.h4Size,
      color: commonStyle.h2Color,
      opacity: 0.8
    }
  }
  export default NewsBlock
