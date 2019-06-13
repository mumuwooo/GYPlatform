import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/login'
import { Storage, NavigationActions, delay } from '../utils'

export default {
  namespace: 'login',
  state: {
    countdown: 60, // 验证码发送倒计时60秒,
    isSendingCode: false, // 验证码发送状态,
    tipText: '获取动态码',
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    updateVMCompanyInfo(state, { payload }) {
      return { ...state, VMCompanyInfoList: payload }
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(services.fetchLogin, payload)
      Storage.set('_userToken', res.token)
      window._userToken = `bearer ${res.token}`
      if (res) {
        yield put(NavigationActions.navigate({ routeName: 'Home' }))
      } else {
        Toast.fail(res.Message)
      }
      ModalIndicator.hide()
    },
    *Register({ payload }, { call, put }) {
      const res = yield call(services.fetchRegister, payload)
      if (res.successResponse) {
        yield put(NavigationActions.navigate({ routeName: 'Login' }))
      } else {
        Toast.fail(res.Message)
      }
      ModalIndicator.hide()
    },
    *getVerifiCode({ payload }, { call, put, select }) {
      let countdown = yield select(state => state.login.countdown)
      const isSendingCode = yield select(state => state.login.isSendingCode)
      yield put({
        type: 'updateState',
        payload: { tipText: '发送中...', isSendingCode: true },
      })
      const res = yield call(services.fetchVerifiCode, payload)
      console.log(res)

      if (res.successResponse) {
        Toast.message('验证码已发')
        while (countdown > 0) {
          countdown--
          yield call(delay, 1000)
          yield put({
            type: 'updateState',
            payload: { countdown, tipText: `${countdown}秒` },
          })
          if (countdown === 0) {
            yield put({
              type: 'updateState',
              payload: { isSendingCode: false, countdown: 60 },
            })
          }
        }
        if (!isSendingCode) {
          yield put({
            type: 'updateState',
            payload: { tipText: '获取动态码' },
          })
        }
      } else {
        yield put({
          type: 'updateState',
          payload: { tipText: '获取动态码', isSendingCode: false },
        })
        Toast.fail(res.Message)
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
