import { POST, POSTWithToken } from '../utils/request'

export async function postFinanceDemandForm(params) {
  console.log('the params', params)
  return POSTWithToken({
    params,
    url: '/api/FinanceDemands',
  })
}
export async function postProjectCoordinateForm(params) {
  console.log('the params', params)
  return POSTWithToken({
    params,
    url: '/api/ProjectCoordinate',
  })
}

export async function postFactorGuaranteeForm(params) {
  return POSTWithToken({
    params,
    url: '/api/FactorGuarantees',
  })
}
