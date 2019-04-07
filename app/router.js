import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing,Image } from 'react-native'
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
import Login from './page/Login'
import Home from './page/Home'
import ZHInfos from './page/ZHInfos'
import InvestZH from './page/InvestZH'
import Personal from './page/Personal'
import Detail from './page/Detail'
import Sorry from './page/others/sorry'


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
  initialRouteName: 'Home',    // tabBarPosition: 'bottom',// tabbar放在底部
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
    Sorry:{screen: Sorry,navigationOptions: { header: null }}

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
    if (currentScreen === 'Login') {
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
    if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router} />
  }
}

export default Router
