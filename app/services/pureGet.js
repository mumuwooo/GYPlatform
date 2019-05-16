import request, { GET, XML } from '../utils/request'

export async function getPoliticTopicsList(params) {
  return GET({
    params,
    url:
      '/api/VMPoliticTopics',
  })
}