import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import { Button, Toast, ModalIndicator } from 'teaset'
import { commonStyle, NavigationActions, createAction } from '../../utils'
import { IconFont } from '../../components'
import { checkPhoneNum, checkIdCard, checkName } from '../../utils/tools'

class RegByPersonal extends Component {
  constructor() {
    super()
    this.state = {
      isCleanShow: false, // 清除输入
      inputIDCard: '430524199909090098',
      inputName: '萨尔',
      inputPhone: '18692205772',
      inputCode: '',
    }
  }

  // 登录
  handleLogin = () => {
    // 请求前规则验证
    console.log(this.state.inputIDCard, this.state.inputName)
    const userInfo = {
      CardNumber: this.state.inputIDCard,
      userName: this.state.inputName,
      phonenum: this.state.inputPhone,
      securityCode: this.state.inputCode,
    }
    if (!userInfo.CardNumber.trim()) return Toast.info('请输入身份证号码')
    if (
      userInfo.CardNumber.trim().length !== 18 &&
      !checkIdCard(userInfo.CardNumber)
    ) {
      return Toast.info('请输入正确的身份证号码!')
    }
    if (!userInfo.userName.trim() || !checkName(userInfo.userName))
      return Toast.info('请输入合法姓名')
    if (!userInfo.phonenum.trim() || !checkPhoneNum(userInfo.phonenum))
      return Toast.info('请输入正确的手机号')
    if (!userInfo.securityCode.trim()) return Toast.info('验证码不能为空')
    ModalIndicator.show(`注册中，请稍后`)
    this.props.dispatch({ type: 'login/Register', payload: userInfo })
  }

  handleSendCode = () => {
    const { inputPhone } = this.state
    if (inputPhone.trim() && checkPhoneNum(inputPhone)) {
      this.props.dispatch({
        type: 'login/getVerifiCode',
        payload: { phonenum: inputPhone },
      })
    } else {
      return Toast.info('请输入正确的手机号码!')
    }
  }

  render() {
    const { tipText, isSendingCode } = this.props.login
    return (
      <View style={styles.container}>
        <View style={styles.login_inputLine}>
          <IconFont name="&#xe6f1;" size={20} style={styles.login_icon} />
          <TextInput
            style={styles.item_input}
            placeholder="请输入身份证号"
            underlineColorAndroid="transparent"
            onFocus={() => {
              this.setState({ isCleanShow: true })
            }}
            onChangeText={text => {
              this.setState({ inputIDCard: text })
            }}
            value={this.state.inputIDCard}
          />
          {this.state.isCleanShow ? (
            <TouchableOpacity
              style={styles.cleanBox}
              onPress={() => {
                this.setState({
                  inputIDCard: '',
                })
              }}
            >
              <IconFont
                name="&#xe6f8;"
                size={20}
                style={{ color: commonStyle.h2Color }}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.login_inputLine}>
          <IconFont name="&#xe6f3;" size={20} style={styles.login_icon} />
          <TextInput
            style={styles.item_input}
            placeholder="请输入真实姓名"
            underlineColorAndroid="transparent"
            onChangeText={text => {
              this.setState({ inputName: text })
            }}
            value={this.state.inputName}
          />
        </View>
        <View style={styles.login_inputLine}>
          <IconFont name="&#xe6f2;" size={20} style={styles.login_icon} />
          <TextInput
            style={styles.item_input}
            placeholder="请输入手机号"
            underlineColorAndroid="transparent"
            onChangeText={text => {
              this.setState({ inputPhone: text })
            }}
            value={this.state.inputPhone}
          />
        </View>
        <View style={styles.login_inputLine}>
          <IconFont name="&#xe6f7;" size={20} style={styles.login_icon} />
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
            disabled={isSendingCode}
            title={tipText}
            onPress={this.handleSendCode}
            style={styles.bind_sendCode}
            titleStyle={styles.bind_sendCodeText}
          />
        </View>
        <Text style={styles.loginTip}>温馨提示：初始密码为身份证后6位</Text>
        <Button
          title="注册"
          // disabled={this.state.isLogin}
          style={styles.login_submit}
          titleStyle={styles.login_submitText}
          onPress={() => this.handleLogin()}
        />
      </View>
    )
  }
}
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width,
    marginTop: 18,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  login_inputLine: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width,
    height: 45,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    alignItems: 'center',
    // marginTop: 20,
  },
  login_icon: {
    width: 22,
    height: 22,
    marginRight: 9,
    color: commonStyle.h2Color,
    marginLeft: 12,
  },
  item_input: {
    height: 20,
    width: width * 0.6,
    padding: 0,
    fontFamily: commonStyle.PFregular,
    fontSize: 14,
    color: '#333333',
  },
  item_input2: {
    width: width * 0.5,
  },
  cleanBox: {
    position: 'absolute',
    right: 5,
  },

  login_closeEye: {
    width: 16,
    height: 16,
  },
  login_submit: {
    width: width - 74,
    height: 50,
    borderRadius: 4,
    backgroundColor: commonStyle.themeColor,
    marginTop: 45,
    borderColor: commonStyle.themeColor,
    alignItems: 'center',
  },
  login_submitText: {
    fontFamily: commonStyle.PFregular,
    fontSize: 18,
    color: '#fffefe',
  },
  loginTip: {
    alignItems: 'center',
    height: 15,
    fontFamily: commonStyle.PFregular,
    fontSize: 11,
    color: commonStyle.h4Color,
    marginTop: 20,
  },
  bottom_button: {
    width: width - 74,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: 12,
    color: '#999999',
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
})
export default connect(({ login }) => ({ login }))(RegByPersonal)
