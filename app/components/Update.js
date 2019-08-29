import React, { Component } from 'react'
import { Linking, Text, View } from 'react-native'
import { Overlay } from 'teaset'
import { Button } from './Button'

export class Update extends Component {
  handleUpdate = () => {
    // 做个页面来下载。。。额
    Linking.openURL('http://6s.pinpin.pro:8000/clientupdate/index.html')
  }

  render() {
    return (
      <Overlay.PopView
        style={{ alignItems: 'center', justifyContent: 'center' }}
        modal={false}
      >
        <View
          style={{
            backgroundColor: '#fff',
            minWidth: 260,
            minHeight: 180,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>有新版本哦！！！</Text>
          <Button onPress={() => this.handleUpdate()}>现在更新</Button>
        </View>
      </Overlay.PopView>
    )
  }
}

export default Update
