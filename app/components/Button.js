import React from 'react'
import { StyleSheet, Text } from 'react-native'

import Touchable from './Touchable'
import {commonStyle} from '../utils'


export const Button = ({ text, children, style,type,size,disabled, gray, textStyle, ...rest }) => {
 
  return (
  <Touchable style={[styles.button,style,btnType(type,disabled,gray),btnSize(size,disabled)]} {...rest} activeOpacity={disabled?1:0.8} onPress={disabled?()=>{}:rest.onPress}>
    <Text style={[styles.text, textStyle,textType(type,disabled),textSize(size,disabled)]}>{text || children}</Text>
  </Touchable>
)}

const btnType = (type='default',disabled)=>{
  if(disabled){
    return {
      backgroundColor: commonStyle.lightGrayColor||commonStyle.h4Color,
      borderColor:  '#d9d9d9'||commonStyle.h4Color,
    }
  }
  switch (type){
    case 'theme':
      return {
      backgroundColor: commonStyle.themeColor,
      borderColor: commonStyle.themeColor,
    }
    case 'green':
      return {
      backgroundColor: commonStyle.greenColor,
      borderColor: commonStyle.greenColor,
    } 
    case 'gray':
      return {
      backgroundColor: commonStyle.grayColor,
      borderColor: commonStyle.tintColor,
    } 
    case 'white':
      return {
      backgroundColor: 'transparent',
      borderColor: 'white',
    } 
    case 'black':
      return {
      backgroundColor: "#fff",
      borderColor: commonStyle.tintColor,
    } 
    default: return {}
  }
}
const textType = (type='default',disabled)=>{
  if(disabled){
    return {
      color: commonStyle.h4Color,
    }
  }
  switch (type){
    case 'theme':
      return {
      color: '#fff',
    }
    case 'green':
      return {
      color: '#fff',
    }
    case 'gray':
      return {
        color: commonStyle.h4Color,
      }
    case 'white':
      return {
      color: 'white',
    } 
    case 'black':
      return {
        color: commonStyle.h4Color,
      }
    default: return {}
  }
}
const btnSize = (type='default')=>{
  switch (type){
    case 'big':
      return {
      paddingVertical: 10,
      paddingHorizontal: 34,
      borderRadius:6
    } 
    case 'small':
      return {
      borderRadius:2,
      paddingVertical: 5,
      paddingHorizontal: 12,
    } 
    default: return {}
  }
}
const textSize = (type='default')=>{
  switch (type){
    case 'big':
        return {
          fontSize: commonStyle.h1Size,
        }
    case 'small':
        return {
          fontSize: commonStyle.h4Size,
        }
    default: return {}
  }
}
const styles = {
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#037aff',
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 16,
    color: '#000',
  }
}
export default Button
