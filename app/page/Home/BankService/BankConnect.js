import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage } from 'teaset'
import { NavBar, Button, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ link }) => ({ link }))
class BankConnect extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    return <NavBar title="银行直通车" />
  }
  handleSubmit = (title, address) => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'WebviewLinks',
        params: { title, address },
      })
    )
  }
  renderPage() {
    const { banks } = this.props.link
    console.log('Bank Page', banks)
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {banks &&
            banks.map((item, index) => (
              <View style={styles.eachitem} key={index}>
                <IconFont name="&#xe659;" size={35} color="#a2011b" />
                <Text style={styles.item_text}>{item.title}</Text>
                <Button
                  style={styles.submitBtn}
                  textStyle={styles.button_text}
                  onPress={() => this.handleSubmit(item.title, item.address)}
                >
                  办理
                </Button>
              </View>
            ))}

          {/* <View style={styles.eachitem}>
            <IconFont name="&#xe65e;" size={35} color="#c90000" />
            <Text style={styles.item_text}>中国工商银行</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont name="&#xe65a;" size={35} color="#009c96" />
            <Text style={styles.item_text}>中国农业银行</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont name="&#xe65d;" size={35} color="#c92420" />
            <Text style={styles.item_text}>广元村镇贵商银行</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont name="&#xe65f;" size={35} color="#a1cd44" />
            <Text style={styles.item_text}>四川农信</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont name="&#xe65b;" size={35} color="#c7162e" />
            <Text style={styles.item_text}>招商银行</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View>

          <View style={styles.eachitem}>
            <IconFont name="&#xe65c;" size={35} color="#003b90" />
            <Text style={styles.item_text}>建设银行</Text>
            <Button
              style={styles.submitBtn}
              textStyle={styles.button_text}
              onPress={this.handleSubmit}
            >
              办理
            </Button>
          </View> */}
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
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 14,
  },
  item_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: '#3a3a3a',
    width: 194,
  },
  submitBtn: {
    width: 57,
    height: 23,
    borderRadius: 4,
    borderColor: commonStyle.redColor,
    backgroundColor: commonStyle.redColor,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#fff',
  },
})
export default BankConnect
