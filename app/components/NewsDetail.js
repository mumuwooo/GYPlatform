import React from 'react'
import { Share, StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'
import Touchable from './Touchable'
import { connect } from 'react-redux'
import { NavigationPage } from 'teaset'
import moment from 'moment'
// import HTMLView from 'react-native-htmlview'
import HTML from 'react-native-render-html-for-maxwidth'
import { IconFont, NavBar, Divider } from '.'
import { commonStyle } from '../utils'
import { htmlDecodeByRegExp } from '../utils/tools'
import Toast from 'teaset/components/Toast/Toast';

const { width } = Dimensions.get('window')

class NewsDetail extends NavigationPage {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {}

  renderNavigationBar() {
    const { navTitle } = this.props.navigation.state.params
    return <NavBar title={navTitle} />
  }

  shareArticle=(message,id)=>{
    try {
      const result = Share.share({
        //分享网站链接
        message: message+"\n"+_baseURLGlobal+"/Marticles/details/"+id
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Toast.error(error.message);
    }
  }

  renderPage() {
    let newsList = null
    //  const { zhInfoList } = this.props.zhInfos
    const { data } = this.props.navigation.state.params
    newsList = data
    let htmlContent = null
    if (newsList) {
      htmlContent = htmlDecodeByRegExp(newsList.content)
    }

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View style={styles.top}>
            <Text style={styles.top_title}>{newsList.title}</Text>
            <View style={styles.top_bottom}>
              <Text style={styles.bottom_text}>
                发布时间：{moment(newsList.customTime).format('YYYY-MM-DD')}{' '}
              </Text>
              {newsList.contentSource && (
                <Text style={styles.bottom_text}>
                  来源：{newsList.contentSource}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.content}>
            <HTML
              html={htmlContent}
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
            <Divider type="bottomSpace" color="#fff" />
          </View>

          <View style={styles.bottom}>
            {/* <View style={styles.bottom_item}>
              <IconFont name="&#xe638;" size={30} color="gray" />
              <Text style={styles.item_text}>点赞</Text>
            </View>
            <View style={styles.bottom_item}>
              <IconFont name="&#xe638;" size={30} color="gray" />
              <Text style={styles.item_text}>收藏</Text>
            </View> */}
            <Touchable onPress={()=>this.shareArticle(newsList.title, newsList.id)}>
              <View style={styles.bottom_item}>
                <IconFont name="&#xe638;" size={30} color="gray" />
                <Text style={styles.item_text}>分享</Text>
              </View>
            </Touchable>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    flex: 1,
    backgroundColor: '#fff',
    // minHeight: height - 80,
    // alignItems: 'center',
  },
  top: {
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 1,
  },
  top_title: {
    alignSelf: 'center',
    fontFamily: commonStyle.PFmedium,
    fontSize: commonStyle.h1Size,
    color: '#414141',
    marginBottom: 16,
    marginTop: 20,
  },
  top_bottom: {
    paddingHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h5Size,
    color: '#414141',
    marginBottom: 11,
  },
  content: {
    paddingTop: 12,
  },
  content_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#414141',
    marginBottom: 40,
  },
  bottom: {
    flexDirection: 'row',
    paddingHorizontal: 70,
    marginTop: 20,
    marginBottom: 54,
    // justifyContent: 'space-between',
    justifyContent:'center'
  },

  item_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: '#414141',
    marginTop: 13,
  },
})

export default connect(({ zhInfos }) => ({ zhInfos }))(NewsDetail)
