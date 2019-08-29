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
import { checkPhoneNum } from '../../utils/tools'

class LoginByPersonal extends Component {
  constructor() {
    super()
    this.state = {
      isCleanShow: false,
      isShowPwd: true,
      inputPhone: '18570063440',
      password: '063440',
    }
  }

  // 密码显示/隐藏
  handlePwdShow = () => {
    this.setState({
      isShowPwd: !this.state.isShowPwd,
    })
  }
  // 登录
  handleLogin = () => {
    // 请求前规则验证
    console.log(this.state.inputPhone, this.state.password)
    const userInfo = {
      PhoneNum: this.state.inputPhone,
      Password: this.state.password,
    }
    if (!userInfo.PhoneNum.trim() || !checkPhoneNum(userInfo.PhoneNum))
      return Toast.info('请输入正确的手机号')

    if (!userInfo.Password.trim()) return Toast.info('密码不能为空！')
    ModalIndicator.show(`登录中，请稍后`)
    this.props.dispatch({ type: 'login/login', payload: userInfo })
  }

  toRegister = () => {
    // this.props.dispatch({ type: 'app/firstPage', page: 'Register' })
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Register' }))
  }

  toForgotPwd = () => {
    Toast.info('请联系管理员修改密码')
  }
  render() {
    console.warn('Login render once')
    return (
      <View style={styles.container}>
        <View style={styles.login_inputLine}>
          <IconFont name="&#xe6f1;" size={20} style={styles.login_icon} />
          <TextInput
            style={styles.login_input}
            placeholder="请输入手机号"
            underlineColorAndroid="transparent"
            onFocus={() => {
              this.setState({ isCleanShow: true })
            }}
            onChangeText={text => {
              this.setState({ inputPhone: text })
            }}
            value={this.state.inputPhone}
          />
          {this.state.isCleanShow ? (
            <TouchableOpacity
              style={styles.cleanBox}
              onPress={() => {
                this.setState({
                  inputPhone: '',
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
            style={styles.login_input}
            placeholder="请输入密码"
            underlineColorAndroid="transparent"
            secureTextEntry={!!this.state.isShowPwd}
            onFocus={() => {
              this.setState({
                isCleanShow: false,
              })
            }}
            onChangeText={text => {
              this.setState({ password: text })
            }}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.cleanBox}
            onPress={this.handlePwdShow}
          >
            {this.state.isShowPwd ? (
              <IconFont
                name="&#xe6fb;"
                size={20}
                style={{ color: commonStyle.h2Color }}
              />
            ) : (
              <IconFont
                name="&#xe6fa;"
                size={20}
                style={{ color: commonStyle.h2Color }}
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.loginTip}>
          温馨提示：首次登录后请修改初始密码（手机号后6位）
        </Text>
        <Button
          title="登录"
          // disabled={this.state.isLogin}
          style={styles.login_submit}
          titleStyle={styles.login_submitText}
          onPress={() => this.handleLogin()}
        />

        <View style={styles.bottom_button}>
          <Text style={styles.button_text} onPress={this.toForgotPwd}>
            忘记密码？
          </Text>
          <Text style={styles.button_text} onPress={this.toRegister}>
            去注册
          </Text>
        </View>
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
  login_input: {
    height: 20,
    width: width * 0.6,
    padding: 0,
    fontFamily: commonStyle.PFregular,
    fontSize: 14,
    color: '#333333',
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
})
export default connect()(LoginByPersonal)
