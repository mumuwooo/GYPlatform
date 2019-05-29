import request, { GET, XML } from '../utils/request'

export async function getNewsList(params) {
  return GET({
    params,
    url:
      'http://192.168.16.89:65045/StuCenter/GetPlanInfo?StuDetail_ID=F722E5AF6ACB41EA90AAE7122069D805',
  })
}
