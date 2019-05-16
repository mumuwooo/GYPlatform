import request, { GET, XML } from '../utils/request'

export async function getNewsList(params) {
  return GET({
    params,
    url:
      '/APINews/Index',
  })
}