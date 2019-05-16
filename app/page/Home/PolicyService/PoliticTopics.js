import React, { Component } from 'react'
import { StyleSheet, View, Image,Text,Dimensions,ImageBackground,ScrollView,FlatList } from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage } from 'teaset'
import Swiper from 'react-native-swiper'
import { Touchable,Button,IconFont,NavBar } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import NewsBlock from './NewsBlock'
import { pageInit } from '../../../utils/tools'

const paging = pageInit()

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

const bannerImg=require('../../../assets/images/banner1.png')

@connect(({zhInfos})=>({zhInfos}))
class PoliticTopics extends NavigationPage {
  constructor(props) {
   super(props);
    this.state = {
    swiperShow: false, 
    loading: false, // true加载中    false到底了
    isRefresh: false, // true 加载符号转圈  false 不转圈
    isShowHead: false, // true 显示头部
 };
}

renderNavigationBar() {
  return <NavBar title="专题政策" />
}

gotoDetail = () => {
  this.props.dispatch(NavigationActions.navigate({ routeName: 'Sorry' }))
}  

componentDidMount() {
  setTimeout(()=>{
    this.setTimeout = this.setState({swiperShow:true});
 },0)
    }

// 移除定时器
componentWillUnmount(){
  this.setTimeout && clearTimeout(this.setTimeout);
}
_renderItemView = ({ item, index }) => (
  <NewsBlock data={item} key={index} index={index} />
)
//  触底更新
_onEndReached = () => {
  // const { newListPaging } = this.props.notification
  // const paging = { ...newListPaging, PageIndex: newListPaging.PageIndex + 1 }
  // if (
  //   newListPaging.PageIndex * newListPaging.PageSize <
  //   newListPaging.TotalCount
  // ) {
  //   const payload = { AssignObject: 4, IsPust: 1, ...paging }
  //   this.props.dispatch({ type: 'notification/getNewList', payload })
  // }
  // const { loading } = this.props.notification
  // this.setState({ loading })
}
_renderFooter = () =>
  this.state.loading ? (
    <Text style={styles.loading}>努力加载中...</Text>
  ) : (
    <View style={styles.loaded}>
      <Text style={styles.loaded_line} />
      <Text> 已经到底了 </Text>
      <Text style={styles.loaded_line} />
    </View>
  )


renderPage() {
    const {newsList}=this.props.zhInfos
  return (
      <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        {/* <Text style={{backgroundColor:'#ff5971',width:34,height:34,borderRadius:18,textAlign:'center',textAlignVertical:'center'}}>
          <Text style={{fontFamily:'iconfont',fontSize:32,color:'#fff'}}>&#xe618;</Text>
        </Text> */}
        {/* <Iconfont name='&#xe618;' style={{backgroundColor:'#ff5971',width:34,height:34,borderRadius:18,textAlign:'center',textAlignVertical:'center'}}/> */}

        <View style={styles.content}>
        <View style={styles.content_block}>
            <View style={styles.block_title}>
                  <Text style={styles.title_redIcon}/>
                  <Text style={styles.title_text}>专题政策</Text>
            </View>
            {newsList&&<FlatList
            data={newsList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItemView}
            // onRefresh={this._onRefresh}
            // refreshing={this.state.isRefresh}
            // ListHeaderComponent={this._renderHeader}
            ListFooterComponent={this._renderFooter}
            onEndReached={this._onEndReached.bind(this)}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
            enabled
            // ItemSeparatorComponent={this._separator}
          />}
          </View>
        </View>
    </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor:'#fff',
  },
  bannerBox:{
    height: width*40/75,
  },
  wrapper: {
    // width,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },  
  bannerImg: {
      height: width*40/75,
      width
  },
  textBox:{
    width,
    height:50,
    backgroundColor:'#000',
    opacity:0.6,
    position:'absolute',
    bottom:0,
  },
    bannerText:{
    marginLeft:15,
    height:50,
    width:width*0.75,
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: "#fff",
    marginTop:15,
    // justifyContent:'center',
    // textAlignVertical:'center',
    },
  paginationStyle: {
      bottom:20,
      left:null,
      right:10,
    },
  dotStyle: {
        width: 7,
        height: 7,
        backgroundColor:'#fff',
        opacity: 0.4,
        borderRadius: 4,
        marginRight:10,   
    },
  activeDotStyle: {
        width: 7,
        height: 7,
        backgroundColor:'#de1d21',
        borderRadius: 4,
        marginRight:10,   
    },
  content:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#efefef'
    },
  content_block:{
      backgroundColor:'#fff',
      width,
      paddingTop:20,
      paddingBottom:22,
    },
  content_block2:{
      marginTop:6,
      paddingBottom:11
      // height:300,
    },
  block_title:{
      marginLeft:15,
      flexDirection:'row',
      alignItems:'center',
    },
  title_redIcon:{
      width: 4,
      height: 12,
      borderRadius: 2,
      backgroundColor: commonStyle.themeColor,
      marginRight:6
    },
    title_text:{
      fontFamily: commonStyle.PFregular,
      fontSize: commonStyle.h31Size,
      color: commonStyle.themeColor
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

const data = [
  {
    img:'../../assets/images/companginfos1.png',
    title: '区人大常委会主任贾小玲主持召开区七届人大常委会第十八次会议。',
    date: '2019-03-23',
    source: '昭化区人民政府网',
  },
  {
    img:'../../assets/images/companginfos2.png',
    title: '关于社会机构假四川大学名义违规办学的通告',
    date: '2019-01-07',
    source: '昭化区人民政府网',
  },
  {
    img:'../../assets/images/companginfos3.png',
    title: '区人大常委会主任贾小玲主持召开区七届人大常委会第十八次会议。',
    date: '2018-10-23',
    source: '昭化区人民政府网',
  },
  {
    img:'../../assets/images/companginfos1.png',
    title: '区人大常委会主任贾小玲主持召开区七届人大常委会第十八次会议。',
    date: '2019-03-23',
    source: '昭化区人民政府网',
  },
  {
    img:'../../assets/images/companginfos2.png',
    title: '关于社会机构假四川大学名义违规办学的通告',
    date: '2019-01-07',
    source: '昭化区人民政府网',
  },
  {
    img:'../../assets/images/companginfos3.png',
    title: '区人大常委会主任贾小玲主持召开区七届人大常委会第十八次会议。',
    date: '2018-10-23',
    source: '昭化区人民政府网',
  },

]

export default PoliticTopics
