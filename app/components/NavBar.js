import React from 'react'
import { View } from 'react-native'
import { NavigationBar,  Label, } from 'teaset'
import { NavigationActions } from 'react-navigation'
import {commonStyle} from '../utils/commonStyle'
import IconFont from './IconFont'
import Touchable from './Touchable';

const NavBar = ({ title,leftView,rightView }) => (//leftView 默认为返回按钮
    <NavigationBar
    style={{ backgroundColor:commonStyle.themeColor,paddingLeft:10,paddingRight:10}}
    type='ios'
    tintColor='white'
    leftView = {typeof(leftView)=='object'?leftView:
    !leftView?
    <Touchable onPress={()=>dispatch(NavigationActions.back())}><IconFont name="&#xe6ea;" color='#fff' size={commonStyle.navIconSize}/></Touchable>
    :null}
    title={
      typeof title  == 'string'?<View style={{ flex: 1,paddingVertical:8, paddingHorizontal: 4, alignItems: 'center' }}>
        <Label style={{color: 'white', fontSize:commonStyle.navTitleSize, fontWeight: 'bold'}} text={title} />
      </View>:
      title
    }
    rightView = {rightView}
    />
  )

export default NavBar
