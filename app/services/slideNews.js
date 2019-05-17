import request, { GET, XML } from '../utils/request'

export async function getNewsList(params) {
  return GET({
    url:
      '/api/VMSlideNews',
  })
}