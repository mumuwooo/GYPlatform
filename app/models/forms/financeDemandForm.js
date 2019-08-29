import { Toast, ModalIndicator } from 'teaset'
import * as services from '../../services/forms'

export default {
  namespace: 'financeDemandForm',
  state: {},
  reducers: {},
  effects: {
    *postFinanceDemandForm({ payload }, { call, put }) {
      const res = yield call(services.postFinanceDemandForm, payload)
      console.log("I've got here!!!!!")
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
