import request, { GET, XML } from '../utils/request'

export async function fetchHomeSlides(params) {
  return GET({
    url:
      '/api/VMSlideIndexes',
  })
}

export async function fetchVMCompanyInfo() {
  return GET({
    url:
      '/api/VMCompanyInfoes',
  })
}

export async function fetchVMAchiveInfo() {
  return GET({
    url:
      '/api/VMResultShows',
  })
}
