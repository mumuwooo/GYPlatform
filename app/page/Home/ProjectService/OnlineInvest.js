import React from 'react'
import { StyleSheet, View, Dimensions, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage, Label, Toast } from 'teaset'
import { NavBar, Button, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ link }) => ({ link }))
class OnlineInvest extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    return <NavBar title="投资在线审批服务" />
  }

  handleSubmit = address => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'WebviewLinks',
        params: { title: '投资在线审批服务', address },
      })
    )
  }
  renderPage() {
    const { onlineInvests } = this.props.link
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {onlineInvests &&
            onlineInvests.map((item, index) => (
              <View style={styles.eachitem} key={index}>
                <IconFont
                  name="&#xe63f;"
                  size={35}
                  color={commonStyle.blueColor}
                />
                <Text style={styles.item_text}>{item.title}</Text>
                <Button
                  style={styles.submitBtn}
                  textStyle={styles.button_text}
                  onPress={() => this.handleSubmit(item.address)}
                >
                  办理
                </Button>
              </View>
            ))}
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
