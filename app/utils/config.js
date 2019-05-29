import _baseURLGlobal from './global'
// ===手动配置信息==================================================================================================
window._PLATVERSION = 'DEV' // HN|HB|SD|DEV
window._VERSION = '0.0.1'
// =====================================================================================================

window._IsRelease = window._PLATVERSION != 'DEV' // 是否为正式环境
window._XHost =
  window._PLATVERSION == 'SD'
    ? 'www.zk.sdu.edu.cn' // 山东域名
    : window._PLATVERSION == 'HN'
    ? 'hn.selfstudent.smartchutou.com' // 湖南域名
    : window._PLATVERSION == 'HB'
    ? 'manage.qxin100.com' // 湖北域名
    : 'www2.gcxkh.test.chutoukj.com' // 测试域名

window._PayOnline = window._PLATVERSION != 'SD' // 在线支付 支付宝、微信
window._PlanType = 1 // 根据计划改变：1,1,2

module.exports = {
  // BASE_URL : window._IsRelease?"https://gateway.chutoukj.com/":"https://gateway.dev.chutoukj.com/",
  BASE_URL: _baseURLGlobal,
  // X_HOST: window._IsRelease?window._XHost:'www2.gcxkh.test.chutoukj.com',
  X_HOST: '6s.pinpin.pro',
}

/**
 * *********************************************************
 * 全局可用变量
 * window.dispatch = dispatch  // dispatch
 * window._MajorId             // 专业ID：Specialty_Id
 * **********************************************************
 */
