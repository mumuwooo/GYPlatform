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
import moment from 'moment'
import { Col, Row, Grid} from 'react-native-easy-grid'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage } from 'teaset'
import { Touchable, Button, IconFont, NavBar } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window')


@connect(({ app, user }) => ({ app, user }))
class PFactorGuaranteeList extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  renderNavigationBar() {
    return <NavBar title="要素保障服务申请表" />
  }


  navigateTo(routeName, params) {
    this.props.dispatch(NavigationActions.navigate({ routeName, params }))
  }

  _renderItemView({item, index}){
    return(
      <View style={styles.block}>
        <View style={styles.blockTitle}>
          <View style={styles.leftLabel}>
            <Text>{item.contact}</Text>
          </View>
          <View style={styles.rightLabel}>
            <Text>查看申请进度>>></Text>
          </View>
        </View>
        <View style={styles.blockContent}>
          <Text>{item.content}</Text>
        </View>
        <View style={styles.blockFooter}>
          <View style={styles.leftLabel}>
            <Text>{item.enterpriseName}</Text>
          </View>
          <View style={styles.rightLabel}>
            <Text>{moment(item.createdTime).format('YYYY-MM-DD')}</Text>
          </View>
        </View>
      </View>
    )
  }


  renderPage() {
    const {userinfo} = this.props.user
    const {
      factorGuarantees,
    } = userinfo
    console.log("factorGuarantees", factorGuarantees);
    return (
      <View>
        <FlatList
          data={factorGuarantees}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItemView}
          ListEmptyComponent={<Text>网络加载中</Text>}
          showsVerticalScrollIndicator={false}
          enabled
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block:{
    marginTop: 10,
    marginLeft: 4,
    marginRight: 4,
    flex: 1,
    borderRadius: 4,
    borderWidth:1,
    borderColor: '#999',
    backgroundColor: '#fff',
  },
  blockTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:4,
    borderBottomWidth:1,
    borderBottomColor: '#bbb',
  },
  blockContent:{
    padding: 4,
  },
  blockFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:4,
    borderTopWidth:1,
    borderTopColor: '#bbb',
  },
  leftLabel:{
    alignSelf: 'flex-start',
  },
  rightLabel:{
    alignSelf: 'flex-end',
  }
})

export default PFactorGuaranteeList
