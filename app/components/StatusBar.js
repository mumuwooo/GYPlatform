/**
 * 组件名称： StatusBar
 * 功能： 状态栏
 * props：
 *  backgroundColor: String     非线性渐变下的背景色，
 *  barStyle: Enum              开启状态栏颜色，('default', 'light-content', 'dark-content') ，
 *  translucent: Boolen         开启沉浸状态栏，
 *  hidden: Boolen              是否隐藏状态栏，
 *  line: Boolen                开启线性渐变，
 *  lineColors: Array           线性渐变颜色，
 *  lineStart: Object           线性渐变起始坐标，
 *  lineEnd: Object             线性渐变结束坐标
 */

import React, { Component } from 'react'
import { View, StatusBar, Platform, Dimensions } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import { deviceInfo } from '../utils'

const { height, width } = Dimensions.get('window')

class Status extends Component {
  static defaultProps = {
    translucent: false,
    hidden: false,
    barStyle: 'default',
    line: false, // 是否开启渐变色
    lineColors: [],
    lineStart: { x: 0.0, y: 1.0 },
    lineEnd: { x: 1.0, y: 1.0 },
  }
  render() {
    const {
      backgroundColor,
      barStyle,
      translucent,
      hidden,
      line,
      lineColors,
      lineStart,
      lineEnd,
    } = this.props
    if (translucent) {
      if (line) {
        if (Platform.OS === 'ios') {
          return (
            <LinearGradient
              colors={lineColors}
              start={lineStart}
              end={lineEnd}
              style={{
                width,
                height: deviceInfo.isIphoneX ? 44 : 20,
                zIndex: 1,
                position: 'absolute',
              }}
            >
              <StatusBar barStyle={barStyle} hidden={hidden} />
            </LinearGradient>
          )
        }
        if (Platform.OS === 'android') {
          return (
            <LinearGradient
              colors={lineColors}
              start={lineStart}
              end={lineEnd}
              style={{
                width,
                height: StatusBar.currentHeight,
                zIndex: 1,
                position: 'absolute',
              }}
            >
              <StatusBar
                backgroundColor="rgba(0, 0, 0, 0.0)"
                barStyle={barStyle}
                hidden={hidden}
                translucent
              />
            </LinearGradient>
          )
        }
      } else {
        if (Platform.OS === 'ios') {
          return (
            <View
              style={{
                width,
                height: deviceInfo.isIphoneX ? 44 : 20,
                zIndex: 1,
                position: 'absolute',
                backgroundColor,
              }}
            >
              <StatusBar barStyle={barStyle} hidden={hidden} />
            </View>
          )
        }
        if (Platform.OS === 'android') {
          return (
            <View
              style={{
                width,
                height: StatusBar.currentHeight,
                zIndex: 1,
                position: 'absolute',
                backgroundColor,
              }}
            >
              <StatusBar
                backgroundColor="rgba(0, 0, 0, 0.0)"
                barStyle={barStyle}
                hidden={hidden}
                translucent
              />
            </View>
          )
        }
      }
    } else if (line) {
      if (Platform.OS === 'ios') {
        return (
          <LinearGradient
            colors={lineColors}
            start={lineStart}
            end={lineEnd}
            style={{ height: deviceInfo.isIphoneX ? 44 : 20 }}
          >
            <StatusBar barStyle={barStyle} hidden={hidden} />
          </LinearGradient>
        )
      }
      if (Platform.OS === 'android') {
        return (
          <LinearGradient
            colors={lineColors}
            start={lineStart}
            end={lineEnd}
            style={{ height: StatusBar.currentHeight }}
          >
            <StatusBar
              backgroundColor="rgba(0, 0, 0, 0.0)"
              barStyle={barStyle}
              hidden={hidden}
              translucent
            />
          </LinearGradient>
        )
      }
    } else {
      if (Platform.OS === 'ios') {
        return (
          <View
            style={{
              height: deviceInfo.isIphoneX ? 44 : 20,
              backgroundColor,
            }}
          >
            <StatusBar barStyle={barStyle} hidden={hidden} />
          </View>
        )
      }
      if (Platform.OS === 'android') {
        return (
          <View
            style={{
              height: StatusBar.currentHeight,
              backgroundColor,
            }}
          >
            <StatusBar
              backgroundColor="rgba(0, 0, 0, 0.0)"
              barStyle={barStyle}
              hidden={hidden}
              translucent
            />
          </View>
        )
      }
    }
  }
}

export default Status
