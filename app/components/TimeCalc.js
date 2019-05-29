import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { addTime, reduceTime } from '../utils/tools'
import { commonStyle } from '../utils'

export default class TimeCalc extends React.Component {
  constructor(props) {
    super()
    this.state = {
      timerObj: {},
      pause: null,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.reduceType) {
      if (
        (nextProps && this.props.initTime != nextProps.initTime) ||
        this.state.timerObj.times == null
      ) {
        if (!nextProps.initTime) return
        this.setState({ timerObj: { times: nextProps.initTime } })
        this.timerMinus()
      }
    } else if (!this.state.timerObj.times || this.state.timerObj.times < 0) {
        this.timerPlus()
      }

    if (nextProps && this.props.pause != nextProps.pause) {
      const { pause } = nextProps
      if (!this.state.timerObj.times) return
      if (pause === true) {
        this.timer && clearInterval(this.timer)
      } else if (pause === false) {
        if (this.props.reduceType) {
          this.timerMinus()
        } else {
          this.timerPlus()
        }
      }
    }
  }
  componentWillUnmount() {
    this.setState({ timerObj: {} })
    this.timer && clearInterval(this.timer)
  }
  timerPlus(times) {
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(() => {
      const timerObj = addTime(this.state.timerObj, 1)
      this.props.onChange && this.props.onChange(timerObj)
      this.setState({ timerObj })
    }, 1000)
  }
  timerMinus() {
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(() => {
      const timerObj = reduceTime(this.state.timerObj, 1)
      this.props.onChange && this.props.onChange(timerObj)
      this.setState({ timerObj })
    }, 1000)
  }
  render() {
    return (
      // <span >{this.state.timerObj.text||'00:00:00'}</span>
      <View style={styles.nav_view}>
        <View style={styles.nav_block}>
          <Text style={styles.nav_text}>{this.state.timerObj.h || `00`}</Text>
        </View>
        <Text style={styles.nav_text_split}>:</Text>
        <View style={styles.nav_block}>
          <Text style={styles.nav_text}>{this.state.timerObj.m || `00`}</Text>
        </View>
        <Text style={styles.nav_text_split}>:</Text>
        <View style={styles.nav_block}>
          <Text style={styles.nav_text}>{this.state.timerObj.s || `00`}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nav_view: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  nav_block: {
    paddingHorizontal: 3,
    paddingVertical: 0,
    // marginHorizontal:2,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: commonStyle.borderRadiusMin,
  },
  nav_text: {
    fontSize: commonStyle.h3Size,
    fontFamily: commonStyle.Dbold,
    fontWeight: 'bold',
    color: commonStyle.themeColor,
  },
  nav_text_split: {
    fontSize: commonStyle.h3Size,
    fontFamily: commonStyle.Dbold,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 2,
  },
})
