import React from 'react'
import { StyleSheet, View, Dimensions, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import HTML from 'react-native-render-html'
import { NavigationBar, NavigationPage } from 'teaset'
import { NavBar, Divider, Button } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class AdmApproval extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    return <NavBar title="行政审批须知" />
  }

  handleSubmit = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'WebviewLinks',
        params: { title: '行政审批须知' },
      })
    )
  }
  renderPage() {
    const htmlContent = `
    <p style="color:#e0161b;font-size:14px;margin-top:10px">
    <b>1、能源保障服务</b> 
    </p>
    <p style="font-size:13px;text-indent:55px;margin-top:10px">
    能源保障是经济社会发展的基础，既能保障在建项目加快投运，也利于加快项目启动和施工。
    通过此服务将业主项目推进过程中遇到的能源保障问题及需求，进行收集并处理。
    旨在全力配合项目业主做好各项协调服务工作，及时解决项目推进过程中出现的困难和问题，
    增强能源要素保障能力，确保项目顺利推进。
    </p>

    <p style="color:#e0161b;font-size:14px;margin-top:10px">
    <b>2、供排水保障</b> 
    </p>
    <p style="font-size:13px;text-indent:55px;margin-top:10px">
    能源保障是经济社会发展的基础，既能保障在建项目加快投运，也利于加快项目启动和施工。
    通过此服务将业主项目推进过程中遇到的能源保障问题及需求，进行收集并处理。
    旨在全力配合项目业主做好各项协调服务工作，及时解决项目推进过程中出现的困难和问题，
    增强能源要素保障能力，确保项目顺利推进。
    </p>
    

    `
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView
            style={{ height: height * 0.65 }}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.content_title}>行政审批须知</Text>
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
          </ScrollView>
        </View>
        <Button
          style={styles.button_save}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
          type="theme"
        >
          立即审批
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button_save: {
    marginTop: 18,
    width: 91,
    height: 30,
    borderRadius: 5,
    borderColor: commonStyle.themeColor,
    backgroundColor: commonStyle.themeColor,
    alignSelf: 'center',
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#ffff',
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 14,
    marginTop: 18,
    marginBottom: 27,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bababa',
    paddingHorizontal: 16,
  },
  content_title: {
    width: 161,
    fontFamily: commonStyle.PFmedium,
    fontSize: commonStyle.h31Size,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 38,
    borderRadius: 15,
    backgroundColor: commonStyle.themeColor,
    marginTop: 19,
    marginBottom: 26,
  },
})
export default AdmApproval
