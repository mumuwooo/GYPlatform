import request, { GET, GetWithToken } from '../utils/request'

export async function fetchAdmPage(params) {
  return GET({
    params,
    url: '/api/VMPages/4',
  })
}

export async function fetchSiShangPage(params) {
  return GET({
    params,
    url: '/api/VMPages/5',
  })
}

export async function fetchLegalPage(params) {
  return GET({
    params,
    url: '/api/VMPages/6',
  })
}
