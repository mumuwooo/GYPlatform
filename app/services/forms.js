import { POST, POSTWithToken } from '../utils/request'


export async function postFinanceDemandForm(params) {
  console.log(params)
  return POSTWithToken({
    params,
    url: '/api/FinanceDemands',
  })
}