import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/picture'

export default {
  namespace: 'picture',
  state: {
    loaded: false,
    picture: null,
    pictureId: null,
  },
  reducers: {
    updatePicture(state, { payload }) {
      return { ...state, picture: payload.pictureUrl, pictureId: payload.id }
    },
    makePictureLoaded(state) {
      console.log("I'm the reducer make loaded true")
      return { ...state, loaded: true }
    },
    emptyPicture() {
      console.log("I'm the reducer make picture null")
      return {
        loaded: false,
        picture: null,
        pictureId: null,
      }
    },
  },
  effects: {
    *uploadPicture({ payload }, { call, put }) {
      const res = yield call(services.uploadPicture, payload)
      console.log('test the res', res)
      if (typeof res === 'object') {
        yield put({ type: 'updatePicture', payload: res })
        yield put({ type: 'financeDemandForm/updatePicture', payload: res })
      } else {
        Toast.fail('上传失败')
      }
    },
    *userUploadPicture({ payload }, { call, put }) {
      // 直接要在服务器里修改user的数据
      const res = yield call(services.uploadAvatar, payload)
      console.log('test the res', res)
      if (typeof res === 'object') {
        yield put({ type: 'updatePicture', payload: res })
        yield put({ type: 'user/updateUserAvatar', payload: res })
        // yield put({ type: 'user/updateRemote' })
      } else {
        Toast.fail('上传失败')
      }
    },
  },
  subscriptions: {},
}
