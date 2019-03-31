import React , { Component } from 'react'
import { StyleSheet,View, Text ,Dimensions} from 'react-native'
import {Popover} from 'teaset'
import { Touchable,IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window');


class ProjectService extends Component {
handleSubmenuShow=()=>{
        alert('二级菜单')
    }
    render(){
    return (
    <View style={styles.container}>
            <Popover style={styles.content_block} arrow='top' paddingCorner={16}>
              <View style={styles.item_row}>

                <View style={styles.item_each}>
                  <IconFont name='&#xe631;' size={22} color={commonStyle.orangeColor}/>
                  <Text style={styles.icon_text}>投资在线审批服务</Text>
                </View>

                <View style={styles.item_each}>
                  <IconFont name='&#xe629;' size={22} color={commonStyle.orangeColor}/>
                  <Text style={styles.icon_text}>项目申报</Text>
                </View>

                <View style={styles.item_each}>
                  <IconFont name='&#xe62d;' size={22} color={commonStyle.orangeColor}/>
                  <Text style={styles.icon_text}>建设项目协调服务</Text>
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
    width:width*0.9,
    paddingHorizontal:13,
    paddingVertical:20,
    
  },
  item_row:{
    flexDirection:'row',
   justifyContent:'space-between',
    // marginBottom:12,
  },
  item_each:{
    flexDirection:'row',
    alignItems:'center',
  },
  icon_text:{
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: "#6a6a6a",
    marginLeft:4,
  },
})

export default ProjectService

