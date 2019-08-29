import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { NavigationPage } from 'teaset'
import ImagePicker from 'react-native-image-picker'

const { width } = Dimensions.get('window')
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      avatarSource: null,
    }
  }

  // componentWillUnmount(){
  //   this._isMounted = false
  // }

  // componentWillMount(){
  //   this._isMounted=true
  // }

  choosePic() {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('用户取消了选择！')
      } else if (response.error) {
        alert(`ImagePicker发生错误：${  response.error}`)
      } else if (response.customButton) {
        alert(`自定义按钮点击：${  response.customButton}`)
      } else {
        const source = { uri: response.uri }
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        // 用redux吧
        // if(this._isMounted === true){
        this.setState({
          avatarSource: source,
        })
        // }
      }
    })
  }

  render() {
    console.log('avatarSource', this.state.avatarSource)
    return (
      <View style={styles.container}>
        <Text style={styles.item} onPress={this.choosePic.bind(this)}>
          选择照片
        </Text>
        <Image source={this.state.avatarSource} style={styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  item: {
    margin: 15,
    height: 30,
    borderWidth: 1,
    padding: 6,
    borderColor: '#ddd',
    textAlign: 'center',
  },
  image: {
    height: 198,
    width: 300,
    alignSelf: 'center',
  },
})

export default Test
