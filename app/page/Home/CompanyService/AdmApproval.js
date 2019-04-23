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
class AdmApproval extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

 
  renderNavigationBar() {
    return <NavBar title="行政审批须知" />
  }

  handleSubmit=()=>{
    this.props.dispatch(NavigationActions.navigate({routeName:'WebviewLinks',params:{title:'行政审批须知'}}))
  }
  renderPage() {
    return (
      <View style={styles.container}>
      <Text>行政审批须知</Text>
      <Button
          style={styles.button_save}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
          type="theme"
        >
          立即审批
        </Button>
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
export default AdmApproval
