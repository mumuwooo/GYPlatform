import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/companyService'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'companyService',
  state: {
    loading: true,
    refresh: true,
    socialServices: [],
    taxServices: [],
  },
  reducers: {
    updateSocialServices(state, { payload, paging }) {
      return { ...state, socialServices: payload }
    },
    updateTaxServices(state, { payload, paging }) {
      return { ...state, taxServices: payload }
    },
  },
  effects: {
    *getSocialService({ payload }, { call, put }) {
      const res = yield call(services.fetchSocialService, payload)
      if (res) {
        yield put({ type: 'updateSocialServices', payload: res })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getTaxService({ payload }, { call, put }) {
      const res = yield call(services.fetchSocialService, payload)
      if (res) {
        yield put({ type: 'updateTaxServices', payload: res })
      } else {
        Toast.fail('请求失败')
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
