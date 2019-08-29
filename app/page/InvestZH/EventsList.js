import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
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

  renderEvents(events) {
    if (events) {
      return (
        <View>
          <View style={[styles.box, { marginTop: 73 }]}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.35 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[0].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[0].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={67}
                  top={-20}
                >
                  <Text style={styles.boxTimeText}>{events[0].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/02.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.35 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[1].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[1].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[1].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/04.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.1 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[2].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[2].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[2].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/06.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.25 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[3].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[3].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[3].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/08.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.1 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[4].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[4].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[4].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/10.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.3 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[5].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[5].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[5].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/12.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.1 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[6].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[6].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[6].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/14.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.3 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[7].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[7].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[7].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/16.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.06 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[8].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[8].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[8].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/18.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.3 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[9].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[9].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[9].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/20.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.15 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[10].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[10].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[10].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/22.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.3 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[11].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[11].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[11].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/24.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.14 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[12].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[12].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[12].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/26.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.3 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[13].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[13].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[13].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/28.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.14 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[14].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[14].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[14].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/30.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.15 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[15].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[15].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[15].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/32.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.14 }]} />
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[16].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[16].title}</Text>
              </View>
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGyG9.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[16].eventYear}</Text>
                </ScaledImage>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/34.png')}
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <View style={[styles.boxEmptyBlock, { width: width * 0.15 }]} />
              <View style={styles.boxTimeBlock}>
                <ScaledImage
                  uri="https://s2.ax1x.com/2019/04/12/AqGsPJ.png"
                  width={63}
                  top={-18}
                >
                  <Text style={styles.boxTimeText}>{events[17].eventYear}</Text>
                </ScaledImage>
              </View>
              <View style={styles.boxTitleBlock}>
                <Text style={styles.boxMainTitle}>{events[17].eventDate}</Text>
                <Text style={styles.boxSubTitle}>{events[17].title}</Text>
              </View>
            </View>
            <View style={styles.boxRow}>
              <AutoHeightImage
                width={width}
                source={require('../../assets/images/events/36.png')}
              />
            </View>
          </View>
        </View>
      )
    }
  }

  render() {
    // const {bgHeight, ftHeight} = this.state;
    // const parallaxFactor=bgHeight/ftHeight;
    const events = this.props.events
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
          style={[styles.scrollBg, { paddingBottom: 200, marginBottom: 200 }]}
          onScroll={event => {
            // console.log(parallaxFactor);
            this.refs.backScroll.scrollTo({
              y: event.nativeEvent.contentOffset.y * 0.4,
            })
          }}
          scrollEventThrottle={16}
        >
          {this.renderEvents(events)}
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
  box: {
    flexDirection: 'column',
  },
  boxRow: {
    flexDirection: 'row',
  },
  boxTitleBlock: {
    width: 143,
  },
  boxMainTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  boxSubTitle: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
  },
  boxTimeText: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 20,
    top: 20,
  },
  boxImage: {},
  boxEmptyBlock: {},
})
