import React , { Component } from 'react'
import { StyleSheet,View, Text ,Dimensions} from 'react-native'
import { connect } from 'react-redux'
import {Popover} from 'teaset'
import { Touchable,IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window');

@connect(({ app }) => ({ ...app }))
class MarketService extends Component {
    handleSubmenuShow=()=>{
        alert('二级菜单')
    }
  
    navigateTo(routeName, params) {
      this.props.dispatch(NavigationActions.navigate({ routeName, params }))
    }

    render(){
    return (
    <View style={styles.container}>
            <Popover style={styles.content_block} arrow='top' paddingCorner={16}>
              <View style={styles.item_row}>

                <Touchable onPress={()=>{this.navigateTo('MarketExtension')}}>
                {/* <Touchable > */}
                <View style={styles.item_each}>
                  <IconFont name='&#xe636;' size={22} color={commonStyle.redColor}/>
                  <Text style={styles.icon_text}>市场开拓</Text>
                </View>
                </Touchable>

                <Touchable onPress={this.navigateTo}>
                <View style={styles.item_each}>
                  <IconFont name='&#xe632;' size={22} color={commonStyle.redColor}/>
                  <Text style={styles.icon_text}>金字招牌工程</Text>
                </View>
                </Touchable>

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
  },
  item_each:{
    flexDirection:'row',
    alignItems:'center',
    flex:0.33
  },
  icon_text:{
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: "#6a6a6a",
    marginLeft:4,
  },
})

export default MarketService

