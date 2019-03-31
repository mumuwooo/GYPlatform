import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../../components'

import { createAction, NavigationActions } from '../../utils'

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintColor }) => (
      focused?<Text style={{fontFamily:'iconfont',fontSize:26,color:'#d81519'}}>&#xe64d;</Text>
      :
      <Text style={{fontFamily:'iconfont',fontSize:26,color:'#353434'}}>&#xe63b;</Text>
    ),
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  render() {
    const { login } = this.props
    return (
      <View style={styles.container}>
        {login ? (
          <Button text="Logout" onPress={this.logout} />
        ) : (
          <Button text="Goto Login" onPress={this.gotoLogin} />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Account
