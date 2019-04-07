import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage } from 'teaset'

import { Button, NavBar} from '../../components'

import { createAction, NavigationActions } from '../../utils'

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

export default Personal
