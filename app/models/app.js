import React from 'react'
import { Text, View, Linking, NetInfo, Platform } from 'react-native'
import { Overlay, Label } from 'teaset'
import Toast from 'teaset/components/Toast/Toast'
import { createAction, Storage, commonStyle } from '../utils'
import { Button, Update } from '../components'
import * as services from '../services/config'
import { pageInit, xmlToJson } from '../utils/tools'
import _version from '../utils/version'

const isIOS = Platform.OS == 'ios'
// 全局公共状态
const baseState = {
  login: false,
  loading: true,
  fetching: false,
  logined: false,
  routerHistory: [{ path: null }], // 路由历史 数组
  currentRouter: null, // 当前路由
  routerParams: null, // 当前路由参数
  hasCache: false, // 存在路由缓存
  firstPage: 'Login', // 默认登录页
  version: '',
}

const paging = pageInit()
export default {
  namespace: 'app',
  state: {
    ...baseState,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    isLogin(state) {
      // 已登录
      return { ...state, logined: true }
    },
    islogout(state) {
      // 已退出
      return { ...state, logined: false }
    },
    firstPage(state, { page }) {
      // 默认登录页面
      return { ...state, firstPage: page || 'Login' }
    },
    setCurrentRouter(state, action) {
      const { currentRouter, params } = action.payload
      const { routerHistory } = state
      routerHistory.unshift({ path: currentRouter, params })
      if (routerHistory.length > 3) {
        // 只记录三条
        routerHistory.splice(3, 1)
      }
      const hasCache = hasRouterCache(routerHistory)
      return { ...state, routerParams: params, currentRouter, hasCache }
    },
    setRouterParams(state, action) {
      return { ...state, routerParams: action.payload }
    },
  },
  effects: {
    *initApp({ payload }, { put, call }) {
      // 获取 基础信息
      console.log('initApp')
      // 已登录判断  后续加载完成loading
      yield put({ type: 'loginJudge', loading: true })

      yield put({ type: 'versionJudge' })

      // 用户信息
      // yield put({ type: 'user/updateBasicInfo', payload: _baseInfo })
    },
    *versionJudge({ payload }, { put, call }) {
      console.log('app version', _version)
      const versionRemote = yield call(services.getVersion, payload)

      if (versionRemote.version > _version) {
        Overlay.show(<Update />)
      }

      // 版本更新
    },
    *manualVersion({ payload }, { put, call }) {
      const versionRemote = yield call(services.getVersion, payload)

      if (versionRemote.version > _version) {
        Overlay.show(<Update />)
      } else {
        Toast.success(_version+'已是最新版本！')
      }

      // 版本更新
    },

    // 登录判断
    *loginJudge({ loading }, { call, put }) {
      const _userToken = yield call(Storage.get, '_userToken')
      if (!_userToken) {
        yield put({ type: 'isLogout' }) // 已退出
      } else {
        window._userToken = _userToken
        dispatch({ type: 'user/initUser' })
      }
    },
    *routesBack({ routes, oldRoutes, force }, { select }) {
      const { dispatch } = window
      // 路由回退触发  可初始化数据
      const { currentRouter, params } = getCurrentRouter(routes)
      const oldRouterObj = getCurrentRouter(oldRoutes)
      const oldRouter = oldRouterObj.currentRouter
      const oldParams = oldRouterObj.params
      console.log(`路由回退-------------: 
      ${currentRouter} param:${params && JSON.stringify(params)}
      ${oldRouter} oldParam:${params && JSON.stringify(oldParams)}`)
      switch (currentRouter) {
        // Under Home
        case 'Home': {
          dispatch({ type: 'slideIndex/getNewsList', payload: { paging } })
          break
        }
        // Link
        case 'SocialService': {
          dispatch({ type: 'link/getSocialService', payload: { paging } })
          break
        }
        case 'TaxService': {
          dispatch({ type: 'link/getTaxService', payload: { paging } })
          break
        }
        case 'AdmApproval': {
          dispatch({ type: 'link/getAdmService', payload: { paging } })
          dispatch({ type: 'page/getAdmPage', payload: { paging } })
          break
        }
        case 'LegalAid': {
          dispatch({ type: 'link/getLegalAidService', payload: { paging } })
          dispatch({ type: 'page/getLegalPage', payload: { paging } })
          break
        }
        case 'OnlineInvest': {
          dispatch({ type: 'link/getOnlineInvests', payload: { paging } })
          break
        }

        case 'ProjectReport': {
          dispatch({ type: 'link/getProjectReport', payload: { paging } })
          break
        }

        case 'PatentReport': {
          dispatch({ type: 'link/getPatentReport', payload: { paging } })
          break
        }
        case 'TechProject': {
          dispatch({ type: 'link/getTechProject', payload: { paging } })
          break
        }
        case 'TechAchive': {
          dispatch({ type: 'link/getTechAchive', payload: { paging } })
          break
        }
        case 'BankConnect': {
          dispatch({ type: 'link/getBank', payload: { paging } })
          break
        }

        // Page
        case 'FourIdentification': {
          dispatch({ type: 'page/getSiShangPage', payload: { paging } })
          break
        }

        // Home/MarketService
        case 'MarketExtension': {
          dispatch({ type: 'marketService/getNewsList', payload: { paging } })
          break
        }

        // Home/PolicyService
        case 'PoliticTopics': {
          dispatch({ type: 'politicTopics/getNewsList', payload: { paging } })
          break
        }
        case 'LawRules': {
          dispatch({ type: 'lawRules/getNewsList', payload: { paging } })
          break
        }
        case 'Libraries': {
          dispatch({ type: 'libraries/getNewsList', payload: { paging } })
          break
        }

        // InvestZH
        case 'InvestZH': {
          dispatch({ type: 'investZH/getPages', payload: { paging } })
          dispatch({ type: 'investZH/getEvents' })
          break
        }

        // ZHInfos
        case 'ZHInfos': {
          dispatch({ type: 'zhInfos/getNewsList', payload: { paging } })
          dispatch({ type: 'zhInfos/getZhSlides' })
          break
        }

        // other rubbish
        case 'Course': {
          break
        }
        case 'Personal': {
          dispatch({ type: 'user/initUser' })
          break
        }
        case '4disErr': {
          yield select(state => state)
          break
        }

        // other userful
        case 'Notification': {
          // dispatch({type:'notification/getNewList',payload:{AssignObject:4,IsPust:1,...paging}})
          break
        }

        default:
          break
      }
    },
    *routes({ routes, force }, { select }) {
      // force 强制更新
      // 路由跳转/切换触发  可初始化数据
      const { currentRouter, params } = getCurrentRouter(routes)
      const { dispatch } = window
      dispatch({ type: 'setCurrentRouter', payload: { currentRouter, params } })
      console.log(
        `路由跳转/切换-------------:${currentRouter}  ${params &&
          JSON.stringify(params)}`
      )
      // const hasCache = yield select(state =>state.app.hasCache)
      switch (currentRouter) {
        // Home
        case 'Home': {
          dispatch({ type: 'home/getHomeSlides', payload: { paging } })
          dispatch({ type: 'home/getVMCompanyInfo' })
          dispatch({ type: 'home/getVMAchiveInfo' })

          break
        }

        // Home/CompanyService
        case 'SocialService': {
          dispatch({ type: 'link/getSocialService', payload: { paging } })
          break
        }
        case 'TaxService': {
          dispatch({ type: 'link/getTaxService', payload: { paging } })
          break
        }
        case 'AdmApproval': {
          dispatch({ type: 'link/getAdmService', payload: { paging } })
          dispatch({ type: 'page/getAdmPage', payload: { paging } })
          break
        }
        case 'LegalAid': {
          dispatch({ type: 'link/getLegalAidService', payload: { paging } })
          dispatch({ type: 'page/getLegalPage', payload: { paging } })
          break
        }
        case 'OnlineInvest': {
          dispatch({ type: 'link/getOnlineInvests', payload: { paging } })
          break
        }
        case 'ProjectReport': {
          dispatch({ type: 'link/getProjectReport', payload: { paging } })
          break
        }
        case 'PatentReport': {
          dispatch({ type: 'link/getPatentReport', payload: { paging } })
          break
        }
        case 'TechProject': {
          dispatch({ type: 'link/getTechProject', payload: { paging } })
          break
        }
        case 'TechAchive': {
          dispatch({ type: 'link/getTechAchive', payload: { paging } })
          break
        }
        case 'BankConnect': {
          dispatch({ type: 'link/getBank', payload: { paging } })
          break
        }
        // Page
        case 'FourIdentification': {
          dispatch({ type: 'page/getSiShangPage', payload: { paging } })
          break
        }

        // Home/MarketService
        case 'MarketExtension': {
          dispatch({ type: 'marketService/getNewsList', payload: { paging } })
          break
        }
        // Home/PolicyService
        case 'PoliticTopics': {
          dispatch({
            type: 'policyService/getPoliticList',
            payload: { paging },
          })
          break
        }
        case 'LawRules': {
          dispatch({ type: 'policyService/getLawList', payload: { paging } })
          break
        }
        case 'Libraries': {
          dispatch({ type: 'policyService/getLibList', payload: { paging } })
          break
        }

        // InvestZH
        case 'InvestZH': {
          dispatch({ type: 'investZH/getPages', payload: { paging } })
          dispatch({ type: 'investZH/getEvents' })
          break
        }

        // ZHInfos
        case 'ZHInfos': {
          dispatch({ type: 'zhInfos/getNewsList', payload: { paging } })
          dispatch({ type: 'zhInfos/getZhSlides' })
          break
        }

        case 'Personal': {
          dispatch({ type: 'user/initUser' })
          break
        }

        default:
          break
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      // loading加载
      dispatch({ type: 'initApp' })
      // 监听网络变化事件
      window.dispatch = dispatch
    },
  },
}
// 获取当前路由
function getCurrentRouter(routes) {
  const len = routes.length
  const { currentRouter } = formatRoutes(routes)[0]
  if (len > 0) {
    return { currentRouter, params: routes[len - 1].params }
  }
  return { currentRouter, params: null }
}

// 格式化路由 提取当前路由 currentRouter
function formatRoutes(routes) {
  const firstRouter = routes[0]
  const len = routes.length
  if (len > 1) {
    firstRouter.currentRouter = routes[len - 1].routeName
  } else {
    firstRouter.currentRouter = firstRouter.routes[firstRouter.index].routeName
  }
  return routes
}

// 判断路由是否存在缓存
function hasRouterCache(routerHistory) {
  if (routerHistory.length >= 3) {
    // 存在参数，路由和参数一样则存在缓存
    if (JSON.stringify(routerHistory[0]) == JSON.stringify(routerHistory[2])) {
      return true
    }
  }
  return false
}
