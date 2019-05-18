import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/policyService'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'policyService',
  state: {
    loading: true,
    refresh: true,
    newListPaging: paging, // 分页对象
    lawList: null,
    politicList: null,
    libList:null,
  },
  reducers: {
    updateLoadStatus(state, payload) {
      return { ...state, loading: payload.loading, refresh: payload.refresh }
    },
    updateLawList(state, { payload, paging }) {
    //   if (paging) {
    //     state.newListPaging = paging
    //     if (paging.PageIndex > 1) {
    //       state.newList.push(...payload)
    //       return { ...state }
    //     }
    //   }
      return { ...state, lawList: payload }
    },
    updatePoliticList(state, { payload, paging }) {
      //   if (paging) {
      //     state.newListPaging = paging
      //     if (paging.PageIndex > 1) {
      //       state.newList.push(...payload)
      //       return { ...state }
      //     }
      //   }
        return { ...state, politicList: payload }
      },
      updateLibList(state, { payload, paging }) {
        //   if (paging) {
        //     state.newListPaging = paging
        //     if (paging.PageIndex > 1) {
        //       state.newList.push(...payload)
        //       return { ...state }
        //     }
        //   }
          return { ...state, libList: payload }
        },
  },
  effects: {
    *getLawList({ payload }, { call, put }) {
      const res = yield call(services.fetchLawList, payload)
      const { PageIndex, PageSize, PageStatus } = payload
      if (res.successResponse) {
           yield put({type:'updateLawList',payload:res.data})
      } else {
        Toast.fail(res.Message)
      }
    },
    *getPoliticList({ payload }, { call, put }) {
      const res = yield call(services.fetchPoliticList, payload)
      const { PageIndex, PageSize, PageStatus } = payload
      if (res.successResponse) {
           yield put({type:'updatePoliticList',payload:res.data})
      } else {
        Toast.fail(res.Message)
      }
    },
    *getLibList({ payload }, { call, put }) {
      const res = yield call(services.fetchLibList, payload)
      const { PageIndex, PageSize, PageStatus } = payload
      if (res.successResponse) {
           yield put({type:'updateLibList',payload:res.data})
      } else {
        Toast.fail(res.Message)
      }
    },
  
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
