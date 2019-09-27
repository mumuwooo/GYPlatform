import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/zhInfos'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'zhInfos',
  state: {
    newListPaging: paging, // 分页对象
    zhInfoList: [],
    slidesZh: null,
    totalCount: 0,
  },
  reducers: {
    updateLoadStatus(state, payload) {
      return { ...state, loading: payload.loading, refresh: payload.refresh }
    },
    updateNewsList(state, { payload, paging }) {
      return { ...state, zhInfoList: state.zhInfoList.concat(payload), }
    },
    updatePage(state,{payload}){
      return {...state, newListPaging: payload}
    },
    updateZhSlides(state, { payload }) {
      return { ...state, slidesZh: payload }
    },
    updateTotalCount(state, { payload }) {
      return { ...state, totalCount: payload }
    },
  },
  effects: {
    *getNewsList({ payload }, { call, put }) {
      const { PageIndex, PageSize, PageStatus } = payload
        const res = yield call(services.getNewsList, payload)
        if (res) {
          yield put({ type: 'updateTotalCount', payload: res.totalCount })
          yield put({ type: 'updateNewsList', payload: res.list })
          yield put({ type: 'updatePage', payload: payload })
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
