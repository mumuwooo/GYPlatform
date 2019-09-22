import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Linking,
  ImageBackground
} from 'react-native'
import {
  Divider,
  NavBar,
  IconFont,
  Button,
  Touchable,
} from '../../components'
import { connect } from 'react-redux'
import { NavigationPage } from 'teaset'
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view'

import HTML from 'react-native-render-html-for-maxwidth'
import { NavigationActions, commonStyle } from '../../utils'
import EventsList from './EventsList'
import FinanceCoordinateForm from './FinanceCoordinateForm'


const { width, height } = Dimensions.get('window')

@connect(({ investZH }) => ({ investZH }))
class InvestZH extends NavigationPage {
  renderNavigationBar() {
    return <NavBar title="投资昭化" />
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'FinanceCoordinateForm' }))
  }

  callPhone=()=>{
    let url="tel:18570063440"
    console.log("call phone excuceted")
       Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            console.log('Can\'t handle url: ' + url);
        } else {
            return Linking.openURL(url);
        }
    }).catch(err => console.error('An error occurred', err));

  }

  // tab切换
  handleTabSwitch = obj => {
    this.setState({ curIndex: obj.i })
  }
  renderPage() {
    const { pages, events } = this.props.investZH
    console.log("what page is", pages);
    return (
      <View style={styles.tabView}>
        <ScrollableTabView
          onChangeTab={obj => {
            this.handleTabSwitch(obj)
          }}
          renderTabBar={() => <ScrollableTabBar style={styles.tabbar_view} />}
          tabBarUnderlineStyle={styles.tabView_lineStyle}
          tabBarActiveTextColor={commonStyle.themeColor}
          tabBarInactiveTextColor={commonStyle.h2Color}
          tabBarTextStyle={styles.tabViewText}
        >
          <View style={styles.tabView_textStyle} tabLabel="昭化大事记">
            <EventsList events={events} />
          </View>
          <View style={styles.tabView_textStyle} tabLabel="广元概况">
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.tabContent}>
              <HTML
                html={pages ? pages[1].content : '加载中'}
                // html="test,test"
                imagesMaxWidth={width * 0.95}
                tagsStyles={{
                  p: {
                    // fontFamily: "PingFang-SC-Medium",
                    // fontSize: 16,
                    // lineHeight:24,
                    // color: "#666"
                  },
                }}
              />
              </View>
            </ScrollView>
          </View>
          <View style={styles.tabView_textStyle} tabLabel="昭化概况">
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.tabContent}>
              <HTML
                html={pages ? pages[2].content : '加载中'}
                imagesMaxWidth={width * 0.95}
              />
              </View>
            </ScrollView>
          </View>
          <View style={styles.tabView_textStyle} tabLabel="投资合作">
            <View>
              <View style={styles.top}>
                <ImageBackground
                  source={require('../../assets/images/tech_bg.png')}
                  style={styles.top_imageBg}
                >
                  <View style={styles.top_text}>
                    <Text style={styles.text_title}>区内金字招牌介绍</Text>
                    <Text style={styles.text_eng}>
                      INTRODUCING THE GOLD SIGNS IN THE AREA
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.content}>
                <Touchable style={styles.eachitem} onPress={this.gotoDetail}>
                  <View style={styles.item_left}>
                    <IconFont
                      name="&#xe632;"
                      size={35}
                      color={commonStyle.redColor}
                    />
                    <Text style={styles.item_text}>提交申请书</Text>
                  </View>
                  <IconFont name="&#xe6eb;" size={19} style={styles.item_right} />
                </Touchable>
                <Touchable style={styles.eachitem} onPress={this.callPhone}>
                  <View style={styles.item_left}>
                    <IconFont
                      name="&#xe632;"
                      size={35}
                      color={commonStyle.redColor}
                    />
                    <Text style={styles.item_text}>拨打电话直接联系</Text>
                  </View>
                  <IconFont name="&#xe6eb;" size={19} style={styles.item_right} />
                </Touchable>
              </View>
            </View>
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
  },
  tabView_textStyle: {
  },
  tabContent:{
    width:width*0.9,
    paddingTop:12,
    paddingLeft:width*0.025,
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
