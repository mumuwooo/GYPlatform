import request, { GET } from '../utils/request'

export async function getPages(params) {
  return GET({
    params,
    url: '/api/VMPages',
  })
}
