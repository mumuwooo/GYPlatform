import request, { GET, XML } from '../utils/request'

export async function getNewsList(params) {
  return GET({
    params,
    url:
      // 'http://47.105.200.15/APINews/Index',
      '/api/VMNewsZHs',
  })
}