import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native'
import ScaledImage from '../../components/ScaledImage'

const { width, height } = Dimensions.get('window')

export default class EventsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgHeight: '',
      ftHeight: '',
    }
  }

  _getBgHeight = bgHeight => {
    console.log(`bgHeight: ${bgHeight}`)
    this.setState({ bgHeight })
  }

  _getFtHeight = ftHeight => {
    console.log(`ftheight: ${ftHeight}`)
    this.setState({ ftHeight })
  }

  render() {
    // const {bgHeight, ftHeight} = this.state;
    // const parallaxFactor=bgHeight/ftHeight;
    return (
      <View style={{ height, width, position: 'relative' }}>
        <ScrollView ref="backScroll" style={[styles.scrollBg]}>
          <ScaledImage
            getHeight={this._getBgHeight}
            uri="https://s2.ax1x.com/2019/04/12/AqG62R.md.jpg"
            width={width}
          />
        </ScrollView>
        <ScrollView
          ref="frontScroll"
          style={[styles.scrollBg]}
          onScroll={event => {
            // console.log(parallaxFactor);
            this.refs.backScroll.scrollTo({
              y: event.nativeEvent.contentOffset.y * 0.35,
            })
          }}
          scrollEventThrottle={16}
        >
          <ScaledImage
            getHeight={this._getFtHeight}
            uri="https://s2.ax1x.com/2019/04/12/AqG5Ie.md.png"
            width={width}
          >
            <View
              style={{ flexDirection: 'row', marginLeft: 136, marginTop: 73 }}
            >
              <View style={{ width: 143, alignItems: 'center' }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 20,
                  }}
                >
                  1989年8月15日
                </Text>
                <Text
                  style={{ textAlign: 'center', fontSize: 14, lineHeight: 20 }}
                >
                  经国务院批准，国家民政部批复，建元坝区
                </Text>
              </View>
              <ScaledImage
                uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                width={67}
                top={-20}
              >
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    lineHeight: 20,
                    top: 20,
                  }}
                >
                  1989
                </Text>
              </ScaledImage>
            </View>
            <View
              style={{ flexDirection: 'row', marginLeft: 155, marginTop: 115 }}
            >
              <ScaledImage
                uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                width={67}
                top={-20}
              >
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    lineHeight: 20,
                    top: 20,
                  }}
                >
                  1989
                </Text>
              </ScaledImage>
              <View style={{ width: 143, alignItems: 'center' }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 20,
                  }}
                >
                  1989年8月15日
                </Text>
                <Text
                  style={{ textAlign: 'center', fontSize: 14, lineHeight: 20 }}
                >
                  经国务院批准，国家民政部批复，建元坝区
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: 'row', marginLeft: 60, marginTop: 106 }}
            >
              <View style={{ width: 143, alignItems: 'center' }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 'bold',
                    lineHeight: 20,
                  }}
                >
                  1989年8月15日
                </Text>
                <Text
                  style={{ textAlign: 'center', fontSize: 14, lineHeight: 20 }}
                >
                  经国务院批准，国家民政部批复，建元坝区
                </Text>
              </View>
            </View>
          </ScaledImage>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollBg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    // left: 0,
    // right: 0,
  },
})
