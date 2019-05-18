import request, { GET, XML } from '../utils/request'

export async function fetchHomeSlides(params) {
  return GET({
    url:
      '/api/VMSlideIndexes',
  })
}