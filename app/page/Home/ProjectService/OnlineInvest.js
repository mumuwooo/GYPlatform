import React from 'react'
import { StyleSheet, View, Dimensions, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage, Label, Toast } from 'teaset'
import { NavBar, Button, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class OnlineInvest extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    return <NavBar title="投资在线审批服务" />
  }

  handleSubmit = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'WebviewLinks',
        params: { title: '投资在线审批办理详情' },
      })
    )
  }
  renderPage() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.eachitem}>
            <IconFont
              name="&#xe63f;"
              size={35}
              color={commonStyle.orangeColor}
            />
            <Text style={styles.item_text}>
              国定资产投资项目节能审查（企业技术改造项目）
            </Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont
              name="&#xe641;"
              size={35}
              color={commonStyle.orangeColor}
            />
            <Text style={styles.item_text}>水利工程可行性研究报告审查</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont
              name="&#xe63f;"
              size={35}
              color={commonStyle.orangeColor}
            />
            <Text style={styles.item_text}>
              国定资产投资项目节能审查（企业技术改造项目）
            </Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont
              name="&#xe64c;"
              size={35}
              color={commonStyle.orangeColor}
            />
            <Text style={styles.item_text}>
              地震监测设施和观测环境保护范的确定
            </Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>
        </View>
        {/* <Button
          style={styles.submitBtn}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
          type="theme"
        >
          点击此处办理后跳转到外部链接
        </Button> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 31,
  },
  eachitem: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 14,
    marginBottom: 14,
  },
  item_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: '#3a3a3a',
    width: width * 0.49,
    marginLeft: 10,
    marginRight: 24,
  },
  submitBtn: {
    width: 57,
    height: Platform.OS === 'ios' ? 30 : 23,
    borderRadius: 4,
    borderColor: commonStyle.orangeColor,
    backgroundColor: commonStyle.orangeColor,
    marginLeft: 10,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#fff',
  },
})
export default OnlineInvest
