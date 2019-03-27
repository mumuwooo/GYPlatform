/** 公共样式表 **/

import {Platform, Dimensions} from 'react-native'
import {deviceInfo} from './deviceInfo'
// console.log(Dimensions.get('window'))
const deviceWidth = Dimensions.get('window').width;// width<360  小字体, ？>with>360 正常
global.DEVICE_TYPE = deviceWidth<360?'min':deviceWidth>450?'big':'default'
console.log(`DEVICE_TYPE:${global.DEVICE_TYPE}`)
const themeColor = "#e0161b"
let commonStyle = {

    /** 常用颜色 **/
    black: '#000',
    white: '#FFF',
    clear: 'transparent',
    // 默认背景颜色
    bgColor: '#f2f2f2',

    /** 主题色 **/
    themeColor, // 政府红
    // themeColor: '#6495ed',//矢車菊藍 
    // themeColor:'#3b5998', //facebook
    // themeColor:'#1da1f3', //twitter
    // themeColor:"#337ab7",
    blueColor:'#399cda',
    orangeColor:'#ff933b',
    pinkColor:'#ff7171',
    oceanColor:'#46aaff',
    redColor:'#fd4747',
    purpleColor:'#6b45f7',
    sdRedColor: '#9b0d14', // 山大红
    lightThemeColor: '#b21d06',
    tintThemeColor: '#e75960',
    darkThemeColor: '#68090d',
    redColor: '#e82e3e',
    greenColor: '#0d9b21',
    tintGreenColor:'#c7f1d4',
    tintColor: '#ccc',
    grayColor: '#eee',
    lightGrayColor: '#f5f5f5',

    /** 文字色 **/
    h1Color: '#333',
    h2Color: '#666',
    h3Color: '#777',
    h31Color:"#888",
    h4Color: '#999',
    // placeholder颜色
    placeholderTextColor: '#c8c8cd',
    // 状态字颜色
    statusColor: '#f60',
    // 分割线颜色
    lineColor: '#f1f1f1',
    // borderColor
    borderColor: '#808080',

    /** 文字大小 **/
    // 导航文字 大小
    navIconSize: 25,
    navTitleSize: 18,
    hSize: 20,
    h1Size: 18,
    h11Size: 17,
    h2Size: 16,
    h21Size: 15,
    h3Size: 14,
    h31Size: 13,
    h4Size: 12,
    h41Size: 11,
    h5Size: 10,

    /** space **/
    blockSpace: 15, //块间距
    // 边框线宽度
    borderWidth: 1,
    // 分割线高度
    lineWidth: 0.8,

    /** height **/
    // 导航栏的高度
    navHeight: Platform.OS === 'ios'
        ? (deviceInfo.isIphoneX
            ? 88
            : 64)
        : 45,
    // 导航栏顶部的状态栏高度
    navStatusBarHeight: Platform.OS === 'ios'
        ? (deviceInfo.isIphoneX
            ? 44
            : 20)
        : 24,
    // 导航栏除掉状态栏的高度
    navContentHeight: Platform.OS === 'ios'
        ? 44
        : 50,
    // tabBar的高度
    tabBarHeight: Platform.OS === 'ios'
        ? (deviceInfo.isIphoneX
            ? 83
            : 49)
        : 49,
    // 底部按钮高度
    bottonBtnHeight: 44,
    // 通用列表cell高度
    cellHeight: 44,
    // 导航栏左右按钮image高度
    navImageHeight: 20,

    /** font **/
    // 默认文字字体
    textFont: 14,
    // 默认按钮文字字体
    btnFont: 15,
    btnFontSmall: 13,
    // 导航title字体
    navTitleFont: 18,

    /**圆角**/
    borderRadiusMin: 2,
    borderRadius: 4,
    /** opacity **/
    // mask
    modalOpacity: 0.3,
    // touchableOpacity
    taOpacity: 0.1,
    /** flex **/
    around: 'space-around',
    between: 'space-between',
    center: 'center',
    row: 'row',
    PFregular: 'PingFang-SC-Regular',
    PFbold: 'PingFang-SC-Bold',
    PFheavy: 'PingFang-SC-Heavy',
    Dbold: 'DIN-Bold',
    // Shouxie:'Lixuke',
    Shouxie:'Zhiyong Elegant',
    /** tabBarStyles**/
    iconSize:24,
    tabBarHeight:55,
    tabBarFontSize:10,
    tabBarIconStyle:{//底部 导航样图标式
      marginBottom:-8
    },
    tabBarStyle:{//底部 导航样式
      height:60,
      backgroundColor: 'white',
      paddingBottom:8,
    },
    /** 阴影*/
    shadow:(w=6,opacity=0.1)=>{//w:阴影宽度 需多预留一点宽度
      return {
      elevation: w,
      shadowColor: '#ddd',
      shadowOpacity: opacity,
      shadowRadius: 50,
      shadowOffset: {
        height: w,
      }}
    },
    shadowTop:(w=3,opacity=0.1)=>{//w:阴影宽度 需多预留一点宽度
      return {
      elevation: w,
      shadowColor: '#ddd',
      shadowOpacity: opacity,
      shadowRadius: 30,
      shadowOffset: {
        height: w,
      }}
    },
}
const minStyle = {// 夜神
  navHeight: Platform.OS === 'ios'
        ? (deviceInfo.isIphoneX
            ? 88
            : 64)
        :50,
  navIconSize: 20,
  navTitleSize: 16,
  hSize: 20,
  h1Size: 16,
  h11Size: 15,
  h2Size: 14,
  h21Size: 13,
  h3Size: 12,
  h4Size: 10,
  h5Size: 8,
  /** tabBarStyles**/
  iconSize:24,
  tabBarHeight:50,
  tabBarFontSize:8,
}
const maxStyle = {// 夜神
  navHeight:60,
  navIconSize: 24,
  navTitleSize: 20,
  hSize: 24,
  h1Size: 20,
  h11Size: 19,
  h2Size: 18,
  h21Size: 17,
  h3Size: 16,
  h4Size: 14,
  h5Size: 12,
  /** tabBarStyles**/
  iconSize:24,
  tabBarHeight: 60,
  tabBarFontSize:11
}
if(deviceWidth<360){//窄屏机型
  commonStyle = {
    ...commonStyle,
    ...minStyle
  }
}else if(deviceWidth>450){//宽屏机型
  commonStyle = {
    ...commonStyle,
    ...maxStyle
  }
}
export {commonStyle}