import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../../components'

import { NavigationActions } from '../../utils'

const { width, height } = Dimensions.get('window')
@connect()
class Detail extends Component {
  static navigationOptions = {
    title: '新闻资讯',
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.contentImg}
            resizeMode="contain"
            source={require('../../assets/images/sorry.png')}
          />
          <Text style={styles.contentText}>Sorry!</Text>
          <Text style={styles.contentText2}>新闻资讯页面待建设</Text>
          <Text style={styles.contentText3}>
            期待与您达成合作之后，展现更优质的内容!
          </Text>
          <Button
            text="返 回"
            onPress={this.goBack}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
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
  content: {
    height: height * 0.9,
    backgroundColor: '#fff',
    width: width * 0.95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentImg: {
    width: 195,
    height: 132,
    marginTop: 52,
  },
  contentText: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 45,
    color: '#b8b8b8',
    marginBottom: 35,
  },
  contentText2: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 24,
    color: '#353434',
    marginBottom: 15,
  },
  contentText3: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 12,
    color: '#353434',
    opacity: 0.72,
    marginBottom: 65,
  },
  button: {
    width: 129,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#d81519',
    marginBottom: 70,
  },
  buttonText: {
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 16,
    color: '#fefefe',
  },
})

export default Detail
