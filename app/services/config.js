import request, { GET, XML } from '../utils/request'

export async function getVersion(params) {
  return GET({
    params,
    url: '/api/ClientVersion',
  })
}
