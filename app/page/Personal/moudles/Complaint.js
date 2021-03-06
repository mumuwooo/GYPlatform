import React from 'react'
import { StyleSheet, View, Dimensions, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Toast, NavigationBar, NavigationPage, Button } from 'teaset'
import { Divider, NavBar, IconFont, Touchable } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class Complaint extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      progress: 1, //  1信息登记 2联系方式
      demandText:""
    }
  }

  componentWillMount() {
    if (!window._userToken) {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'Personal' }))
      Toast.stop('请先登陆')
    }
  }

  renderNavigationBar() {
    return <NavBar title="我要投诉" />
  }

  handleSubmit = () => {
    dispatch({type:'forms/postAppeals', payload:this.state})
  }
  renderPage() {
    const { progress } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.next_content}>
              <Text style={styles.next_title}>建议，意见</Text>
              <TextInput
                maxLength={140}
                placeholder="请输入内容，不超过140字"
                underlineColorAndroid="transparent"
                multiline
                style={styles.userInput}
                onChangeText={demandText => this.setState({ demandText })}
                value={this.state.demandText}
              />
            </View>
        </View>
        <View style={styles.buttons}>
          <Button
            style={styles.submitBtn}
            titleStyle={styles.submitText}
            title={'提交' }
            onPress={this.handleSubmit}
          />
        </View>

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
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: commonStyle.themeColor,
  },
  topText2: {
    color: commonStyle.h2Color,
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
    marginRight: 5,
  },
  item_input: {
    width: width * 0.7,
    padding: 0,
    paddingLeft: 15,
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
  item_line: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: commonStyle.lineColor,
    alignItems: 'center',
    marginTop: 10,
  },
  item_line2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  school_select: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  school_title: {
    width: '83%',
    color: '#999999',
    paddingLeft: 15,
  },
  buttons: {
    flexDirection: 'row',
  },
  submitBtn: {
    width: (width - 145) / 2,
    height: 45,
    borderRadius: 4,
    backgroundColor: commonStyle.themeColor,
    marginTop: 25,
    borderColor: commonStyle.themeColor,
    alignItems: 'center',
  },
  submitBtn2: {
    backgroundColor: commonStyle.bluebuttonColor,
    borderColor: commonStyle.bluebuttonColor,
    marginRight: 42,
  },
  submitText: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h1Size,
    color: '#fffefe',
  },
  next_content: {
    width: width * 0.9,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingVertical: 36,
    paddingHorizontal: 29,
  },
  next_title: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: '#3a3a3a',
  },
  userInput: {
    marginTop: 25,
    padding: 15,
    textAlignVertical: 'top',
    // backgroundColor: commonStyle.bgColor,
    width: '100%',
    height: 270,
    alignSelf: 'center',
  },
})
export default Complaint
