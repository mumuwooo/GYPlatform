import request, { GET, XML } from '../utils/request'

export async function fetchLawList(params) {
  return GET({
    params,
    url: '/api/VMLawRules',
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
