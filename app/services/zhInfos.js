import request, { GET, XML } from '../utils/request'

export async function getNewsList(params) {
  console.log("the params list", params)
  return GET({
    params,
    url: '/api/VMNewsZHs',
  })
}

export async function fetchZhSlides() {
  return GET({
    url: '/api/VMSlideNews',
  })
}
