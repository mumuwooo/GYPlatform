import React , { Component } from 'react'
import { StyleSheet,View, Text ,Dimensions} from 'react-native'
import {Popover} from 'teaset'
import { Touchable,IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window');


class PolicyService extends Component {
handleSubmenuShow=()=>{
        alert('二级菜单')
    }
    render(){
    return (
    <View style={styles.container}>
            <Popover style={styles.content_block} arrow='topRight' paddingCorner={45}>
              <View style={styles.item_row}>

                <View style={styles.item_each}>
                  <View style={styles.icon_bg}>
                  <IconFont name='&#xe61f;' size={16}/>
                  </View>
                  <Text style={styles.icon_text}>文件库</Text>
                </View>

                <View style={styles.item_each}>
                  <View style={styles.icon_bg}>
                  <IconFont name='&#xe61f;' size={16}/>
                  </View>
                  <Text style={styles.icon_text}>专题政策</Text>
                </View>

                <View style={styles.item_each}>
                  <View style={styles.icon_bg}>
                  <IconFont name='&#xe61f;' size={16}/>
                  </View>
                  <Text style={styles.icon_text}>法律法规</Text>
                </View>
              </View>
            </Popover>
    </View>
)
}
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
  },
  content_block:{
    backgroundColor:'#e9e9e9',
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "#d5d5d5",
    width:width*0.9,
    // borderRadius:5,
    paddingHorizontal:13,
    paddingVertical:20,
    
  },
  item_row:{
    flexDirection:'row',
   justifyContent:'space-between',
  },
  item_each:{
    flexDirection:'row'
  },

  icon_bg:{
    width: 18,
    height: 18,
    backgroundColor: commonStyle.purpleColor,
    borderRadius:9,
    justifyContent:'center',
    alignItems:'center'
  },
  icon_text:{
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: "#6a6a6a",
    marginLeft:4,
  },
})

export default PolicyService

