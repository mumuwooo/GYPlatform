import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
// import Timeline from 'react-native-timeline-listview'
import Timeline from 'react-native-timeline-listview-touchable'
import { NavigationPage, Button, Toast } from 'teaset'
import { connect } from 'react-redux'
import { Touchable, Divider, IconFont, NavBar } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

import _baseURLGlobal from '../../../utils/global'

@connect(({ marketService }) => ({ marketService }))
class MarketExtension extends NavigationPage {
  constructor() {
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

    this.state = { selected: null }
  }
  renderNavigationBar() {
    return <NavBar title="市场开拓" />
  }

  onEventPress(data) {
    console.log('====================================')
    console.log(data)
    console.log('====================================')
    this.setState({ selected: data })
  }

  goToDetail(data){
    dispatch(
      NavigationActions.navigate({
        routeName: 'NewsDetail',
        params: { data },
      })
    )
  }

  renderDetail(rowData, sectionID, rowID) {
    const title = <Text style={[styles.title]}>{rowData.title}</Text>
      console.log("title Details", rowData);
    let desc = null
    if (rowData.pictureUrl && rowData.content)
      desc = (
        <View style={styles.descriptionContainer}>
          <View style={styles.description_row}>
            <Text style={[styles.textDescription]}>
              {rowData.contentSource}
            </Text>
              <Touchable onPress={()=>this.goToDetail(rowData)}>
            <Text style={styles.textDescription_right}>{'详情 >'}</Text>
              </Touchable>
          </View>
          <Image
            source={{ uri: _baseURLGlobal + rowData.pictureUrl }}
            style={styles.image}
          />
        </View>
      )

    return (
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
    )
  }

  renderPage() {
    const { newsList } = this.props.marketService
    return (
      newsList && (
        <View style={styles.container}>
          <Timeline
            style={styles.list}
            // data={this.data}
            data={newsList}
            circleSize={20}
            renderFullLine
            circleColor="rgba(0,0,0,0)"
            lineColor="#3a3a3a"
            showTime={false}
            descriptionStyle={{ color: 'gray' }}
            options={
              {
                // style:{paddingTop:-65}
              }
            }
            innerCircle="icon"
            iconStyle={{
              width: 16,
              height: 8,
              marginLeft: 15,
              marginTop: 25,
            }}
            onEventPress={this.onEventPress}
            renderDetail={this.renderDetail}
          />
        </View>
      )
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 18,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontFamily: commonStyle.PFregular,
    paddingBottom: 10,
  },
  descriptionContainer: {
    paddingRight: 35,
  },
  image: {
    width: 305,
    height: 156,
  },
  description_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 12,
  },
  textDescription: {
    fontFamily: commonStyle.PFregular,
    fontSize: 18,
    color: '#3a3a3a',
  },
  textDescription_right: {
    fontFamily: commonStyle.PFregular,
    fontSize: 12,
    color: '#3a3a3a',
  },
})
export default MarketExtension
