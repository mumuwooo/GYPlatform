import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { NavigationBar, NavigationPage, Label, ListRow } from 'teaset'
import { commonStyle } from '../utils'

const { width } = Dimensions.get('window')
const HeadView = ({ children, height = 140, style, ...rest }) => {
  const styles = StyleSheet.create({
    head_view: {
      height,
      backgroundColor: commonStyle.bgColor,
      width: '100%',
      position: 'relative',
    },
    head_bg: {
      position: 'absolute',
      width: '100%',
      height: height - 35,
      backgroundColor: commonStyle.themeColor,
      zIndex: 1,
    },
    head_view_content: {
      position: 'absolute',
      bottom: 6,
      height: height - 16,
      backgroundColor: '#fff',
      borderRadius: commonStyle.borderRadius,
      width: width - 24,
      left: 12,
      zIndex: 2,
      ...commonStyle.shadow(),
    },
  })

  return (
    <View style={styles.head_view}>
      <View style={styles.head_bg} />
      <View style={[styles.head_view_content, style]}>{children}</View>
    </View>
  )
}

export default HeadView
