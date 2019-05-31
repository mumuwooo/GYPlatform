import React from 'react'
import { View, Text } from 'react-native'
import { commonStyle } from '../utils'

const Divider = ({
  width = 1,
  color,
  top = 0,
  bottom = 0,
  type,
  text,
  bgcolor,
  style,
}) =>
  !type ? (
    <View
      style={[
        {
          width: '100%',
          marginTop: top,
          marginBottom: bottom,
          backgroundColor: color || commonStyle.bgColor,
          height: width,
        },
        style,
      ]}
    />
  ) : type == 'bottomSpace' ? (
    <View
      style={{
        width: '100%',
        marginTop: top,
        marginBottom: bottom,
        backgroundColor: color || commonStyle.bgColor,
        height: width > 1 ? width : 60,
      }}
    />
  ) : type == 'vertical' ? (
    <View
      style={{
        width,
        marginTop: top,
        marginBottom: bottom,
        backgroundColor: color || commonStyle.bgColor,
        height: '100%',
      }}
    />
  ) : type == 'bottomText' ? (
    <View
      style={{
        width: '100%',
        position: 'relative',
        height: 40,
        marginTop: top,
        marginBottom: bottom,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: '85%',
          backgroundColor: color || '#d5d5d5',
          height: 0.5,
          position: 'absolute',
          top: 20,
          zIndex: 1,
        }}
      />
      <Text
        style={{
          fontSize: commonStyle.h3Size,
          color: color || '#c5c5c5',
          position: 'absolute',
          zIndex: 2,
          paddingHorizontal: 15,
          backgroundColor: bgcolor || commonStyle.bgColor,
        }}
      >
        {text || `已经到底了`}
      </Text>
    </View>
  ) : null

export default Divider
