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

class LoginByPersonal extends Component {
  constructor() {
    super()
    this.state = {
      isCleanShow: false,
      isShowPwd: true,
      // isLogin:false,
      // inputNum:'43012119881108103x',
      // inputPwd:'08103x'
      // inputNum:'431126544554444',
      // inputPwd:'554444',
      // inputNum:'431126198855553333',
      // inputPwd:'111111'
      inputNum: window._IsRelease ? '' : '',
      inputPwd: window._IsRelease ? '' : '',
    }
  }

  // 身份证正则校验
  checkIdCard = value => {
    const idCard = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/
    if (value && value.trim() != '' && !idCard.test(value.trim())) {
      return false
    }
    return true
  }

  checkTWIdCard = value =>{
    const TWIdCard=/[A-Za-z][0-9]{6}\([0-9A]\)$/
    if(value&&value.trim()!=''&&!TWIdCard.test(value.trim())){
      return false
    }
    return true
  } 

 toCDB= str =>{
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 65248 && str.charCodeAt(i) < 65375) {
            tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
        }
        else {
            tmp += String.fromCharCode(str.charCodeAt(i));
        }
    }
    return tmp
}
  // 密码显示/隐藏
  handlePwdShow = () => {
    this.setState({
      isShowPwd: !this.state.isShowPwd,
    })
  }
  // 登录
  handleLogin = () => {
    // 请求前规则验证   loginType:1 密码登录
    console.log(this.state.inputNum, this.state.inputPwd)
    const userInfo = {
      CardNumber: this.toCDB(this.state.inputNum),
      Password: this.toCDB(this.state.inputPwd),
      loginType: 1,
    }
    if (!userInfo.CardNumber.trim()) return Toast.info('请输入身份证号码')
    if (!userInfo.Password.trim()) return Toast.info('密码不能为空！')
    if(userInfo.CardNumber.trim().length===18||userInfo.CardNumber.trim().length===15){
      if (!this.checkIdCard(userInfo.CardNumber))
      return Toast.info('请输入正确的身份证号码!')
    }else{
      if (!this.checkTWIdCard(userInfo.CardNumber))
      return Toast.info('请输入正确的身份证号码!')
    }
    ModalIndicator.show(`登录中，请稍后`)
    this.props.dispatch({ type: 'login/login', payload: userInfo })
  }

  toRegister = () => {
    // this.props.dispatch({ type: 'app/firstPage', page: 'Register' })
     this.props.dispatch(NavigationActions.navigate({routeName:'Register'}))
  }

  toForgotPwd = () => {
    Toast.info('请联系管理员修改密码')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.login_inputLine}>
          <IconFont name="&#xe6f1;" size={20} style={styles.login_icon} />
          <TextInput
            style={styles.login_input}
            placeholder="手机/身份证号"
            underlineColorAndroid="transparent"
            onFocus={() => {
              this.setState({ isCleanShow: true })
            }}
            onChangeText={text => {
              this.setState({ inputNum: text })
            }}
            value={this.state.inputNum}
          />
          {this.state.isCleanShow ? (
            <TouchableOpacity
              style={styles.cleanBox}
              onPress={() => {
                this.setState({
                  inputNum: '',
                })
              }}
            >
              <IconFont
                name="&#xe6f8;"
                size={20}
                style={{color:commonStyle.h2Color}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.login_inputLine}>
          <IconFont name="&#xe6f3;" size={20} style={styles.login_icon} />

          <TextInput
            style={styles.login_input}
            placeholder="密码"
            underlineColorAndroid="transparent"
            secureTextEntry={!!this.state.isShowPwd}
            onFocus={() => {
              this.setState({
                isCleanShow: false,
              })
            }}
            onChangeText={text => {
              this.setState({ inputPwd: text })
            }}
            value={this.state.inputPwd}
          />
          <TouchableOpacity
            style={styles.cleanBox}
            onPress={this.handlePwdShow}
          >
            {this.state.isShowPwd ? (
              <IconFont name="&#xe6fb;" size={20} style={{color:commonStyle.h2Color}}/>
            ) : (
              <IconFont name="&#xe6fa;" size={20} style={{color:commonStyle.h2Color}}/>
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.loginTip}>
          温馨提示：首次登录后请修改初始密码（身份证后6位）
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
    marginTop:18,
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
    color:commonStyle.h2Color,
    marginLeft:12,
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
