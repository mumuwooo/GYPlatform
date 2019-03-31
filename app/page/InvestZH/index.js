import React, { Component } from 'react'
import { StyleSheet, View, Image,Text } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../../components'

import { NavigationActions } from '../../utils'

@connect()
class InvestZH extends Component {
  static navigationOptions = {
    tabBarLabel: '投资昭化',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
      //   source={require('../../assets/images/house.png')}
      // />
            focused?<Text style={{fontFamily:'iconfont',fontSize:26,color:'#d81519'}}>&#xe64a;</Text>
      :
      <Text style={{fontFamily:'iconfont',fontSize:26,color:'#353434'}}>&#xe63a;</Text>

    ),
  }

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
