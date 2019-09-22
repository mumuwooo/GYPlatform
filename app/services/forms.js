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

export async function postCustomerDemandForm(params) {
  return POSTWithToken({
    params,
    url: '/api/CustomerDemands',
  })
}

export async function postOnlineResultForm(params) {
  return POSTWithToken({
    params,
    url: '/api/OnlineResults',
  })
}

export async function postFinanceGuararnteeForm(params) {
  return POSTWithToken({
    params,
    url: '/api/FinanceGuarantees',
  })
}

export async function postSignalApplyForm(params) {
  return POSTWithToken({
    params,
    url: '/api/GoldBrands',
  })
}

export async function postFinanceCoordinateForm(params) {
  return POSTWithToken({
    params,
    url: '/api/FinanceCoordinates',
  })
}
