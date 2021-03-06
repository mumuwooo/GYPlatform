import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native'
import HTML from 'react-native-render-html-for-maxwidth'
import { connect } from 'react-redux'
import { Touchable, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import _baseURLGlobal from '../../../utils/global'
import FastImage from 'react-native-fast-image'

const { width, height } = Dimensions.get('window')

export const CompanyInfos = ({ style, data, dispatch, ...rest }) => {
  const gotoDetail = index => {
    const itemData = data[index]
    dispatch(
      NavigationActions.navigate({
        routeName: 'NewsDetail',
        params: { navTitle: '企业信息', data: itemData },
      })
    )
  }
  return (
    <ScrollView
      style={[styles.container, style]}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item, index) => (
        <Touchable
          style={styles.item_view}
          key={index}
          onPress={() => gotoDetail(index)}
        >
          <View style={styles.item_top}>
            <FastImage
              style={{ width: 154, height: 96 }}
              resizeMode="contain"
              source={{ uri: _baseURLGlobal + item.pictureUrl }}
            />
            <View style={styles.item_text}>
              <Text style={styles.text_title}>{item.title}</Text>
              {/* <Text style={styles.text_content} numberOfLines={3}>点击查看详情</Text> */}
            </View>
          </View>
        </Touchable>
      ))}
      {/* <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../../../assets/images/companginfos2.png')} />
            <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../../../assets/images/companginfos3.png')} /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  item_top: {
    alignItems: 'center',
    paddingTop: 27,
    paddingRight: 25,
  },
  item_text: {
    paddingTop: 9,
    width: width * 0.32,
  },
  text_title: {
    textAlign: 'center',
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: commonStyle.h2Color,
    paddingBottom: 9,
  },
  text_content: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: commonStyle.h2Color,
  },
})

// const data=[
//     {'Title':'广元大汉科技有限责任公司','content':'公司专业从事墙体基层材料的研发、生产，从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},
//     {'Title':'广元大汉科技有限责任公司','content':'从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},
//     {'Title':'广元大汉科技有限责任公司','content':'从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},
//     {'Title':'广元大汉科技有限责任公司','content':'从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},
//     {'Title':'广元大汉科技有限责任公司','content':'从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},
//     {'Title':'广元大汉科技有限责任公司','content':'从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},
//     {'Title':'广元大汉科技有限责任公司','content':'从优质矿石原料的开采加工到墙体基层材料的施工作业，全产业链完美组合，专业化精细分工，质量、价格、服务一步到位。公司致力于环保健康人居环境，每年投入庞大的研发费用，与德国、英国、法国等地着名化工集团建立了长期的技术合作关系，依托其专业质量和顶尖化工专家团队，对研发、测试、原料筛选、生产过程序控制制、制造环境和生产装备等方面，以近乎苛刻的欧盟环保标准和完全无甲醛、无笨、无毒的优质建材产品培养市场。,从优质矿石原料的开采加工到墙体基层材料的施工作业,全产业链完美组合,专业化精细分工,质量、价格、服务一步到'},

//   ]
export default connect()(CompanyInfos)
