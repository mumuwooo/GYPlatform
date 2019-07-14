import request, { GET, FILE } from '../utils/request'

export async function uploadPicture(params) {
    const data = {file: {uri: params.uri, type:'image/jpeg', name: 'photo.jpg'}}
  return FILE({
    data,
    url: '/api/Picture',
  })
}