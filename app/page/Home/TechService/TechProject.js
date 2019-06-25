import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage } from 'teaset'
import {
  Divider,
  NavBar,
  IconFont,
  Button,
  Touchable,
} from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class TechProject extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    return <NavBar title="科技项目服务" />
  }

  handleSubmit = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'WebviewLinks',
        params: { title: '科技项目详情' },
      })
    )
  }
  renderPage() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <ImageBackground
            source={require('../../../assets/images/tech_bg.png')}
            style={styles.top_imageBg}
          >
            <View style={styles.top_text}>
              <Text style={styles.text_title}>科技强国</Text>
              <Text style={styles.text_eng}> PATENT DECLARATION GUIDE </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <Touchable style={styles.eachitem} onPress={this.handleSubmit}>
            <View style={styles.item_left}>
              <IconFont
                name="&#xe656;"
                size={35}
                color={commonStyle.pinkColor}
              />
              <Text style={styles.item_text}>广元市科技项目综合管理平台</Text>
            </View>
            <IconFont name="&#xe6eb;" size={19} style={styles.item_right} />
          </Touchable>

          <Touchable style={styles.eachitem} onPress={this.handleSubmit}>
            <View style={styles.item_left}>
              <IconFont
                name="&#xe646;"
                size={35}
                color={commonStyle.pinkColor}
              />
              <Text style={styles.item_text}>四川省科技管理信息系统</Text>
            </View>
            <IconFont name="&#xe6eb;" size={19} style={styles.item_right} />
          </Touchable>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  top_imageBg: {
    width,
    height: 153,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top_text: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_title: {
    color: '#fff',
    fontFamily: commonStyle.PFmedium,
    fontSize: commonStyle.hSize,
    marginBottom: 9,
  },
  text_eng: {
    fontFamily: commonStyle.PFregular,
    fontSize: 8,
    color: '#ffffff',
  },
  content: {
    marginTop: 24,
  },
  eachitem: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 14,
  },
  item_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: '#3a3a3a',
    width: 210,
    marginLeft: 10,
    marginRight: 24,
  },
  item_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_right: {
    color: commonStyle.h2Color,
  },
})
export default TechProject
