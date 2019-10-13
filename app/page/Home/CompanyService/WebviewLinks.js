import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Alert,
  Text,
  TextInput,
} from 'react-native'
import { WebView } from 'react-native-webview'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage, Label, Toast } from 'teaset'
import { Divider, Button } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import NavBar from '../../../components/NavBar'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class WebviewLinks extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    console.log('====================================')
    console.log(this.props)
    console.log('====================================')
    const { title } = this.props.navigation.state.params
    return <NavBar title={title} />
  }

  renderPage() {
    const { address } = this.props.navigation.state.params
    console.log('webview address', address)
    return (
      <View style={styles.container}>
        <WebView source={{ uri: address }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button_save: {
    marginTop: 25,
    width: 310,
    height: 50,
    borderRadius: 4,
    borderColor: commonStyle.themeColor,
    backgroundColor: commonStyle.themeColor,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h1Size,
    color: '#fffefe',
  },
})
export default WebviewLinks
