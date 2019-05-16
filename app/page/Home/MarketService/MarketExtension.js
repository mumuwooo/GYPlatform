import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Timeline from 'react-native-timeline-listview'
import { NavigationPage, Button, Toast } from 'teaset'
import { Divider, IconFont,NavBar } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

class MarketExtension extends NavigationPage {
  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderDetail = this.renderDetail.bind(this)

    this.data = [
      { index:1,
        title: '2019年6月27日-6月29日/广州', 
        description: '2019世界食品广州展',
        // lineColor:'#009688', 
        icon: require('../../../assets/images/timeline_redtag.png'),
        imageUrl: 'http://www.zhaohua.gov.cn/pic.aspx?id=8894'
      },
      {
        index:2,
        title: '2019年6月27日-6月29日/广州', 
        description: '国际火锅食材用品展览会', 
        icon: require('../../../assets/images/timeline_tag.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        index:3,
        title: '2019年6月27日-6月29日/广州', 
        description: '上海国际智能家居展览会',
        icon: require('../../../assets/images/timeline_tag.png'),
        // lineColor:'#009688', 
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        index:4,
        title: '2019年6月27日-6月29日/广州', 
        description: '2019亚洲果蔬产业博览会', 
        icon: require('../../../assets/images/timeline_tag.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
    ]
    this.state = {selected: null}
  } 
  renderNavigationBar() {
    return <NavBar title="市场开拓" />
  }

  onEventPress(data){
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    this.setState({selected: data})
  }


  renderDetail(rowData, sectionID, rowID) {
    const title = <Text style={[styles.title]}>{rowData.title}</Text>
    let desc = null
    if(rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>   
          <View style={styles.description_row}>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
          <Text style={styles.textDescription_right}>{'详情 >'}</Text>
          </View>
          <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
        </View>
      )
    
    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
  }

  renderPage() {
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={20}
          renderFullLine
          circleColor='rgba(0,0,0,0)'
          lineColor='#3a3a3a'
          showTime={false}
          descriptionStyle={{color:'gray'}}
          options={{
            // style:{paddingTop:-65}
          }}
          innerCircle={'icon'}
          iconStyle={{width: 16,
            height: 8,marginLeft:15,marginTop:25,}}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:15,
    paddingLeft:18,
    backgroundColor:'#fff'
  },
  list: {
    flex: 1,
  },
  title:{
    fontSize:12,
    fontFamily: commonStyle.PFregular,
    paddingBottom:10,
  },
  descriptionContainer:{
    paddingRight: 35
  },
  image:{
    width: 305,
    height: 156,
  },
  description_row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    paddingBottom:12,
  },
  textDescription: {
    fontFamily: commonStyle.PFregular,
    fontSize: 18,
    color: "#3a3a3a",
  },
  textDescription_right:{
    fontFamily: commonStyle.PFregular,
    fontSize: 12,
    color: "#3a3a3a"
  },

})
export default MarketExtension
