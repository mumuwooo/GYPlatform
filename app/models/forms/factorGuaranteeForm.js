import { Toast, ModalIndicator } from 'teaset'
import * as services from '../../services/forms'

export default {
  namespace: 'factorGuaranteeForm',
  state: {
    contact: '',
    enterpriseName: '',
    phoneNum: '',
    demandType: '',
    content: '',
  },
  reducers: {},
  effects: {
    *postFactorGuaranteeForm({ payload }, { call, put }) {
      const res = yield call(services.postFactorGuaranteeForm, payload)
      console.log('the res factorGuarantee returned', res)
    },
  },
  subscriptions: {},
}
