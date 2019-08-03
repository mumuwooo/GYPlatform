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

import ImagePicker from 'react-native-image-picker'

import { commonStyle, NavigationActions } from '../../utils'
import { Touchable } from '../../components'

const isIOS = Platform.OS == 'ios'
const { width } = Dimensions.get('window')
const options = {
  title: '选择图片',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择照片',
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  cameraType: 'back',
  mediaType: 'photo',
  videoQuality: 'high',
  durationLimit: 10,
  maxWidth: 300,
  maxHeight: 300,
  quality: 0.8,
  angle: 0,
  allowsEditing: false,
  noData: false,
  storageOptions: {
    skipBackup: true,
  },
}
@connect(({ app, user }) => ({ app, user }))
class HeadView extends Component {
  constructor(props) {
    super(props)
    this.state = { avatarSource: null, isModal: false }
  }

  selectPhotoTapped = () => {
    // dispatch({type: "picture/makePictureLoaded"})
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled photo picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        // this.setState({
        //   avatarSource: source,
        // })
        dispatch({type: 'picture/userUploadPicture', payload: source})
      }
    })
  }

  gotoNext = () => {
    console.log("ready to jump")
    this.navigateTo('Login')
  }
  navigateTo(routeName, params) {
    this.props.dispatch(NavigationActions.navigate({ routeName, params }))
  }
  render() {
    //没登陆点击头像到登陆界面，登陆了点击头像到修改头像
    const {user} = this.props
    return (
      <View style={styles.head_view}>
        <View style={styles.heade_bg} />
        <View style={styles.head_block}>
          <Touchable onPress={this.selectPhotoTapped.bind(this)}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{
              width: 107,
              height: 107,
              borderRadius: 53,
              marginLeft: 33,
            }}
          />
          </Touchable>
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
