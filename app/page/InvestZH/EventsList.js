import React, { Component } from 'react'
import { Image, StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native'
import ScaledImage from '../../components/ScaledImage'
import AutoHeightImage from 'react-native-auto-height-image'

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
          <AutoHeightImage
            getHeight={this._getBgHeight}
            source={require('../../assets/images/events/BigBg.jpg')}
            width={width}
          />
        </ScrollView>
        <ScrollView
          ref="frontScroll"
          style={[styles.scrollBg, {paddingBottom: 200, marginBottom: 200}]}
          onScroll={event => {
            // console.log(parallaxFactor);
            this.refs.backScroll.scrollTo({
              y: event.nativeEvent.contentOffset.y * 0.4,
            })
          }}
          scrollEventThrottle={16}
        >


            <View
              style={ [styles.box, { marginTop: 73 }]}
            >
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.35} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={67}
                    top={-20}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/02.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.35} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/04.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.1} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/06.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.25} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    8经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/08.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.1} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/10.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.3} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    8经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/12.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.1} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/14.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.3} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    8经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/16.png')} />
              </View>
            </View>


            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.06} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/18.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.3} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    8经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/20.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.15} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/22.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.3} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    8经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/24.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.14} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/26.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.3} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    8经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/28.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.14} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/30.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.15} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    8经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/32.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.14} ]}>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    CE经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/34.png')} />
              </View>
            </View>

            <View style={ styles.box}>
              <View style={styles.boxRow}>
                <View style={[styles.boxEmptyBlock, {width: width*0.15} ]}>
                </View>
                <View style={styles.boxTimeBlock}>
                  <ScaledImage
                    uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                    width={63}
                    top={-18}
                  >
                    <Text
                    style={styles.boxTimeText}
                    >
                      1989
                    </Text>
                  </ScaledImage>
                </View>
                <View style={styles.boxTitleBlock}>
                  <Text
                  style={styles.boxMainTitle}
                  >
                    1989年8月15日
                  </Text>
                  <Text
                  style={styles.boxSubTitle}
                  >
                    8经国务院批准，国家民政部批复，建元坝区
                  </Text>
                </View>
              </View>
              <View style={styles.boxRow}>
                <AutoHeightImage width={width} source={require('../../assets/images/events/36.png')} />
              </View>
            </View>







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
  box:{
    flexDirection: 'column',
  },
  boxRow: {
    flexDirection: 'row',
  },
  boxTitleBlock: {
    width: 143
  },
  boxMainTitle:{
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,

  },
  boxSubTitle:{
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20
  },
  boxTimeText: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 20,
    top: 20,

  },
  boxImage: {

  },
  boxEmptyBlock: {
  }
})

