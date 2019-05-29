import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  // PixelRatio
} from 'react-native'
import { Label } from 'teaset'

import { commonStyle, NavigationActions } from '../../utils'
import { Touchable } from '../../components'

const isIOS = Platform.OS == 'ios'
const { width } = Dimensions.get('window')
const photoOptions = {
  title: '请选择',
  quality: 0.8,
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  allowsEditing: true,
  noData: true,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}
@connect(({ app, user }) => ({ app, user }))
class HeadView extends Component {
  constructor(props) {
    super(props)
    this.state = { avatarSource: null, isModal: false }
  }

  gotoNext = () => {
    this.navigateTo('Login')
  }
  navigateTo(routeName, params) {
    this.props.dispatch(NavigationActions.navigate({ routeName, params }))
  }
  render() {
    return (
      <View style={styles.head_view}>
        <View style={styles.heade_bg} />
        <View style={styles.head_block}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{
              width: 107,
              height: 107,
              borderRadius: 53,
              marginLeft: 33,
            }}
          />
          <View style={styles.block_text}>
            <Text style={styles.text_top} onPress={this.gotoNext}>
              登录/注册
            </Text>
            <Text style={styles.text_bottom}>登录后可使用更多功能</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  head_view: {
    width,
    height: 191,
  },
  heade_bg: {
    backgroundColor: '#e3181e',
    height: 140,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  head_block: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: width * 0.93,
    marginTop: 17,
    height: 174,
    alignSelf: 'center',
    alignItems: 'center',
  },
  block_text: {
    marginLeft: 19,
  },
  text_top: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h1Size,
    color: commonStyle.h1Color,
  },
  text_bottom: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h31Size,
    color: commonStyle.h2Color,
    marginTop: 10,
  },
})

export default HeadView
