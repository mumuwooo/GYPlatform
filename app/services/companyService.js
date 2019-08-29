import request, { GET, GetWithToken } from '../utils/request'

export async function fetchSocialService(params) {
  return GET({
    params,
    url: '/api/VMSocialSecurityLinks',
  })
}
export async function fetchPoliticList(params) {
  return GET({
    params,
    url: '/api/VMPoliticTopics',
  })
}

export async function fetchLibList(params) {
  return GET({
    params,
    url: '/api/VMArticleHouses',
  })
}
