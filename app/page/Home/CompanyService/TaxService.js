import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage } from 'teaset'
import { NavBar, Button, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class TaxService extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    return <NavBar title="税务服务直通车" />
  }

  handleSubmit = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'WebviewLinks',
        params: { title: '税务服务直通车' },
      })
    )
  }
  renderPage() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.eachitem}>
            <IconFont name="&#xe647;" size={35} color={commonStyle.blueColor} />
            <Text style={styles.item_text}>增值税一般纳税人登记</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont name="&#xe63d;" size={35} color={commonStyle.blueColor} />
            <Text style={styles.item_text}>纳税信用评价结果</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont name="&#xe652;" size={35} color={commonStyle.blueColor} />
            <Text style={styles.item_text}>
              居民企业所得税年度纳税申报（适用查账征收）
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
            <IconFont name="&#xe640;" size={35} color={commonStyle.blueColor} />
            <Text style={styles.item_text}>
              居民企业所得税月（季）度预缴纳税申报（适用查账征收）
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
    width: 194,
    marginLeft: 10,
    marginRight: 24,
  },
  submitBtn: {
    width: 57,
    height: 23,
    borderRadius: 4,
    borderColor: commonStyle.blueColor,
    backgroundColor: commonStyle.blueColor,
    marginLeft: 20,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#fff',
  },
})
export default TaxService
