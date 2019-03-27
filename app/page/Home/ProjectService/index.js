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
                  <View style={styles.icon_bg}>
                  <IconFont name='&#xe61f;' size={16}/>
                  </View>
                  <Text style={styles.icon_text}>投资在线审批服务</Text>
                </View>

                <View style={styles.item_each}>
                  <View style={styles.icon_bg}>
                  <IconFont name='&#xe61f;' size={16}/>
                  </View>
                  <Text style={styles.icon_text}>项目申报</Text>
                </View>

                <View style={styles.item_each}>
                  <View style={styles.icon_bg}>
                  <IconFont name='&#xe61f;' size={16}/>
                  </View>
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
    // marginBottom:12,
  },
  // item_row2:{
  //   marginBottom:0,
  //   justifyContent:'flex-start',
  // },
  item_each:{
    // flex:1,
    flexDirection:'row'
  },
  // item_each2:{
  //   flex:0.5
  // },
  icon_bg:{
    width: 18,
    height: 18,
    backgroundColor: commonStyle.orangeColor,
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

export default ProjectService

