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
import investZH from './models/investZH'
import home from './models/home'
import login from './models/login'
import picture from './models/picture'
import user from './models/user'
import link from './models/link'
import page from './models/page'
import financeDemandForm from './models/forms/financeDemandForm'
import factorGuaranteeForm from './models/forms/factorGuaranteeForm'
import forms from './models/forms'
import companyService from './models/companyService'
import dva from './utils/dva'
import { commonStyle } from './utils'

const app = dva({
  initialState: {},
  models: [
    appModel,
    forms,
    zhInfos,
    page,
    policyService,
    marketService,
    companyService,
    link,
    home,
    login,
    investZH,
    picture,
    user,
  ],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

console.ignoredYellowBox = [
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'source.uri should not be an empty string',
  'Invalid props.style key',
]
console.disableYellowBox = true // 关闭全部黄色警告

AppRegistry.registerComponent('GYPlatform', () => App)
