import React from 'react'
import { View, Linking, NetInfo, Platform } from 'react-native'
import { Overlay, Label } from 'teaset'
import { MyFilePicker } from 'NativeModules'
import { createAction, Storage, commonStyle } from '../utils'
import { Button } from '../components'
import * as services from '../services/config'
import { pageInit, xmlToJson } from '../utils/tools'

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
    *routesBack({ routes, oldRoutes }, { select }) {
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
        case 'Home': {
          break
        }
        case 'Lesson': {
          break
        }
        case '4disErr': {
              yield select(state => state)
          break
        }
        case 'ZHInfos': {
          dispatch({ type: 'zhInfos/getNewsList', payload: { paging } })
          break
        }
        case 'Course': {
         
          break
        }
        case 'Personal': {
         
          break
        }
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
        case 'Home': {
          
         
          break
        }
        case 'Lesson': {
         
          break
        }
        case 'ZHInfos': {
          dispatch({ type: 'zhInfos/getNewsList', payload: { paging } })
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
      // dispatch({ type: 'initApp' })
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
