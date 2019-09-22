import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/policyService'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'policyService',
  state: {
    libPaging: paging, // 分页对象
    lawPaging: paging, // 分页对象
    politicPaging: paging, // 分页对象
    lawList: [],
    politicList: [],
    libList: [],
    totalLib:0,
    totalLaw:0,
    totalPolitic:0
  },
  reducers: {
    updateLawList(state, { payload, paging }) {
      return { ...state, lawList: state.lawList.concat(payload.law.list), totalLaw: payload.law.totalCount,lawPaging:payload.paging }
    },
    updatePoliticList(state, { payload, paging }) {
      return { ...state, politicList: state.politicList.concat(payload.politic.list), totalPolitic:payload.politic.totalCount,politicPaging:payload.paging }
    },
    updateLibList(state, { payload }) {
      return { ...state, libList: state.libList.concat(payload.lib.list), totalLib:payload.lib.totalCount, libPaging:payload.paging }
    },
  },
  effects: {
    *getLawList({ payload }, { call, put }) {
      const res = yield call(services.fetchLawList, payload)
      if (res.successResponse) {
        yield put({ type: 'updateLawList', payload: {law:res.data, paging:payload} })
      } else {
        Toast.fail(res.Message)
      }
    },
    *getPoliticList({ payload }, { call, put }) {
      const res = yield call(services.fetchPoliticList, payload)
      console.log("the politic res", res)
      if (res.successResponse) {
        yield put({ type: 'updatePoliticList', payload: {politic:res.data, paging:payload} })
      } else {
        Toast.fail(res.Message)
      }
    },
    *getLibList({ payload }, { call, put }) {
      const res = yield call(services.fetchLibList, payload)
      if (res.successResponse) {
        yield put({ type: 'updateLibList', payload: {lib:res.data, paging:payload} })
      } else {
        Toast.fail(res.Message)
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
