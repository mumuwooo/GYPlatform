import React, { Component } from 'react'
import { StyleSheet, View, Image,Text } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../../components'

import { NavigationActions } from '../../utils'

@connect()
class InvestZH extends Component {

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Sorry' }))
  }

  render() {
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
