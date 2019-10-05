import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, ToastAndroid } from 'react-native'
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
import { commonStyle } from './utils'
import Loading from './page/Loading'

import Login from './page/others/Login'
import Register from './page/others/Register'

import Home from './page/Home'

import MarketExtension from './page/Home/MarketService/MarketExtension'
import SignalProject from './page/Home/MarketService/SignalProject'
import SignalApplyForm from './page/Home/MarketService/SignalApplyForm'

import FactorGuarantee from './page/Home/CompanyService/FactorGuarantee'
import FactorGuaranteeForm from './page/Home/CompanyService/FactorGuaranteeForm'
import SocialService from './page/Home/CompanyService/SocialService'
import TaxService from './page/Home/CompanyService/TaxService'
import AdmApproval from './page/Home/CompanyService/AdmApproval'
import LegalAid from './page/Home/CompanyService/LegalAid'
import WebviewLinks from './page/Home/CompanyService/WebviewLinks'
import FourIdentification from './page/Home/CompanyService/FourIdentification'
import FourIdentifiForm from './page/Home/CompanyService/FourIdentifiForm'
import DemandForm from './page/Home/CompanyService/DemandForm'

import OnlineInvest from './page/Home/ProjectService/OnlineInvest'
import ProjectReport from './page/Home/ProjectService/ProjectReport'
import ProjectCoordinateForm from './page/Home/ProjectService/ProjectCoordinateForm'

import PatentReport from './page/Home/TechService/PatentReport'
import TechProject from './page/Home/TechService/TechProject'
import TechAchive from './page/Home/TechService/TechAchive'
import OnlineAchiveForm from './page/Home/TechService/OnlineAchiveForm'
import TechAchiveForm from './page/Home/TechService/TechAchiveForm'

import FinanceDemandForm from './page/Home/BankService/FinanceDemandForm'
import FinanceGuaranteeForm from './page/Home/BankService/FinanceGuaranteeForm'
import BankConnect from './page/Home/BankService/BankConnect'

import Libraries from './page/Home/PolicyService/Libraries'
import PoliticTopics from './page/Home/PolicyService/PoliticTopics'
import LawRules from './page/Home/PolicyService/LawRules'

import FinanceCoordinateForm from './page/InvestZH/FinanceCoordinateForm'

import ZHInfos from './page/ZHInfos'
import InvestZH from './page/InvestZH'
import Personal from './page/Personal'
import ChangePwd from './page/Personal/ChangePwd'
import ChangePhone from './page/Personal/ChangePhone'
import NewsDetail from './components/NewsDetail'

import Complaint from './page/Personal/moudles/Complaint'
import ApplyList from './page/Personal/ApplyList'
import PFactorGuaranteeList from './page/Personal/List/PFactorGuaranteeList'
import GoldBrandsList from './page/Personal/List/GoldBrandsList'
import FourIdentifiList from './page/Personal/List/FourIdentifiList'

import Detail from './page/Detail'
import Sorry from './page/others/sorry'
import Test from './page/others/Test'

let oldRoutes = []

const { iconSize } = commonStyle
const styles = {
  tabBarIcon: commonStyle.tabBarIconStyle,
  tabBarStyle: commonStyle.tabBarStyle,
  mime: {
    position: 'relative',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
       //screen: PFactorGuaranteeList,
      screen: Home,
      navigationOptions: {
        tabBarLabel: '6S服务',
        tabBarIcon: ({ focused }) =>
          focused ? (
            <IconFont
              name="&#xe64b;"
              size={iconSize}
              color={commonStyle.themeColor}
              style={styles.tabBarIcon}
            />
          ) : (
            <IconFont
              name="&#xe638;"
              size={iconSize}
              color="gray"
              style={styles.tabBarIcon}
            />
          ),
      },
    },
    InvestZH: {
      screen: InvestZH,
      navigationOptions: {
        tabBarLabel: '投资昭化',
        tabBarIcon: ({ focused }) =>
          focused ? (
            <IconFont
              name="&#xe64a;"
              size={iconSize}
              color={commonStyle.themeColor}
              style={styles.tabBarIcon}
            />
          ) : (
            <IconFont
              name="&#xe63a;"
              size={iconSize}
              color="gray"
              style={styles.tabBarIcon}
            />
          ),
      },
    },
    ZHInfos: {
      screen: ZHInfos,
      navigationOptions: {
        tabBarLabel: '昭化资讯',
        tabBarIcon: ({ focused }) =>
          focused ? (
            <IconFont
              name="&#xe654;"
              size={iconSize}
              color={commonStyle.themeColor}
              style={styles.tabBarIcon}
            />
          ) : (
            <IconFont
              name="&#xe64e;"
              size={iconSize}
              color="gray"
              style={styles.tabBarIcon}
            />
          ),
      },
    },
    Personal: {
      screen: Personal,
      navigationOptions: {
        tabBarLabel: '用户中心',
        tabBarIcon: ({ focused }) =>
          focused ? (
            <IconFont
              name="&#xe64d;"
              size={iconSize}
              color={commonStyle.themeColor}
              style={styles.tabBarIcon}
            />
          ) : (
            <IconFont
              name="&#xe63b;"
              size={iconSize}
              color="gray"
              style={styles.tabBarIcon}
            />
          ),
      },
    },
  },
  {
    initialRouteName: 'Home', // tabBarPosition: 'bottom',// tabbar放在底部
    swipeEnabled: true, // 滑动切换
    animationEnabled: true, // 切换动画
    lazy: false,
    tabBarOptions: {
      activeTintColor: commonStyle.themeColor,
      style: styles.tabBarStyle,
      labelStyle: {
        fontSize: commonStyle.tabBarFontSize, // 文字大小
      },
    },
    indicatorStyle: { height: 0 },
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
    Login: { screen: Login, navigationOptions: { header: null } },
    Register: { screen: Register, navigationOptions: { header: null } },
    ChangePwd: { screen: ChangePwd, navigationOptions: { header: null } },
    ChangePhone: { screen: ChangePhone, navigationOptions: { header: null } },
    Complaint: { screen: Complaint, navigationOptions: { header: null } },
    ApplyList: { screen: ApplyList, navigationOptions: { header: null } },
    PFactorGuaranteeList: { screen: PFactorGuaranteeList, navigationOptions: { header: null } },
    GoldBrandsList: { screen: GoldBrandsList, navigationOptions: { header: null } },
    FourIdentifiList: { screen: FourIdentifiList, navigationOptions: { header: null } },
    Sorry: { screen: Sorry, navigationOptions: { header: null } },
    Test: { screen: Test, navigationOptions: { header: null } },
    NewsDetail: { screen: NewsDetail, navigationOptions: { header: null } },
    MarketExtension: {
      screen: MarketExtension,
      navigationOptions: { header: null },
    },
    FactorGuarantee: {
      screen: FactorGuarantee,
      navigationOptions: { header: null },
    },
    FactorGuaranteeForm: {
      screen: FactorGuaranteeForm,
      navigationOptions: { header: null },
    },
    SocialService: {
      screen: SocialService,
      navigationOptions: { header: null },
    },
    TaxService: { screen: TaxService, navigationOptions: { header: null } },
    AdmApproval: { screen: AdmApproval, navigationOptions: { header: null } },
    LegalAid: { screen: LegalAid, navigationOptions: { header: null } },
    WebviewLinks: { screen: WebviewLinks, navigationOptions: { header: null } },
    FourIdentification: {
      screen: FourIdentification,
      navigationOptions: { header: null },
    },
    FourIdentifiForm: {
      screen: FourIdentifiForm,
      navigationOptions: { header: null },
    },
    DemandForm: { screen: DemandForm, navigationOptions: { header: null } },
    OnlineInvest: { screen: OnlineInvest, navigationOptions: { header: null } },
    ProjectReport: {
      screen: ProjectReport,
      navigationOptions: { header: null },
    },
    ProjectCoordinateForm: {
      screen: ProjectCoordinateForm,
      navigationOptions: { header: null },
    },
    PatentReport: { screen: PatentReport, navigationOptions: { header: null } },
    TechProject: { screen: TechProject, navigationOptions: { header: null } },
    TechAchive: { screen: TechAchive, navigationOptions: { header: null } },
    OnlineAchiveForm: {
      screen: OnlineAchiveForm,
      navigationOptions: { header: null },
    },
    TechAchiveForm: {
      screen: TechAchiveForm,
      navigationOptions: { header: null },
    },
    FinanceDemandForm: {
      screen: FinanceDemandForm,
      navigationOptions: { header: null },
    },
    FinanceGuaranteeForm: {
      screen: FinanceGuaranteeForm,
      navigationOptions: { header: null },
    },
    BankConnect: { screen: BankConnect, navigationOptions: { header: null } },
    SignalProject: {
      screen: SignalProject,
      navigationOptions: { header: null },
    },
    SignalApplyForm: {
      screen: SignalApplyForm,
      navigationOptions: { header: null },
    },
    Libraries: { screen: Libraries, navigationOptions: { header: null } },
    PoliticTopics: {
      screen: PoliticTopics,
      navigationOptions: { header: null },
    },
    LawRules: { screen: LawRules, navigationOptions: { header: null } },
    FinanceCoordinateForm: { screen: FinanceCoordinateForm, navigationOptions: { header: null } },
    // Libraries:{screen: Libraries,navigationOptions: { header: null }},
  },
  {
    headerMode: null,
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: true, // 是否允许右滑返回
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
