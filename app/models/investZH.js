import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/investZH'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'investZH',
  state: {
    loading: true,
    refresh: true,
    pages: null,
  },
  reducers: {
    updateLoadStatus(state, payload) {
      return { ...state, loading: payload.loading, refresh: payload.refresh }
    },
    updatePages(state, {payload, paging}){
      return { ...state, pages: payload}
    },
    updateZhSlides(state, { payload }) {
      return { ...state, slidesZh: payload }
    },
  },
  effects: {
    *getPages({ payload }, { call, put }) {
      const res = yield call(services.getPages, payload)
      const { PageIndex, PageSize, PageStatus } = payload
      if (res.successResponse) {
        yield put({ type: 'updatePages', payload: res.data })
      } else {
        Toast.fail(res.Message)
      }
    },
    *getZhSlides({ payload }, { call, put }) {
      const res = yield call(services.fetchZhSlides)
      if (res.successResponse) {
        yield put({ type: 'updateZhSlides', payload: res.data })
      } else {
        Toast.fail(res.Message)
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
