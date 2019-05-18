import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/home'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'home',
  state: {
    slides: null,
  },
  reducers: {
    updateHomeSlides(state, { payload, paging }) {
      return { ...state, slides: payload }
    },
  },
  effects: {
    *getHomeSlides({ payload }, { call, put }) {
      const res = yield call(services.fetchHomeSlides)
      if (res.successResponse) {
           yield put({type:'updateHomeSlides',payload:res.data})
      } else {
        Toast.fail(res.Message)
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
