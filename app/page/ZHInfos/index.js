import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage } from 'teaset'
import Swiper from 'react-native-swiper'
import { Touchable, Button, IconFont, NavBar } from '../../components'
import { NavigationActions, commonStyle } from '../../utils'
import NewsBlock from './NewsBlock'
import { pageInit } from '../../utils/tools'
import _baseURLGlobal from '../../utils/global'

const paging = pageInit()

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window')

const bannerImg = require('../../assets/images/banner1.png')

@connect(({ zhInfos }) => ({ zhInfos }))
class ZHInfos extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      swiperShow: false,
      loading: false, // true加载中    false到底了
      isRefresh: true, // true 加载符号转圈  false 不转圈
      isShowHead: false, // true 显示头部
    }
  }

  renderNavigationBar() {
    return <NavBar title="昭化资讯" />
  }

  gotoDetail = item => {
    const data = item.article
    console.log('====================================')
    console.log(item)
    console.log('====================================')
    this.props.dispatch(NavigationActions.navigate({ routeName: 'NewsDetail', params: { navTitle:'新闻快讯', data } }))
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
  _renderItemView = ({ item, index }) => {
    return(
    <NewsBlock data={item} key={index} index={index} />
  )}
  //  触底更新
  _onEndReached = () => {
    this.setState({loading: true})
    console.log("trigged on the end Reched")
    const { newListPaging, totalCount } = this.props.zhInfos
    if (
      newListPaging.PageIndex * newListPaging.PageSize <
      totalCount
    ) {
      const paging = { ...newListPaging, PageIndex: newListPaging.PageIndex + 1 }
      const payload = { ...paging}
      this.props.dispatch({ type: 'zhInfos/getNewsList', payload:payload })
    }else{
      this.setState({isRefresh:false})
    }
    this.setState({loading: false})
  }
  _renderFooter = () =>
  this.state.loading?(
      <Text style={styles.loading}>努力加载中...</Text>
  ):(
    this.state.isRefresh?(
      <Text style={styles.loading}>继续下拉加载更多内容...</Text>
    ):(
      <View style={styles.loaded}>
        <Text style={styles.loaded_line} />
        <Text> 已经到底了 </Text>
        <Text style={styles.loaded_line} />
      </View>
    )
  )

  // 轮播图
  renderBanner(slidesZh) {
    console.log('render the slides')
    if (slidesZh && this.state.swiperShow) {
      return (
        <View>
          <Swiper
            height={(width * 40) / 75}
            style={styles.wrapper}
            showsButtons={false}
            autoplay
            autoplayTimeout={6}
            paginationStyle={styles.paginationStyle}
            dotStyle={styles.dotStyle}
            activeDotStyle={styles.activeDotStyle}
          >
            {slidesZh.map((item, index) => (
              <Touchable onPress={() => this.gotoDetail(item)} key={index}>
                <ImageBackground
                  source={{ uri: _baseURLGlobal + item.pictureUrl }}
                  style={styles.bannerImg}
                >
                  <View style={styles.textBox}>
                    <Text style={styles.bannerText} numberOfLines={1}>
                      {item.title}
                    </Text>
                  </View>
                </ImageBackground>
              </Touchable>
            ))}
          </Swiper>
          <View style={styles.block_title}>
            <Text style={styles.title_redIcon} />
            <Text style={styles.title_text}>昭化资讯</Text>
          </View>
        </View>
      )
    } 
      return (
        <View style={{ height: (width * 40) / 75 }}>
          <Image source={bannerImg} style={styles.bannerImg} />
        </View>
      )
    
  }

  renderPage() {
    const {isRefresh, zhInfoList, slidesZh } = this.props.zhInfos
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {/* <Text style={{backgroundColor:'#ff5971',width:34,height:34,borderRadius:18,textAlign:'center',textAlignVertical:'center'}}>
          <Text style={{fontFamily:'iconfont',fontSize:32,color:'#fff'}}>&#xe618;</Text>
        </Text> */}
          {/* <Iconfont name='&#xe618;' style={{backgroundColor:'#ff5971',width:34,height:34,borderRadius:18,textAlign:'center',textAlignVertical:'center'}}/> */}
          {/* <View style={styles.bannerBox}>
            {slidesZh && this.renderBanner(slidesZh)}
          </View> */}

          <View style={styles.content}>
            <View style={styles.content_block}>
              {zhInfoList && (
                <FlatList
                  data={zhInfoList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={this._renderItemView}
                  // onRefresh={this._onRefresh}
                  // refreshing={this.state.isRefresh}
                  // removeClippedSubviews={false}
                  ListHeaderComponent={() => this.renderBanner(slidesZh)}
                  ListEmptyComponent={<Text>网络加载中</Text>}
                  ListFooterComponent={this._renderFooter}
                  onEndReached={this._onEndReached.bind(this)}
                  onEndReachedThreshold={0.1}
                  showsVerticalScrollIndicator={false}
                  enabled
                  // ItemSeparatorComponent={this._separator}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    )
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
    marginTop: 5,
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

export default ZHInfos
