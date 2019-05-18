import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/slideIndex'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'slideIndex',
  state: {
    slides: [],
  },
  reducers: {
    updateNewsList(state, { payload, paging }) {
      return { ...state, slides: payload }
    },
  },
  effects: {
    *getNewsList({ payload }, { call, put }) {
      const res = yield call(services.getNewsList)
      if (res.successResponse) {
           yield put({type:'updateNewsList',payload:res.data})
      } else {
        Toast.fail(res.Message)
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
