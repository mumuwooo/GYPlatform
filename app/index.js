/**
 * 实例化dva实例并装载到APP
 */
import React from 'react'
import { AppRegistry } from 'react-native'
import { Theme } from 'teaset'
import Router, { routerMiddleware, routerReducer } from './router'
import appModel from './models/app'
import zhInfos from './models/zhInfos'
import lawRules from './models/lawRules'
import libraries from './models/libraries'
import politicTopics from './models/politicTopics'
import marketExtensions from './models/marketExtensions'
import slideNews from './models/slideNews'
import slideIndex from './models/slideIndex'
import dva from './utils/dva'
import { commonStyle } from './utils'


const app = dva({
  initialState: {},
  models: [
    appModel,
    zhInfos,
    politicTopics,
    libraries,
    lawRules,
    marketExtensions,
    slideNews,
    slideIndex
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
