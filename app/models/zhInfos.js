import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/zhInfos'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'zhInfos',
  state: {
    loading: true,
    refresh: true,
    newListPaging: paging, // 分页对象
    zhInfoList: null,
    slidesZh: null,
  },
  reducers: {
    updateLoadStatus(state, payload) {
      return { ...state, loading: payload.loading, refresh: payload.refresh }
    },
    updateNewsList(state, { payload, paging }) {
      //   if (paging) {
      //     state.newListPaging = paging
      //     if (paging.PageIndex > 1) {
      //       state.newList.push(...payload)
      //       return { ...state }
      //     }
      //   }
      return { ...state, zhInfoList: payload }
    },
    updateZhSlides(state, { payload }) {
      return { ...state, slidesZh: payload }
    },
  },
  effects: {
    *getNewsList({ payload }, { call, put }) {
      const res = yield call(services.getNewsList, payload)
      const { PageIndex, PageSize, PageStatus } = payload
      if (res.successResponse) {
        yield put({ type: 'updateNewsList', payload: res.data })
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
