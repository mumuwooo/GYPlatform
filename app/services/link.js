import request, { GET, GetWithToken } from '../utils/request'

export async function fetchSocialService(params) {
  return GET({
    params,
    url: '/api/VMSocialSecurityLinks',
  })
}

export async function fetchTaxService(params) {
  return GET({
    params,
    url: '/api/VMTaxLinks',
  })
}

export async function fetchAdmService(params) {
  return GET({
    params,
    url: '/api/VMAdministrationLinks',
  })
}

export async function fetchLegalAidService(params) {
  return GET({
    params,
    url: '/api/VMLawAssistants',
  })
}

export async function fetchOnlineInvests(params) {
  return GET({
    params,
    url: '/api/VMInvestmentLinks',
  })
}

export async function fetchProjectReport(params) {
  return GET({
    params,
    url: '/api/VMProjectLinks',
  })
}
export async function fetchPatentReport(params) {
  return GET({
    params,
    url: '/api/VMPatentLinks',
  })
}
export async function fetchTechProject(params) {
  return GET({
    params,
    url: '/api/VMTechProjectLinks',
  })
}
export async function fetchTechAchive(params) {
  return GET({
    params,
    url: '/api/VMTechResultLinks',
  })
}
export async function fetchBanks(params) {
  return GET({
    params,
    url: '/api/VMBankLinks',
  })
}
