import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/home'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'home',
  state: {
    slides: null,
    VMCompanyInfoList: null,
    VMAchiveInfoList: null,
  },
  reducers: {
    updateHomeSlides(state, { payload, paging }) {
      return { ...state, slides: payload }
    },
    updateVMCompanyInfo(state, { payload }) {
      return { ...state, VMCompanyInfoList: payload }
    },
    updateVMAchiveInfo(state, { payload }) {
      return { ...state, VMAchiveInfoList: payload }
    },
  },
  effects: {
    *getHomeSlides({ payload }, { call, put }) {
      const res = yield call(services.fetchHomeSlides)
      if (res.successResponse) {
        yield put({ type: 'updateHomeSlides', payload: res.data })
      } else {
        Toast.fail(res.Message)
      }
    },
    *getVMCompanyInfo({ payload }, { call, put }) {
      const res = yield call(services.fetchVMCompanyInfo)
      if (res.successResponse) {
        yield put({ type: 'updateVMCompanyInfo', payload: res.data })
      } else {
        Toast.fail(res.Message)
      }
    },
    *getVMAchiveInfo({ payload }, { call, put }) {
      const res = yield call(services.fetchVMAchiveInfo)
      if (res.successResponse) {
        yield put({ type: 'updateVMAchiveInfo', payload: res.data })
      } else {
        Toast.fail(res.Message)
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
