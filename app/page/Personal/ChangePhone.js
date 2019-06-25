import React from 'react'
import { StyleSheet, View, Dimensions, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage, Button, Toast } from 'teaset'
import { Divider, IconFont, NavBar } from '../../components'
import { NavigationActions, commonStyle } from '../../utils'
import { checkPhoneNum } from '../../utils/tools'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class ChangePhone extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      progress: false, // false 为1.身份验证
      originPhone: '',
      newPhone: '',
      inputCode: '',
      inputCode2: '',
    }
  }

  handleSendCode = () => {
    const { originPhone, newPhone, progress } = this.state
    let payload = {}
    if (progress) {
      if (!newPhone.trim()) return Toast.fail('手机号不能为空')
      if (!checkPhoneNum(newPhone)) return Toast.info('请输入正确的手机号码！')
      payload = { StuID: window._UserKey, Phone: originPhone, isChange: false } // TypeID 0修改手机号码 1忘记密码使用，默认0
    } else {
      if (!originPhone.trim()) return Toast.fail('手机号不能为空')
      if (!checkPhoneNum(originPhone))
        return Toast.info('请输入正确的手机号码！')
      payload = { StuID: window._UserKey, Phone: originPhone, isChange: true } // TypeID 0修改手机号码 1忘记密码使用，默认0  isChange true 走验证原手机发送验证码逻辑
    }
    this.props.dispatch({ type: 'user/sendBindCode', payload })
  }

  gotoNext = () => {
    const {
      originPhone,
      newPhone,
      inputCode,
      inputCode2,
      progress,
    } = this.state
    if (!progress) {
      if (!originPhone.trim() || !inputCode.trim())
        return Toast.fail('手机号或验证码不能为空')
    } else if (!newPhone.trim() || !inputCode2.trim())
      return Toast.fail('新手机号或验证码不能为空')
    this.setState({ progress: true })
    this.props.dispatch({
      type: 'updateSendStatus',
      payload: { tipText: '获取动态码', isSendingCode: false },
    })
  }
  renderNavigationBar() {
    return <NavBar title="变更绑定手机" />
  }

  renderPage() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.eachItem}>
            <IconFont name="&#xe6f3;" size={20} style={styles.item_icon} />
            <TextInput
              style={styles.item_input}
              placeholder="请输入登录密码"
              underlineColorAndroid="transparent"
              secureTextEntry
              onChangeText={text => {
                this.setState({ inputPwd: text })
              }}
              value={this.state.inputPwd}
            />
          </View>

          <View style={styles.eachItem}>
            <IconFont name="&#xe6f2;" size={20} style={styles.item_icon} />
            <TextInput
              style={styles.item_input}
              placeholder="请输入手机号"
              underlineColorAndroid="transparent"
              keyboardType="phone-pad"
              onChangeText={text => {
                this.setState({ inputPhone: text })
              }}
              value={this.state.inputPhone}
            />
          </View>

          <View style={styles.eachItem}>
            <IconFont name="&#xe6f7;" size={20} style={styles.item_icon} />
            <TextInput
              style={[styles.item_input, styles.item_input2]}
              placeholder="请输入动态码"
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              onChangeText={text => {
                this.setState({ inputCode: text })
              }}
              value={this.state.inputCode}
            />
            <Button
              // disabled={this.props.user.isSendingCode}
              // title={this.props.user.tipText}
              title="获取动态码"
              onPress={this.handleSendCode}
              style={styles.bind_sendCode}
              titleStyle={styles.bind_sendCodeText}
            />
          </View>
        </View>
        <Button
          title="确定"
          style={styles.button_save}
          titleStyle={styles.button_text}
          onPress={this.handleSubmit}
        />
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
  topLine: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  topText: {
    fontFamily: 'PingFang-SC-Medium',
    fontSize: 15,
    color: commonStyle.themeColor,
  },
  topText2: {
    color: '#999999',
  },
  eachItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: commonStyle.lineColor,
  },
  item_icon: {
    color: commonStyle.h1Color,
    marginLeft: 12,
    marginRight: 7,
  },
  item_input: {
    width: width * 0.7,
    padding: 0,
  },
  item_input2: {
    width: width * 0.5,
  },
  bottom_tip: {
    marginLeft: 12,
    marginTop: 10,
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: commonStyle.h4Color,
  },
  bind_sendCode: {
    position: 'absolute',
    right: 5,
    width: 90,
    height: 30,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: commonStyle.themeColor,
    alignItems: 'center',
  },
  bind_sendCodeText: {
    fontFamily: commonStyle.PFregular,
    fontSize: 12,
    padding: 0,
    color: commonStyle.themeColor,
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
export default ChangePhone
