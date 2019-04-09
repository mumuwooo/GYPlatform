import React from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage,ListRow, Label } from 'teaset'

import { IconFont, NavBar, Button} from '../../components'
import { createAction, NavigationActions,commonStyle } from '../../utils'
import HeadView from './HeadView'

const { width, height } = Dimensions.get('window')

@connect(({ app }) => ({ ...app }))
class Personal extends NavigationPage {
  renderNavigationBar() {
    return <NavBar title="用户中心" />
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }
  


  renderPage() {
    const { login } = this.props
    return (
      <ScrollView style={styles.container}>
        <HeadView />
        <View style={styles.myContent}>
          <View style={styles.content_item}>
              <IconFont name='&#xe661;' size={50} color={commonStyle.themeColor}/>
              <Text style={styles.item_text}>我的办事</Text>
          </View>
          <View style={[styles.content_item,styles.content_item2]}>
              <IconFont name='&#xe666;' size={50} color={commonStyle.themeColor}/>
              <Text style={styles.item_text}>我要投诉</Text>
          </View>
        </View>

        <View style={styles.listRow}>
        <RowLabel
              title="我的收藏"
              icon={
                <IconFont
                  name="&#xe663;"
                  size={commonStyle.hSize}
                  style={{ color: commonStyle.h1Color }}
                />
              }
            />
            <RowLabel
              title="帮助中心"
              icon={
                <IconFont
                  name="&#xe660;"
                  size={commonStyle.hSize}
                  style={{ color: commonStyle.h1Color }}
                />
              }
            />
            <RowLabel
              title="推荐给朋友"
              icon={
                <IconFont
                  name="&#xe668;"
                  size={commonStyle.hSize}
                  style={{ color: commonStyle.h1Color }}
                />
              }
            />
        </View>

        <Button
              style={styles.button_logout}
              textStyle={styles.button_text}
              // onPress={() => this.handleLogout()}
              type="theme"
            >
              退出登录
            </Button>
      </ScrollView>
    )
  }
}

const RowLabel = ({ icon, title, detail, ...rest }) => (
  <ListRow
    style={styles.list_row}
    activeOpacity={0.8}
    bottomSeparator="none"
    icon={icon}
    {...rest}
    title={<Label style={styles.label_title} text={title} />}
    detail={detail}
    detailStyle={styles.label_detail}
    accessory={
      <IconFont
        name="&#xe6eb;"
        style={styles.icon_right}
        size={commonStyle.h3Size}
      />
    }
  />
)

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor:'#f1f1f1',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  myContent:{
    backgroundColor:'#fff',
    width:width*0.93,
    flexDirection:'row',
    alignItems:'center',
    marginTop:19,
    height:109,
    justifyContent:'center',
    alignSelf:'center',
  },
  content_item:{

  },
  content_item2:{
    marginLeft:100
  },
  item_text:{
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: commonStyle.h1Color,
    marginTop:6,
  },
  listRow:{
    alignSelf:'center',
    width:width*0.93,
    marginTop:15,
  },
  list_row: {
    height: 37,
    marginBottom: 20,
  },
  label_title: {
    fontSize: commonStyle.h4Size,
    color: commonStyle.h1Color,
    fontFamily: commonStyle.PFregular,
    marginLeft: 5,
  },
  label_detail: {
    fontSize: commonStyle.h4Size,
    color: commonStyle.h4Color,
    fontFamily: commonStyle.PFregular,
    marginRight: 5,
  },
  button_logout: {
    alignSelf:'center',
    marginTop: 25,
    width: 300,
    height: 37,
    borderRadius: 4,
    borderColor: commonStyle.themeColor,
    backgroundColor: commonStyle.themeColor,
    marginBottom:44,
  },
})

export default Personal
