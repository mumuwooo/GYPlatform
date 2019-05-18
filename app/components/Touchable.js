import React from 'react'

import { TouchableOpacity } from 'react-native'

// activeOpacity 为0 则为默认 0.8
const Touchable = props =>(
<TouchableOpacity   {...props} activeOpacity={props&&props.activeOpacity||0.9} />
)

export default Touchable
