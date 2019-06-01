import React from 'react'
import { Text } from 'react-native'
import Touchable from './Touchable'

const IconFont = ({ name, color, size = 18, style, ...extra }) => 
  // if(extra.onPress){
  //   const onPressFun = extra.onPress
  //   delete(extra.onPress)
  //   return (
  //     <Touchable onPress={onPressFun} >
  //     <Text
  //       {...extra}
  //       style={[{
  //         fontFamily: "iconfont",
  //         fontSize: size,
  //         color
  //       },style]}
  //     >
  //       {name.toString()}
  //     </Text>
  //     </Touchable>
  //   );
  // }
   (
    <Text
      {...extra}
      style={[
        {
          fontFamily: 'iconfont',
          fontSize: size,
          color: color || '#fff',
        },
        style,
      ]}
    >
      {name.toString()}
    </Text>
  )


export default IconFont
