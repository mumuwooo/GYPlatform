import React from 'react'
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage } from 'teaset'
import moment from 'moment'
// import HTMLView from 'react-native-htmlview'
import HTML from 'react-native-render-html-for-maxwidth'
import { IconFont, NavBar, Divider } from '.'
import { commonStyle } from '../utils'
import { htmlDecodeByRegExp } from '../utils/tools'

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

  renderPage() {
    let newsList = null
    //  const { zhInfoList } = this.props.zhInfos
    const { data } = this.props.navigation.state.params
    newsList = data
    let htmlContent = null
    if (newsList) {
      htmlContent = htmlDecodeByRegExp(newsList.content)
    }

    // const htmlContent =`
    // <p style="text-align: center;"><b>你头上有一个很长很长的犄角。。。。。。。。我是一个标题很长的标题的标题的标题总之就是很长就看你换不换行</b> </p><p style="text-align: center;"><img src="http://ctfive.oss-cn-hangzhou.aliyuncs.com/Course/2019/01/09/2417b42526634e3a82e94a3e64cff5fb0012.png" style="max-width:100%;"><br></p><p style="text-align: center;">开局一张图，后面全靠编。</p><p>        对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！对不起编不下去了。你看这个扁担，不看！<br></p>
    // `;
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
            <View style={styles.bottom_item}>
              <IconFont name="&#xe638;" size={30} color="gray" />
              <Text style={styles.item_text}>点赞</Text>
            </View>
            <View style={styles.bottom_item}>
              <IconFont name="&#xe638;" size={30} color="gray" />
              <Text style={styles.item_text}>收藏</Text>
            </View>
            <View style={styles.bottom_item}>
              <IconFont name="&#xe638;" size={30} color="gray" />
              <Text style={styles.item_text}>分享</Text>
            </View>
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
    justifyContent: 'space-between',
  },

  item_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: '#414141',
    marginTop: 13,
  },
})

// export default NewsDetail
export default connect(({ zhInfos }) => ({ zhInfos }))(NewsDetail)
