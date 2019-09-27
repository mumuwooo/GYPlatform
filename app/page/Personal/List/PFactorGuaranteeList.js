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
    console.log("item info", item);
    return(
      <View style={styles.block}>
        <View style={styles.blockTitle}>
          <Text>{item.contact}</Text>
        </View>
        <View style={styles.blockContent}>
          <Text>{item.content}</Text>
        </View>
        <View style={styles.blockFooter}>
          <Text>{item.enterpriseName}</Text>
          <Text>{item.createdTime}</Text>
        </View>
      </View>
    )
  }


  renderPage() {
    const {userinfo} = this.props.user
    const {
      factorGuarantees,
    } = userinfo
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
    backgroundColor: '#fff',
  },
  block:{
    marginTop: 5,
    flex: 1,
    backgroundColor: 'green',
  },
  blockTitle:{
    backgroundColor: 'yellow',
  },
  blockContent:{
    backgroundColor: 'red',
  },
  blockFooter:{
    backgroundColor: 'yellow'
  }
})

export default PFactorGuaranteeList
