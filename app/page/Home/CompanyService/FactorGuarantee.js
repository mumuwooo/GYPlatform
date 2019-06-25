import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  ImageBackground,
} from 'react-native'
import { connect } from 'react-redux'
import HTML from 'react-native-render-html'
import { NavigationBar, NavigationPage } from 'teaset'
import { NavBar, Divider, Button } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class FactorGuarantee extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderNavigationBar() {
    return <NavBar title="要素保障服务" />
  }

  handleSubmit = () => {
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'FactorGuaranteeForm' })
    )
  }
  renderPage() {
    // let htmlContent = null
    const htmlContent = `
    <p style="color:#e0161b;font-size:13px;margin-top:10px">
    <b>1、能源保障服务</b> 
    </p>
    <p style="font-size:12px;text-indent:55px;margin-top:10px">
    能源保障是经济社会发展的基础，既能保障在建项目加快投运，也利于加快项目启动和施工。
    通过此服务将业主项目推进过程中遇到的能源保障问题及需求，进行收集并处理。
    旨在全力配合项目业主做好各项协调服务工作，及时解决项目推进过程中出现的困难和问题，
    增强能源要素保障能力，确保项目顺利推进。
    </p>

    <p style="color:#e0161b;font-size:13px;margin-top:10px">
    <b>2、供排水保障</b> 
    </p>
    <p style="font-size:12px;text-indent:55px;margin-top:10px">
    能源保障是经济社会发展的基础，既能保障在建项目加快投运，也利于加快项目启动和施工。
    通过此服务将业主项目推进过程中遇到的能源保障问题及需求，进行收集并处理。
    旨在全力配合项目业主做好各项协调服务工作，及时解决项目推进过程中出现的困难和问题，
    增强能源要素保障能力，确保项目顺利推进。
    </p>

    <p style="color:#e0161b;font-size:13px;margin-top:10px">
    <b>3、通信保障</b> 
    </p>
    <p style="font-size:12px;text-indent:55px;margin-top:10px">
    能源保障是经济社会发展的基础，既能保障在建项目加快投运，也利于加快项目启动和施工。
    通过此服务将业主项目推进过程中遇到的能源保障问题及需求，进行收集并处理。
    旨在全力配合项目业主做好各项协调服务工作，及时解决项目推进过程中出现的困难和问题，
    增强能源要素保障能力，确保项目顺利推进。
    </p>

    <p style="color:#e0161b;font-size:13px;margin-top:10px">
    <b>4、原材料保障</b> 
    </p>
    <p style="font-size:12px;text-indent:55px;margin-top:10px;">
    能源保障是经济社会发展的基础，既能保障在建项目加快投运，也利于加快项目启动和施工。
    通过此服务将业主项目推进过程中遇到的能源保障问题及需求，进行收集并处理。
    旨在全力配合项目业主做好各项协调服务工作，及时解决项目推进过程中出现的困难和问题，
    增强能源要素保障能力，确保项目顺利推进。
    </p>
    
    `
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <ImageBackground
            source={require('../../../assets/images/factor_bg.png')}
            style={styles.top_imageBg}
          >
            <View style={styles.top_text}>
              <Text style={styles.text_title}>在线服务流程:</Text>
              <View style={styles.text_block}>
                <Text style={styles.text_item}>网上申请</Text>
                <Text style={styles.line} />
                <Text style={styles.text_item}>在线审批</Text>
                <Text style={styles.line} />
                <Text style={styles.text_item}>受理</Text>
                <Text style={styles.line} />
                <Text style={styles.text_item}>办结</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <Button
          style={styles.button_save}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
          type="theme"
        >
          立即申请
        </Button>

        <View style={styles.content}>
          <Text style={styles.content_title}>服务介绍</Text>
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
      </ScrollView>
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
    height: 112,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_title: {
    color: '#fff',
    fontFamily: commonStyle.PFmedium,
    fontSize: commonStyle.h21Size,
    marginBottom: 14,
  },
  text_block: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_item: {
    color: '#fff',
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h31Size,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 13,
  },
  line: {
    width: 27,
    height: 1,
    backgroundColor: '#fff',
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
    // height:200,
  },
  content_title: {
    width: 90,
    fontFamily: commonStyle.PFmedium,
    fontSize: commonStyle.h31Size,
    color: '#ffffff',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: commonStyle.themeColor,
    marginTop: 19,
    marginBottom: 26,
  },
})
export default FactorGuarantee
