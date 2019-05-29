import request, { GET, POST, XML } from '../utils/request'

export async function fetchVerifiCode(params) {
  return GET({
    params,
    url:
      '/api/sms/getRegisterCode',
  })
}

export async function fetchRegister(params) {
    return POST({
      params,
      url:
        '/api/Customers',
    })
  }

export async function fetchLogin(params) {
    return POST({
      params,
      url:
        '/api/ClientGetToken',
    })
  }