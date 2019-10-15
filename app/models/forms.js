import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/forms'
import {NavigationActions} from '../utils'

export default {
  namespace: 'forms',
  state: {},
  reducers: {},
  effects: {
    *postFactorGuaranteeForm({ payload }, { call, put }) {
      const res = yield call(services.postFactorGuaranteeForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'PFactorGuaranteeList ' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
    *postProjectCoordinateForm({ payload }, { call, put }) {
      const res = yield call(services.postProjectCoordinateForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'projectCoodinatesList' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
    *postFinanceDemandForm({ payload }, { call, put }) {
      const res = yield call(services.postFinanceDemandForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'FinanceDemandsList' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
    *postCustomerDemandForm({ payload }, { call, put }) {
      const res = yield call(services.postCustomerDemandForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'CustomerDemandList' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
    *postOnlineResultForm({ payload }, { call, put }) {
      const res = yield call(services.postOnlineResultForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'OnlineResultList' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
    *postFinanceGuararnteeForm({ payload }, { call, put }) {
      const res = yield call(services.postFinanceGuararnteeForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'FinanceGuaranteesList' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
    *postSignalApplyForm({ payload }, { call, put }) {
      const res = yield call(services.postSignalApplyForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'GoldBrandsList' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
    *postFinanceCoordinateForm({ payload }, { call, put }) {
      const res = yield call(services.postFinanceCoordinateForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'ApplyList' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
    *postAppeals({ payload }, { call, put }) {
      const res = yield call(services.postAppeals, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
        //yield put(NavigationActions.navigate({ routeName: 'ApplyList' }))
        yield put(NavigationActions.navigate({ routeName: 'Personal' }))
      } else {
        Toast.fail('网络错误')
      }
    },
  },
  subscriptions: {},
}
