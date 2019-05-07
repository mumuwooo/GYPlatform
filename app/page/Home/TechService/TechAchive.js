import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage,} from 'teaset'
import { Divider, NavBar, IconFont,Button, Touchable } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class ProjectReport extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

 
  renderNavigationBar() {
    return <NavBar title="科技成果服务" />
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
        <View style={styles.top}>
          <ImageBackground source={require('../../../assets/images/tech_bg.png')} style={styles.top_imageBg}>
            <View style={styles.top_text}>
                <Text style={styles.text_title}>服务指南</Text>
                <Text style={styles.text_eng}>SERVICE INFORMATION</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.content}>
       
        <Touchable style={styles.eachitem} onPress={()=>this.handleSubmit(1)}>
          <View style={styles.item_left}>
          <IconFont name='&#xe657;' size={35} color={commonStyle.pinkColor}/>
          <Text style={styles.item_text}>在线成果定制</Text>
          </View>
          <IconFont name='&#xe6eb;' size={19} style={styles.item_right}/>          
        </Touchable>
  
        <Touchable style={styles.eachitem} onPress={()=>this.handleSubmit(2)}>
          <View style={styles.item_left}>
          <IconFont name='&#xe645;' size={35} color={commonStyle.pinkColor}/>
          <Text style={styles.item_text}>高校合作直通车</Text>
          </View>
          <IconFont name='&#xe6eb;' size={19} style={styles.item_right}/>          
        </Touchable>

        <Touchable style={styles.eachitem} onPress={()=>this.handleSubmit(3)}>
          <View style={styles.item_left}>
          <IconFont name='&#xe649;' size={35} color={commonStyle.pinkColor}/>
          <Text style={styles.item_text}>在线成果库</Text>
          </View>
          <IconFont name='&#xe6eb;' size={19} style={styles.item_right}/>          
        </Touchable>
        </View>
      </View>
  
    )
  }
  }
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f1f1f1'
  },
  top_imageBg:{
    width,
    height:153,
    alignItems:'center',
    justifyContent:'center',
    
  },
  top_text:{
    justifyContent:'center',
    alignItems:'center',
  },
  text_title:{
    color:'#fff',
    fontFamily: commonStyle.PFmedium,
    fontSize: commonStyle.hSize,
    marginBottom:9,
  },
  text_eng:{
    fontFamily: commonStyle.PFregular,
    fontSize: 8,
    color: "#ffffff"
  },
  content:{
    marginTop:24,
  },  
  eachitem:{
    backgroundColor:'#fff',
    marginHorizontal:15,
    borderRadius: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:16,
    alignItems:'center',
    paddingVertical:10,
    marginBottom:14,
  },
  item_text:{
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: "#3a3a3a",
    width:210,
    marginLeft:10,
    marginRight:24,
  },
  item_left:{
    flexDirection:'row',
    alignItems:'center',
  },
  item_right:{
    color:commonStyle.h2Color,
  },
})
export default ProjectReport
