import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native'
import { Col, Row, Grid} from 'react-native-easy-grid'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage } from 'teaset'
import { Touchable, Button, IconFont, NavBar } from '../../components'
import { NavigationActions, commonStyle } from '../../utils'
import { pageInit } from '../../utils/tools'

const paging = pageInit()

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window')

const bannerImg = require('../../assets/images/banner1.png')

@connect(({ app, user }) => ({ app, user }))
class ApplyList extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      swiperShow: false,
      loading: false, // true加载中    false到底了
      isRefresh: true, // true 加载符号转圈  false 不转圈
      isShowHead: false, // true 显示头部
    }
  }

  renderNavigationBar() {
    return <NavBar title="我的办事" />
  }

  navigateTo(routeName, params='') {
    this.props.dispatch(NavigationActions.navigate({ routeName, params }))
  }

  renderPage() {
    //const {userinfo} = this.props.user
    //const {
      //customerDemands,
      //factorGuarantees,
      //siShangEnterprises,
      //appeals,
      //projectCoordinates,
      //financeDemands,
      //financeGuarantees,
      //goldBrands,
      //financeCoordinates
    //} = userinfo

    return (
      <Grid>
        <Row size={25}>
          <Col>
            <Touchable
              onPress={()=>{this.navigateTo('PFactorGuaranteeList')}}
              style={[styles.item_each, {backgroundColor: commonStyle.blueColor}]}
            >
              <IconFont
                name="&#xe62c;"
                size={50}
                color={commonStyle.white}
              />
              <Text style={styles.icon_text}>要素保障服务</Text>
            </Touchable>
          </Col>
          <Col>
            <Touchable
              style={[styles.item_each, {backgroundColor: commonStyle.blueColor}]}
            >
              <IconFont
                name="&#xe62a;"
                size={50}
                color={commonStyle.white}
              />
              <Text style={styles.icon_text}>四上企业申报</Text>
            </Touchable>
          </Col>
          <Col>
            <Touchable
              style={[styles.item_each, {backgroundColor: commonStyle.blueColor}]}
            >
              <IconFont
                name="&#xe62b;"
                size={50}
                color={commonStyle.white}
              />
              <Text style={[styles.icon_text,{height:32}]}>我要诉求</Text>
            </Touchable>
          </Col>
          <Col>
            <Touchable
              style={[styles.item_each, {backgroundColor: commonStyle.orangeColor}]}
            >
              <IconFont
                name="&#xe62d;"
                size={50}
                color={commonStyle.white}
              />
              <Text style={styles.icon_text}>建设项目协调服务</Text>
            </Touchable>
          </Col>
        </Row>
        <Row size={25}>
          <Col>
            <Touchable
              style={[styles.item_each, {backgroundColor: commonStyle.pinkColor}]}
            >
              <IconFont
                name="&#xe657;"
                size={50}
                color={commonStyle.white}
              />
              <Text style={styles.icon_text}>在线成果定制</Text>
            </Touchable>
          </Col>
          <Col>
            <Touchable
              style={[styles.item_each, {backgroundColor: commonStyle.oceanColor}]}
            >
              <IconFont
                name="&#xe643;"
                size={50}
                color={commonStyle.white}
              />
              <Text style={styles.icon_text}>融资需求登记</Text>
            </Touchable>
          </Col>
          <Col>
            <Touchable
              style={[styles.item_each, {backgroundColor: commonStyle.oceanColor}]}
            >
              <IconFont
                name="&#xe62f;"
                size={50}
                color={commonStyle.white}
              />
              <Text style={styles.icon_text}>融资担保申请</Text>
            </Touchable>
          </Col>
          <Col>
            <Touchable
              style={[styles.item_each, {backgroundColor: commonStyle.redColor}]}
            >
              <IconFont name="&#xe632;" size={50} color={commonStyle.white} />
              <Text style={styles.icon_text}>金字招牌工程</Text>
            </Touchable>
          </Col>
        </Row>
        <Row size={50}>
          <Text>直接拨打电话</Text>
        </Row>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  item_each: {
    flex:1,
    margin:1,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_text: {
    width:60,
    textAlign:'center',
    color: commonStyle.white,
    marginTop: 5,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default ApplyList
