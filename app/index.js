/**
 * 实例化dva实例并装载到APP
 */
import React from 'react'
import { AppRegistry } from 'react-native'
import { Theme } from 'teaset'
import Router, { routerMiddleware, routerReducer } from './router'
import appModel from './models/app'
import zhInfos from './models/zhInfos'
import policyService from './models/policyService'
import marketService from './models/marketService'
import home from './models/home'
import login from './models/login'
import dva from './utils/dva'
import { commonStyle } from './utils'


const app = dva({
  initialState: {},
  models: [
    appModel,
    zhInfos,
    policyService,
    marketService,
    home,
    login,
  ],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告

AppRegistry.registerComponent('GYPlatform', () => App)
