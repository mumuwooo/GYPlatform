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
import { Divider, Button } from '../../components'
import { NavigationActions, commonStyle } from '../../utils'
import NavBar from '../../components/NavBar'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class ChangePwd extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      originPwd: '',
      newPwd: '',
      newPwd2: '',
    }
  }
  getPwdLength = () => {
    const { newPwd } = this.state
    if (newPwd.length < 6 || newPwd.length > 23) {
      Alert.alert('', '密码长度至少6个字符，最多23个字符', [
        { text: '取消', onPress: () => console.log('取消') },
        {
          text: '确定',
          onPress: () => {
            this.setState({ newPwd: '' })
          },
        },
      ])
    }
  }
  handleSubmit = () => {
    const { originPwd, newPwd, newPwd2 } = this.state
    if (!originPwd.trim()) return Toast.info('原密码不能为空')
    if (!newPwd.trim()) return Toast.info('新原密码不能为空')
    if (!newPwd2.trim()) return Toast.info('确认密码不能为空')
    if (originPwd.trim() == newPwd2.trim()) {
      Toast.info('新密码不能与原密码一致')
      this.setState({ newPwd: '', newPwd2: '' })
      return
    }
    if (newPwd.trim() === newPwd2.trim()) {
      // const payload = {
      //   StuID: window._UserKey,
      //   StuDetail_ID: window._UserDetailKey,
      //   OldPassword: originPwd,
      //   NewPassword: newPwd,
      // }
      // this.props.dispatch({ type: 'user/updatePwd', payload })
    } else {
      Alert.alert('', '两次输入的新密码不一致，请重新输入', [
        { text: '取消', onPress: () => console.log('取消') },
        {
          text: '确定',
          onPress: () => {
            this.setState({ newPwd: '', newPwd2: '' })
          },
        },
      ])
    }
  }
  renderNavigationBar() {
    return <NavBar title="修改密码" />
  }

  renderPage() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.eachItem}>
            <Label text="账户密码" style={styles.item_label} />
            <TextInput
              style={styles.item_input}
              placeholder="请输入当前账户密码"
              underlineColorAndroid="transparent"
              secureTextEntry
              onChangeText={text => {
                this.setState({ originPwd: text })
              }}
              value={this.state.originPwd}
            />
          </View>

          <View style={styles.eachItem}>
            <Label text="新密码" style={styles.item_label} />
            <TextInput
              style={styles.item_input}
              placeholder="请输入新密码"
              underlineColorAndroid="transparent"
              secureTextEntry
              onBlur={this.getPwdLength}
              onChangeText={text => {
                this.setState({ newPwd: text })
              }}
              value={this.state.newPwd}
            />
          </View>

          <View style={styles.eachItem}>
            <Label text="确认密码" style={styles.item_label} />
            <TextInput
              style={styles.item_input}
              placeholder="请再次输入新密码"
              underlineColorAndroid="transparent"
              secureTextEntry
              onChangeText={text => {
                this.setState({ newPwd2: text })
              }}
              value={this.state.newPwd2}
            />
          </View>
          <Text style={styles.bottom_tip}>
            密码长度至少6个字符，最多23个字符
          </Text>
        </View>
        <Button
          style={styles.button_save}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
          type="theme"
        >
          保存
        </Button>
        <Divider type="bottomSpace" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: commonStyle.bgColor,
  },
  content: {
    width,
  },
  eachItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: commonStyle.lineColor,
  },
  item_label: {
    width: width * 0.2,
    fontFamily: commonStyle.PFbold,
    fontSize: commonStyle.h21Size,
    color: commonStyle.h1Color,
    marginLeft: 12,
    marginRight: 20,
  },
  item_input: {
    width: width * 0.7,
    padding: 0,
  },
  bottom_tip: {
    marginLeft: 12,
    marginTop: 10,
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: commonStyle.h4Color,
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
export default ChangePwd
