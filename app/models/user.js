import { Toast, ModalIndicator } from 'teaset'
import * as services from '../services/user'
import { Storage, NavigationActions } from '../utils'
import { pageInit } from '../utils/tools'

const paging = pageInit()
export default {
  namespace: 'user',
  state: {
    customerId: "",
    favoriteArticles: [],
    financeDemands: [],
    idNum: '',
    avatarURL:"",
    ifIdentified: false,
    phoneNum: "",
    password: "",
    realName: "",
    username: ""

  },
  reducers: {
    updateUserInfo(state, {payload}){
      return { ...state, 
        customerId: payload.customerId,
        favoriteArticles: payload.favoriteArticles,
        financeDemands: payload.financeDemands,
        idNum: payload.idNum,
        avatarURL:payload.avatarURL,
        ifIdentified: payload.ifIdentified,
        phoneNum: payload.phoneNum,
        password: payload.password,
        realName: payload.realName,
        username: payload.username

       }
    },
    emptyUserInfo(state){
      return {
        ...state,
        customerId: "",
        favoriteArticles: [],
        financeDemands: [],
        idNum: '',
        avatarURL:"",
        ifIdentified: false,
        phoneNum: "",
        password: "",
        realName: "",
        username: ""

      }
    },
    updateUserAvatar(state,{payload}){
      console.log("avatar payload", payload)
      return {...state, avatarURL: payload.pictureUrl }
    }
  },
  effects: {
    *initUser(action, {put, call}){
      if(window._userToken){
        const res = yield call(services.fecthUserInfo)
        console.log("fuck the res ", res)
        if(res){
          console.log("in model user", res)
          yield put({type: 'updateUserInfo', payload: res.data})
        }else{
          Toast.fails(res.message)
        }
      }else{
        yield put({type: 'emptyUserInfo'})
      }
    },
    *logout(action, {put, call}){
      window._userToken=''
      Storage.remove('_userToken')
      yield put({type: 'emptyUserInfo'})
    },
    *updateRemote(action, {put,call, select}){
      const data = yield select((state)=>state.user)
      console.log("params in model", data)
      const res=yield call(services.updateUser, data)
      if(res){
        console.log("response in user model", res)
        Toast.success("修改成功")
      }else{
        Toast.fails(res.message)
      }
    }

  },
  subscriptions: {
    setup({ dispatch }) {
      // dispatch({ type: 'initUser' })
    },
  },
}
