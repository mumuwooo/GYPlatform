import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/link'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'link',
  state: {
    loading: true,
    refresh: true,
    socialServices: [],
    taxServices: [],
    admLink: {},
    legalAidLink: {},
    onlineInvests: [],
    projectReport: {},
    patentReport: [],
    techProject: [],
    techAchive: [],
    banks: [],
  },
  reducers: {
    updateSocialServices(state, { payload, paging }) {
      return { ...state, socialServices: payload }
    },
    updateTaxServices(state, { payload, paging }) {
      return { ...state, taxServices: payload }
    },
    updateAdmServices(state, { payload, paging }) {
      return { ...state, admLink: payload }
    },
    updateLegalAidServices(state, { payload, paging }) {
      return { ...state, legalAidLink: payload }
    },
    updateOnlineInvests(state, { payload, paging }) {
      return { ...state, onlineInvests: payload }
    },
    updateProjectReport(state, { payload, paging }) {
      return { ...state, projectReport: payload }
    },
    updatePatentReport(state, { payload, paging }) {
      return { ...state, patentReport: payload }
    },
    updateTechProject(state, { payload, paging }) {
      return { ...state, techProject: payload }
    },
    updateTechAchive(state, { payload, paging }) {
      return { ...state, techAchive: payload }
    },
    updateBanks(state, { payload, paging }) {
      return { ...state, banks: payload }
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
      const res = yield call(services.fetchTaxService, payload)
      if (res) {
        yield put({ type: 'updateTaxServices', payload: res })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getAdmService({ payload }, { call, put }) {
      const res = yield call(services.fetchAdmService, payload)
      if (res) {
        yield put({ type: 'updateAdmServices', payload: res[0] })
      } else {
        Toast.fail('请求失败')
      }
    },

    *getLegalAidService({ payload }, { call, put }) {
      const res = yield call(services.fetchLegalAidService, payload)
      if (res) {
        yield put({ type: 'updateLegalAidServices', payload: res[0] })
      } else {
        Toast.fail('请求失败')
      }
    },

    *getOnlineInvests({ payload }, { call, put }) {
      const res = yield call(services.fetchOnlineInvests, payload)
      if (res) {
        yield put({ type: 'updateOnlineInvests', payload: res })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getProjectReport({ payload }, { call, put }) {
      const res = yield call(services.fetchProjectReport, payload)
      if (res) {
        yield put({ type: 'updateProjectReport', payload: res[0] })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getPatentReport({ payload }, { call, put }) {
      const res = yield call(services.fetchPatentReport, payload)

      if (res) {
        yield put({ type: 'updatePatentReport', payload: res })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getTechProject({ payload }, { call, put }) {
      const res = yield call(services.fetchTechProject, payload)
      if (res) {
        yield put({ type: 'updateTechProject', payload: res })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getTechAchive({ payload }, { call, put }) {
      const res = yield call(services.fetchTechAchive, payload)
      if (res) {
        yield put({ type: 'updateTechAchive', payload: res })
      } else {
        Toast.fail('请求失败')
      }
    },
    *getBank({ payload }, { call, put }) {
      const res = yield call(services.fetchBanks, payload)
      if (res) {
        yield put({ type: 'updateBanks', payload: res })
      } else {
        Toast.fail('请求失败')
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {},
  },
}
