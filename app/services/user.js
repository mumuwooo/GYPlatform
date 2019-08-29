import { PutWithToken, GetWithToken } from '../utils/request'

export async function fecthUserInfo() {
  return GetWithToken({
    url: '/api/Customers',
  })
}

export async function updateUser(params) {
  console.log('params in service', params)
  return PutWithToken({
    params,
    url: '/api/Customers',
  })
}
