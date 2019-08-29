import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/user'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'user',
  state: {
    userinfo: {},
    avatarURL: '',
  },
  reducers: {
    updateUserInfo(state, { payload }) {
      return { ...state, userinfo: payload }
    },
    emptyUserInfo(state) {
      return { ...state, userinfo: {} }
    },
    updateUserAvatar(state, { payload }) {
      console.log('avatar payload', payload)
      return { ...state, avatarURL: payload.pictureUrl }
    },
  },
  effects: {
    *initUser(action, { put, call }) {
      if (window._userToken) {
        const res = yield call(services.fecthUserInfo)
        console.log('the user userinformation', res)
        if (res) {
          console.log('in model user', res)
          yield put({ type: 'updateUserInfo', payload: res.data })
        } else {
          Toast.fails(res.message)
        }
      } else {
        yield put({ type: 'emptyUserInfo' })
      }
    },
    *logout(action, { put, call }) {
      window._userToken = ''
      Storage.remove('_userToken')
      yield put({ type: 'emptyUserInfo' })
    },
    *updateRemote(action, { put, call, select }) {
      const data = yield select(state => state.user)
      console.log('params in model', data)
      const res = yield call(services.updateUser, data)
      if (res) {
        console.log('response in user model', res)
        Toast.success('修改成功')
      } else {
        Toast.fails(res.message)
      }
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      // dispatch({ type: 'checkLogined' })
    },
  },
}
