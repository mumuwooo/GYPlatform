import React from "react";
import IconFont from './IconFont'
import {commonStyle} from '../utils'

const file_type_size = global.DEVICE_TYPE=='min'?50:65;
const RENDER_ICON = {
  PDF : <IconFont name="&#xe72b;" size={file_type_size} color="#2c9196"/>,
  DOC : <IconFont name="&#xe729;" size={file_type_size} color="#2b5797"/>,
  XLS : <IconFont name="&#xe72e;" size={file_type_size} color="#1e7145"/>,
  PPT : <IconFont name="&#xe72d;" size={file_type_size} color="#d04525"/>,
  PDF : <IconFont name="&#xe72b;" size={file_type_size} color="#2c9196"/>,
  ZIP : <IconFont name="&#xe72f;" size={file_type_size} color="#7e3877"/>,
  TXT : <IconFont name="&#xe730;" size={file_type_size} color="#7e3877"/>,
  OTH : <IconFont name="&#xe730;" size={file_type_size} color={commonStyle.themeColor}/>
}
export default RENDER_ICON;

// const RENDER_ICON={
//   PDF : <IconFont name="&#xe72b;" size={file_type_size} color="#2c9196"/>,
//   DOC : <IconFont name="&#xe610;" size={file_type_size} color="#2b5797"/>,
//   XLS : <IconFont name="&#xe61b;" size={file_type_size} color="#1e7145"/>,
//   PPT : <IconFont name="&#xe60b;" size={file_type_size} color="#d04525"/>,
//   PDF : <IconFont name="&#xe61a;" size={file_type_size} color="#2c9196"/>,
//   ZIP : <IconFont name="&#xe60f;" size={file_type_size} color="#7e3877"/>,
//   TXT : <IconFont name="&#xe60a;" size={file_type_size} color="#7e3877"/>,
//   OTH : <IconFont name="&#xe730;" size={file_type_size} color={commonStyle.themeColor}/>
// }