import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/forms'

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
      } else {
        Toast.fail('网络错误')
      }
    },
    *postProjectCoordinateForm({ payload }, { call, put }) {
      const res = yield call(services.postProjectCoordinateForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
      } else {
        Toast.fail('网络错误')
      }
    },
    *postFinanceDemandForm({ payload }, { call, put }) {
      const res = yield call(services.postFinanceDemandForm, payload)
      if (res) {
        // toast提交成功，跳转到我的表单用户界面
        Toast.success('提交成功')
      } else {
        Toast.fail('网络错误')
      }
    },
  },
  subscriptions: {},
}
