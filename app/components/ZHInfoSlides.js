import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { Touchable, Button, IconFont, NavBar } from './index'
import { NavigationActions, commonStyle } from '../utils'
import _baseURLGlobal from '../utils/global'

const { width, height } = Dimensions.get('window')
class ZHInfoSlides extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swiperShow: false,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setTimeout = this.setState({ swiperShow: true })
    }, 0)
  }

  // 移除定时器
  componentWillUnmount() {
    this.setTimeout && clearTimeout(this.setTimeout)
  }
  gotoDetail = item => {
    const data = item.article
    console.log('====================================')
    console.log(item)
    console.log('====================================')
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'NewsDetail', params: { navTitle:'新闻快讯', data } }))
  }
  render() {
    const { slidesZh } = this.props
    console.log('the slides', slidesZh)
    console.log('_baseURlGlobal', _baseURLGlobal)
    if (this.state.swiperShow) {
      return (
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay
          autoplayTimeout={4}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        >
          {slidesZh.map((item, index) => (
            <Touchable onPress={() => this.gotoDetail(item)} key={index}>
              <Image
                source={{ uri: _baseURLGlobal + item.pictureUrl }}
                style={styles.bannerImg}
              />
              <View style={styles.textBox}>
                <Text style={styles.bannerText} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </Touchable>
          ))}
        </Swiper>
      )
    } 
      return null
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerBox: {
    height: (width * 40) / 75,
  },
  wrapper: {
    // width,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  bannerImg: {
    height: (width * 40) / 75,
    width,
  },
  textBox: {
    width,
    height: 50,
    backgroundColor: '#000',
    opacity: 0.6,
    position: 'absolute',
    bottom: 0,
  },
  bannerText: {
    marginLeft: 15,
    height: 50,
    width: width * 0.75,
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#ffffff',
    // justifyContent:'center',
    // textAlignVertical:'center',
    marginTop: 15,
  },
  paginationStyle: {
    bottom: 20,
    left: null,
    right: 10,
  },
  dotStyle: {
    width: 7,
    height: 7,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 4,
    marginRight: 10,
  },
  activeDotStyle: {
    width: 7,
    height: 7,
    backgroundColor: '#de1d21',
    borderRadius: 4,
    marginRight: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  content_block: {
    backgroundColor: '#fff',
    width,
    paddingTop: 20,
    paddingBottom: 22,
  },
  content_block2: {
    marginTop: 6,
    paddingBottom: 11,
    // height:300,
  },
  block_title: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title_redIcon: {
    width: 4,
    height: 12,
    borderRadius: 2,
    backgroundColor: commonStyle.themeColor,
    marginRight: 6,
  },
  title_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h31Size,
    color: commonStyle.themeColor,
  },
  loadHeader: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: '100%',
    height: 50,
    textAlign: 'center',
    marginBottom: 60,
  },
  loaded: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  loaded_line: {
    width: '28%',
    backgroundColor: '#ddd',
    height: 1,
  },
})
export default ZHInfoSlides
