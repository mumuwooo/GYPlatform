import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Alert,
  Text,
  TextInput,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage, Label, Toast } from 'teaset'
import { Divider, Button, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import NavBar from '../../../components/NavBar'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class SocialService extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

 
  renderNavigationBar() {
    return <NavBar title="社会服务直通车" />
  }

  handleSubmit=()=>{
    this.props.dispatch(NavigationActions.navigate({routeName:'WebviewLinks',params:{title:'社会服务直通车'}}))
  }
  renderPage() {
    return (
      <View style={styles.container}>
      <View style={styles.content}>
      <View style={styles.eachitem}>
        <IconFont name='&#xe63e;' size={35} color={commonStyle.blueColor}/>
        <Text style={styles.item_text}>用人单位及其职工、个体工商户及其雇工、灵活就业人员社会保险费征收</Text>
        <Button
          style={styles.submitBtn}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
        >
          办理
        </Button>
      </View>

      <View style={styles.eachitem}>
        <IconFont name='&#xe63c;' size={35} color={commonStyle.blueColor}/>
        <Text style={styles.item_text}>企业职工基本养老保险费补缴申报</Text>
        <Button
          style={styles.submitBtn}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
        >
          办理
        </Button>
      </View>

      <View style={styles.eachitem}>
        <IconFont name='&#xe644;' size={35} color={commonStyle.blueColor}/>
        <Text style={styles.item_text}>企业职工养老保险定期待遇发放信息变更申报</Text>
        <Button
          style={styles.submitBtn}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
        >
          办理
        </Button>
      </View>
      </View>
      {/* <Button
          style={styles.submitBtn}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
          type="theme"
        >
          点击此处办理后跳转到外部链接
        </Button> */}
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    marginTop:31,
  },  
  eachitem:{
    backgroundColor:'#fff',
    marginHorizontal:15,
    borderRadius: 10,
    flexDirection:'row',
    // justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
    paddingLeft:14,
    marginBottom:14,
  },
  item_text:{
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: "#3a3a3a",
    width:194,
    marginLeft:10,
    marginRight:24,
  },
  submitBtn: {
    width: 57,
    height: 23,
    borderRadius: 4,
    borderColor: commonStyle.blueColor,
    backgroundColor: commonStyle.blueColor,
    marginLeft:20,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#fff',
  },
})
export default SocialService
