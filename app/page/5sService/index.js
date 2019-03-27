import React, { Component } from 'react'
import { StyleSheet, View, Image ,Dimensions,ScrollView,Text} from 'react-native'
import { connect } from 'react-redux'

import { Button,Iconfont, Touchable } from '../../components'
import CompanyBlock from './CompanyBlock'
import ProjectBlock from './ProjectBlock'
import FinanceBlock from './FinanceBlock'
import TechBlock from './TechBlock'
import BrandBlock from './BrandBlock'
import { NavigationActions } from '../../utils'

const {width,height}=Dimensions.get('window')
@connect()
class FiveSService extends Component {
  static navigationOptions = {
    tabBarLabel: '5S服务',
    tabBarIcon: ({ focused, tintColor }) => (
      focused?<Text style={{fontFamily:'iconfont',fontSize:24,color:'#d81519'}}>&#xe62d;</Text>
      :
      <Text style={{fontFamily:'iconfont',fontSize:24,color:'#353434'}}>&#xe62d;</Text>

    ),
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Sorry' }))
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Touchable onPress={this.gotoDetail}>
        <CompanyBlock title='企业运行服务' style={styles.serviceBox} />
        </Touchable>

        <Touchable onPress={this.gotoDetail}>
        <ProjectBlock title='项目推进服务' style={styles.serviceBox}/>
        </Touchable>
        
        <Touchable onPress={this.gotoDetail}>
        <FinanceBlock title='金融与证券服务' style={styles.serviceBox}/>
        </Touchable>

        <Touchable onPress={this.gotoDetail}>
        <TechBlock title='科技创新服务' style={styles.serviceBox}/>
        </Touchable>

        <Touchable onPress={this.gotoDetail}>
        <BrandBlock title='品牌与市场促进服务' style={styles.serviceBox}/>
        </Touchable>

        <View style={styles.devied}/>
      </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: 'center',
    // justifyContent: 'center',
  },
  serviceBox:{
    width:width*0.95,
    backgroundColor:'#fff',
    marginTop: 15,
  },
  devied:{
    height:50,
  },
})

export default FiveSService
