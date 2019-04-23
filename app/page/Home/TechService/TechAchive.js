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
import { Divider, Button } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import NavBar from '../../../components/NavBar'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class ProjectReport extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

 
  renderNavigationBar() {
    return <NavBar title="项目申报须知" />
  }

  handleSubmit=(index)=>{
    switch(index){
        case 1:
        this.props.dispatch(NavigationActions.navigate({routeName:'OnlineAchiveForm'}))
        break;
        case 2:
        this.props.dispatch(NavigationActions.navigate({routeName:'WebviewLinks',params:{title:'高校合作直通车'}}))
        break;
        case 3:
        this.props.dispatch(NavigationActions.navigate({routeName:'WebviewLinks',params:{title:'在线成果库'}}))
        break;
        default:
        break;
    }
  }
  renderPage() {
    return (
      <View style={styles.container}>
      <Text>项目申报须知</Text>
      <Button onPress={()=>this.handleSubmit(1)}>在线成果定制</Button>
      <Button onPress={()=>this.handleSubmit(2)}>高校合作直通车</Button>
      <Button onPress={()=>this.handleSubmit(3)}>在线成果库</Button>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button_save: {
    marginTop: 25,
    width: 310,
    height: 50,
    borderRadius: 4,
    borderColor: commonStyle.themeColor,
    backgroundColor: commonStyle.themeColor,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h1Size,
    lineHeight: 35,
    color: '#fffefe',
  },
})
export default ProjectReport
