import React from 'react'
import { StyleSheet, View, Image,Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage } from 'teaset'
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view'

import { Button,Divider, NavBar } from '../../components'
import { NavigationActions, commonStyle } from '../../utils'
import  EventsList  from "./EventsList";
const { width, height } = Dimensions.get('window')

@connect()
class InvestZH extends NavigationPage {
  renderNavigationBar() {
    return <NavBar title="投资昭化" />
  }


  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Sorry' }))
  }

  // tab切换
  handleTabSwitch = obj => {
    this.setState({ curIndex: obj.i })
    
  }
  renderPage() {
    return (
      <View style={styles.tabView}>
      <ScrollableTabView
        onChangeTab={obj => {
          this.handleTabSwitch(obj)
        }}
        renderTabBar={() => <ScrollableTabBar style={styles.tabbar_view} />}
        tabBarUnderlineStyle={styles.tabView_lineStyle}
        tabBarActiveTextColor={commonStyle.themeColor}
        tabBarInactiveTextColor={commonStyle.h4Color}
        tabBarTextStyle={styles.tabViewText}
      >
        <View style={styles.tabView_textStyle} tabLabel="昭化大事记">
            <EventsList />
          </View>
          <View style={styles.tabView_textStyle} tabLabel="广元概况">
              <Text>广元概况</Text>
          </View>
          <View style={styles.tabView_textStyle} tabLabel="昭化概况">
              <Text>昭化概况</Text>
          </View>
          <View style={styles.tabView_textStyle} tabLabel="投资合作">
              <Text>投资合作</Text>
          </View>
        </ScrollableTabView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: commonStyle.bgColor,
  },
  tabbar_view: {
    backgroundColor: '#FFFFFF',
    height: 50,
  },

  tabView_lineStyle: {
    backgroundColor: commonStyle.themeColor,
    borderBottomWidth: 0,
  },
  tabViewText: {
    fontFamily: commonStyle.PFbold,
    fontSize: commonStyle.h2Size,
  },
  tabView_textStyle: {
    alignItems: 'center',
  },
  loadHeader: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: '100%',
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    marginBottom: 60,
  },
  loaded: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  loaded_line: {
    width: '28%',
    backgroundColor: '#ddd',
    height: 1,
  },
  bottom_button: {
    width,
    height: 50,
    position: 'absolute',
    bottom: 0,
    backgroundColor: commonStyle.themeColor,
    borderColor: commonStyle.themeColor,
    borderRadius: 0,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#fffefe',
  },
})

export default InvestZH
