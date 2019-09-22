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
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage, Label, Toast } from 'teaset'
import { Divider, Button, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import NavBar from '../../../components/NavBar'

const { width, height } = Dimensions.get('window')

@connect(({ link }) => ({ link }))
class SocialService extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    return <NavBar title="社会服务直通车" />
  }

  handleSubmit = address => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'WebviewLinks',
        params: { title: '社保服务直通车', address },
      })
    )
  }
  renderPage() {
    const { socialServices } = this.props.link
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {socialServices &&
            socialServices.map((item, index) => (
              <View style={styles.eachitem} key={index}>
                <IconFont
                  name="&#xe63e;"
                  size={35}
                  color={commonStyle.blueColor}
                />
                <Text style={styles.item_text}>{item.title}</Text>
                <Button
                  style={styles.submitBtn}
                  textStyle={styles.button_text}
                  onPress={() => this.handleSubmit(item.address)}
                >
                  办理
                </Button>
              </View>
            ))}
        </View>
        {/* <Button
          style={styles.submitBtn}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
          type="theme"
        >
          点击此处办理后跳转到外部链接
        </Button> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 31,
  },
  eachitem: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 14,
  },
  item_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: '#3a3a3a',
    width: 194,
  },
  submitBtn: {
    width: 57,
    height: 23,
    borderRadius: 4,
    borderColor: commonStyle.blueColor,
    backgroundColor: commonStyle.blueColor,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#fff',
  },
})
export default SocialService
