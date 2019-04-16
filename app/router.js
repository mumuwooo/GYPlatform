import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing,ToastAndroid } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import IconFont from './components/IconFont'
import {commonStyle} from './utils'
import Loading from './page/Loading'
import Login from './page/others/Login'
import Register from './page/others/Register'
import Home from './page/Home'
import ZHInfos from './page/ZHInfos'
import InvestZH from './page/InvestZH'
import Personal from './page/Personal'
import ChangePwd from './page/Personal/ChangePwd'
import ChangePhone from './page/Personal/ChangePhone'
import NewsDetail from './page/ZHInfos/NewsDetail'
import Detail from './page/Detail'
import Sorry from './page/others/sorry'

let oldRoutes = []

const {iconSize} = commonStyle
const styles = {
  tabBarIcon:commonStyle.tabBarIconStyle,
  tabBarStyle:commonStyle.tabBarStyle,
  mime:{position: 'relative',
  width:30,height: 30,alignItems: 'center',justifyContent: 'center',},
  
}

const HomeNavigator = createBottomTabNavigator(
  {
  Home: { screen: Home,
    navigationOptions: {
      tabBarLabel: '6S服务',
      tabBarIcon: ({ focused }) => (
        focused?
        <IconFont name="&#xe64b;" size={iconSize} color={commonStyle.themeColor} style={styles.tabBarIcon} />
      :
        <IconFont name="&#xe638;" size={iconSize} color='gray' style={styles.tabBarIcon} />
      )
      }
    },
  InvestZH: { screen: InvestZH,
    navigationOptions: {
      tabBarLabel: '投资昭化',
      tabBarIcon: ({ focused }) => (
        focused?
        <IconFont name="&#xe64a;" size={iconSize} color={commonStyle.themeColor} style={styles.tabBarIcon} />
      :
        <IconFont name="&#xe63a;" size={iconSize} color='gray' style={styles.tabBarIcon} />
      )
      }
},
  ZHInfos: { screen: ZHInfos,
    navigationOptions: {
      tabBarLabel: '昭化资讯',
      tabBarIcon: ({ focused }) => (
        focused?
        <IconFont name="&#xe654;" size={iconSize} color={commonStyle.themeColor} style={styles.tabBarIcon} />
      :
        <IconFont name="&#xe64e;" size={iconSize} color='gray' style={styles.tabBarIcon} />
      )
      }
  },
  Personal: { screen: Personal,
    navigationOptions: {
      tabBarLabel: '用户中心',
      tabBarIcon: ({ focused }) => (
        focused?
        <IconFont name="&#xe64d;" size={iconSize} color={commonStyle.themeColor} style={styles.tabBarIcon} />
      :
        <IconFont name="&#xe63b;" size={iconSize} color='gray' style={styles.tabBarIcon} />
      )
      } 
    },
},
{
  initialRouteName: 'Personal',    // tabBarPosition: 'bottom',// tabbar放在底部
  swipeEnabled: true,// 滑动切换
  animationEnabled: true,// 切换动画
  lazy: false,
  tabBarOptions: {
    activeTintColor: commonStyle.themeColor,
    style:styles.tabBarStyle,
    labelStyle: {
      fontSize: commonStyle.tabBarFontSize, // 文字大小
    }
  },
  indicatorStyle: { height: 0 }
}
)

// HomeNavigator.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state.routes[navigation.state.index]
//   return {
//      headerTitle: <Image source={require('./assets/images/logo.png')} style={{ width:180, height:30, flex: 1,}} resizeMode="contain" />,
//     headerStyle: {
//       backgroundColor: '#FFF',
//     },
//     // headerTintColor: '#fff',

//   }
// }

// const MainNavigator = createStackNavigator(
//   {
//     HomeNavigator: { screen: HomeNavigator },
//     Detail: { screen: Detail },
//   },
//   {
//     headerMode: 'float',
//   }
// )

const AppNavigator = createStackNavigator(
  {
    Main: { screen: HomeNavigator, navigationOptions: { header: null } },
    Login: { screen: Login,navigationOptions: { header: null } },
    Register: { screen: Register,navigationOptions: { header: null } },
    ChangePwd: { screen: ChangePwd,navigationOptions: { header: null } },
    ChangePhone:{ screen: ChangePhone,navigationOptions: { header: null } },
    Sorry:{screen: Sorry,navigationOptions: { header: null }},
    NewsDetail:{screen: NewsDetail,navigationOptions: { header: null }},

  },
  {
    headerMode: null,
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: true,  // 是否允许右滑返回
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login' || currentScreen === 'Home') {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        // 按第二次的时候，记录的时间+2000 >= 当前时间就可以退出
        // 最近2秒内按过back键，可以退出应用。
        BackHandler.exitApp() // 退出整个应用
        return false
      }
      this.lastBackPressed = Date.now() // 按第一次的时候，记录时间
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT) // 显示提示信息
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    // if (app.loading) return <Loading />
    if (oldRoutes != router.routes) {
      if (oldRoutes.length > router.routes.length) {
        // 路由返回back
        dispatch({ type: 'app/routesBack', routes: router.routes, oldRoutes })
      } else {
        // 路由跳转 navigate
        dispatch({ type: 'app/routes', routes: router.routes })
      }
    } else {
      // 路由重复
      dispatch({ type: 'app/reRouter', routes: router.routes })
    }
    oldRoutes = router.routes

    return <App dispatch={dispatch} state={router} />
  }
}

export default Router
