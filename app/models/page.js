import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/page'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'page',
  state: {
    loading: true,
    refresh: true,
    admPage: {},
    siShangPage: {},
    legalPage: {},
  },
  reducers: {
    updateAdmPage(state, { payload, paging }) {
      return { ...state, admPage: payload }
    },
    updateSiShangPage(state, { payload, paging }) {
      return { ...state, siShangPage: payload }
    },
    updateLegalPage(state, { payload, paging }) {
      return { ...state, legalPage: payload }
    },
  },
  effects: {
    *getAdmPage({ payload }, { call, put }) {
      const res = yield call(services.fetchAdmPage, payload)
      if (res) {
        yield put({ type: 'updateAdmPage', payload: res.data })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getSiShangPage({ payload }, { call, put }) {
      const res = yield call(services.fetchSiShangPage, payload)
      if (res) {
        yield put({ type: 'updateSiShangPage', payload: res.data })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getLegalPage({ payload }, { call, put }) {
      const res = yield call(services.fetchLegalPage, payload)
      if (res) {
        yield put({ type: 'updateLegalPage', payload: res.data })
      } else {
        Toast.fail('请求失败')
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
