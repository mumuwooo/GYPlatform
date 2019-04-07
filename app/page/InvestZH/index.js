import React from 'react'
import { StyleSheet, View, Image,Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage } from 'teaset'
import { Button,Divider, NavBar } from '../../components'

import { NavigationActions } from '../../utils'

@connect()
class InvestZH extends NavigationPage {
  renderNavigationBar() {
    return <NavBar title="投资昭化" />
  }


  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Sorry' }))
  }

  renderPage() {
    return (
      <View style={styles.container}>
        <Button text="Goto Detail" onPress={this.gotoDetail} />
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

export default InvestZH
