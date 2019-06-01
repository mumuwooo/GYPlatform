import React, { Component } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage } from 'teaset'
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view'

import LoginByPersonal from './LoginByPersonal'
import { Button, Touchable, NavBar } from '../../components'

import { createAction, NavigationActions, commonStyle } from '../../utils'

@connect(({ app }) => ({ ...app }))
class Login extends NavigationPage {
  static navigationOptions = {
    title: 'Login',
  }

  onLogin = () => {
    this.props.dispatch(createAction('app/login')())
  }

  onClose = () => {
    this.props.dispatch(NavigationActions.back())
  }

  // tab切换
  handleTabSwitch = obj => {
    this.setState({ curIndex: obj.i })
  }

  renderNavigationBar() {
    return <NavBar title="登录" />
  }
  renderPage() {
    const { fetching } = this.props
    return (
      <View style={styles.tabView}>
        <ScrollableTabView
          onChangeTab={obj => {
            this.handleTabSwitch(obj)
          }}
          renderTabBar={() => <ScrollableTabBar style={styles.tabbar_view} />}
          tabBarUnderlineStyle={styles.tabView_lineStyle}
          tabBarActiveTextColor={commonStyle.themeColor}
          tabBarInactiveTextColor={commonStyle.h2Color}
          tabBarTextStyle={styles.tabViewText}
        >
          <View style={styles.tabView_textStyle} tabLabel="个人用户登录">
            <LoginByPersonal />
          </View>
          <View style={styles.tabView_textStyle} tabLabel="企业用户登录">
            <LoginByPersonal />
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: commonStyle.bgColor,
  },
  tabbar_view: {
    backgroundColor: '#FFFFFF',
    height: 50,
  },

  tabView_lineStyle: {
    backgroundColor: commonStyle.themeColor,
    borderBottomWidth: 0,
  },
  tabViewText: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
  },
  tabView_textStyle: {
    alignItems: 'center',
  },
})

export default Login
