import React, { Component } from 'react'
import { StyleSheet, View, Image,Text,Dimensions,ImageBackground,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import { Touchable,Button,IconFont } from '../../components'
import { NavigationActions, commonStyle } from '../../utils'
import CompanyService from './CompanyService'

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
const bannerImg=require('../../assets/images/banner1.png')

@connect()
class Home extends Component {

  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
      //   source={require('../../assets/images/house.png')}
      // />
      focused?<Text style={{fontFamily:'iconfont',fontSize:24,color:'#d81519'}}>&#xe624;</Text>
      :
      <Text style={{fontFamily:'iconfont',fontSize:24,color:'#353434'}}>&#xe624;</Text>
    ),
  }

  constructor(props) {
   super(props);
    this.state = {
    swiperShow: false, 
    companyShow:true, 
    projectShow:false,
    techShow:false,
    bankShow:false,
    marketShow:false,
    policyShow:false,
 };
}

componentDidMount() {
        setTimeout(() => {
            this.setState({
                swiperShow: true
            });
        }, 0)
    }

handleSubmenuShow=(type)=>{
  const {companyShow, projectShow, techShow, bankShow, marketShow, policyShow}=this.state

    // switch (type){
    //   case 1:
    //   this.setState({companyShow:!companyShow})
    //   break;
    //   case 2:
    //   this.setState({projectShow:!projectShow})
    //   break;
    //   case 3:
    //   this.setState({techShow:!techShow})
    //   break;
    //   default:
    //   break
    // }
  }

gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Sorry' }))
  }  

// 轮播图
renderBanner() {
        if (this.state.swiperShow) {
            return (
                <Swiper 
                    style={styles.wrapper} 
                    showsButtons={false} 
                    autoplay
                    paginationStyle={styles.paginationStyle} 
                    dotStyle={styles.dotStyle} 
                    activeDotStyle={styles.activeDotStyle}
                >
                <View >
              <Touchable onPress={this.gotoDetail}>
                <ImageBackground source={bannerImg} style={styles.bannerImg} >
                    <View style={styles.textBox}>
                    <Text style={styles.bannerText} numberOfLines={1}>李克强总理视察园区坐谈会</Text>
                    </View>
                </ImageBackground>
              </Touchable>

                </View>
                <View >
              <Touchable onPress={this.gotoDetail}>
                <ImageBackground source={bannerImg} style={styles.bannerImg} >
                    <View style={styles.textBox}>
                    <Text style={styles.bannerText} numberOfLines={1}>习近平总书记视察园区坐谈会</Text>
                    </View>
                </ImageBackground>
              </Touchable>
                </View>                
                <View >
              <Touchable onPress={this.gotoDetail}>
                <ImageBackground source={bannerImg} style={styles.bannerImg} >
                    <View style={styles.textBox}>
                    <Text style={styles.bannerText} numberOfLines={1}>李克强总理视察园区坐谈会</Text>
                    </View>
                </ImageBackground>
              </Touchable>
                </View>
                </Swiper>
            )
        } else {
            return (
                <View style={{ height: width*40/75 }}>
                    <Image source={bannerImg} style={styles.bannerImg} />
                </View>
            );
        }
    }

  render() {
    const {submenuShow}=this.state
    return (
      <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        {/* <Text style={{backgroundColor:'#ff5971',width:34,height:34,borderRadius:18,textAlign:'center',textAlignVertical:'center'}}>
          <Text style={{fontFamily:'iconfont',fontSize:32,color:'#fff'}}>&#xe618;</Text>
        </Text> */}
        {/* <Iconfont name='&#xe618;' style={{backgroundColor:'#ff5971',width:34,height:34,borderRadius:18,textAlign:'center',textAlignVertical:'center'}}/> */}
        <View style={styles.bannerBox}>
        {this.renderBanner()}
        </View>

        <View style={styles.content}>
            <View style={styles.content_block}>
              <View style={styles.block_title}>
                <Text style={styles.title_redIcon}/>
                <Text style={styles.title_text}>6S服务</Text>
              </View>
              <View style={styles.item_row}>
                  <Touchable style={styles.item_button} onPress={this.handleSubmenuShow(1)}>
                  <View style={styles.item_iconbg}>
                    <IconFont name='&#xe61a;' size={60} /> 
                  </View>
                  <Text style={styles.item_title}>企业运行服务</Text>
                  </Touchable>

                  <Touchable style={styles.item_button} onPress={this.handleSubmenuShow(2)}>
                  <View style={[styles.item_iconbg,styles.item_iconbg2]}>
                    <IconFont name='&#xe61a;' size={60} /> 
                  </View>
                  <Text style={styles.item_title}>项目推进服务</Text>
                  </Touchable>

                  <Touchable style={styles.item_button} onPress={this.handleSubmenuShow(3)}>
                  <View style={[styles.item_iconbg,styles.item_iconbg3]}>
                    <IconFont name='&#xe61a;' size={60} /> 
                  </View>
                  <Text style={styles.item_title}>科技创新服务</Text>
                  </Touchable>
              </View>
            </View>
            {submenuShow?<View style={styles.visiable_block}>
            <CompanyService />
            </View>:null}
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
    width,
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
    color: "#ffffff",
    justifyContent:'center',
    textAlignVertical:'center',
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
      padding:15,
      
    },
    block_title:{
      flexDirection:'row',
      // justifyContent:'center',
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
    item_row:{
      flexDirection:'row',
      justifyContent:'space-around'
    },
    item_title:{
      fontFamily: commonStyle.PFregular,
      fontSize: commonStyle.h4Size,
      color: commonStyle.h2Color,
      marginTop:5,
    },
    item_iconbg:{
      marginTop:18,
      width: 61,
      height: 61,
      backgroundColor: commonStyle.blueColor,
      borderRadius:30,
       alignItems:'center',
      justifyContent:'center',
    },
    item_iconbg2:{
      backgroundColor:commonStyle.orangeColor,
    },
    item_iconbg3:{
      backgroundColor:commonStyle.pinkColor,
    },
    visiable_block:{
      width,
      backgroundColor:'#fff',
      alignItems:'center'
    }
})


export default Home
