// import * as navigation from 'react-navigation'
import { ListView } from 'react-native'
export { NavigationActions,StackActions}   from 'react-navigation';
export { commonStyle } from './commonStyle'
export { formatTime } from './formatTime'
export { deviceInfo } from './deviceInfo'
export { regUtil } from './regUtil'

export { default as Storage } from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })
// export const NavigationActions = {
//   ...NavActions,
//   navigate:(actions)=>{
//     actions.
//     NavActions.navigate(actions)
//   }
// }

/** 数据格式转换 */
export function DataSourceFormat (data){ //ListView  datasource 转换
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return ds.cloneWithRows(data)
}