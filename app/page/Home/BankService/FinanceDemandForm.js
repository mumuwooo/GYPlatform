import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage, PullPicker, Button } from 'teaset'
// import ImagePicker from 'react-native-image-picker'
import { Divider, NavBar, IconFont, Touchable } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')
const options = {
  title: '选择图片', 
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照', 
  chooseFromLibraryButtonTitle: '选择照片', 
  customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
  cameraType: 'back',
  mediaType: 'photo',
  videoQuality: 'high', 
  durationLimit: 10, 
  maxWidth: 300,
  maxHeight: 300,
  quality: 0.8, 
  angle: 0,
  allowsEditing: false, 
  noData: false,
  storageOptions: {
      skipBackup: true  
  }
};

@connect(({ user }) => ({ user }))

class FinanceDemandForm extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      progress: 1, //  1信息登记 2联系方式 
      typeName: '请选择行业类型',
      avatarSource:null,
    }
  }

  renderNavigationBar() {
    return <NavBar title="融资需求登记" />
  }

  gotoNext = () => {
    let { progress } = this.state
    if (progress >= 3) {
      this.handleSubmit()
    } else {
      progress++
      this.setState({ progress })
    }
  }

  gotoLast=()=>{
    this.setState({progress:1})
  }
  // 显示需求列表
  handleTypeSelect = () => {
    const typeList=[{Name:'制造业'},{Name:'制造业'},{Name:'制造业'}]
    PullPicker.show(
      '请选择需求类型',
      // this.props.register.schoolList.map(item => item.Name),
      typeList.map(item => item.Name),
      this.state.selectedIndex,
      (item, index) => {
        // const schoolID = this.props.register.schoolList[index].ID
        // this.props.dispatch({
        //   type: 'register/getLevelList',
        //   payload: { School_ID: schoolID, IsCurStation: 1 },
        // })
        this.setState({ typeName: item, })
      }
    )
  }

  handleProgress = index => {
    this.setState({ progress: index })
  }

  handleSubmit = () => {
    alert('提交表单')
  }


 // 选择图片
 selectPhotoTapped = () => {
   console.log('===========ImagePicker=========================');
   console.log(ImagePicker);
   console.log('====================================');
  ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
          console.log('User cancelled photo picker');
      }
      else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
      }
      else {
          let source = { uri: response.uri };

          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({
              avatarSource: source
          })
      }
  })
}
  renderPage() {
    const {
      progress,
      
    } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.topLine}>
            <Text
              style={
                progress === 1
                  ? styles.topText
                  : [styles.topText, styles.topText2]
              }
              onPress={() => this.handleProgress(1)}
            >
              1.信息登记
            </Text>
            <IconFont
              name="&#xe6eb;"
              size={15}
              style={{ marginRight: 5, marginLeft: 5, color:commonStyle.h2Color }}
            />
            <Text
              style={
                progress === 2
                  ? styles.topText
                  : [styles.topText, styles.topText2]
              }
              onPress={() => this.handleProgress(2)}
            >
              2.商业计划书上传
            </Text>
            <IconFont
              name="&#xe6eb;"
              size={15}
              style={{ marginRight: 5, marginLeft: 5, color:commonStyle.h2Color }}
            />
            <Text
              style={
                progress === 3
                  ? styles.topText
                  : [styles.topText, styles.topText2]
              }
              onPress={() => this.handleProgress(3)}
            >
              3.联系方式
            </Text>
          </View>
          {progress === 1 ? 
            <View>
                <View style={styles.eachItem}>
                  <TextInput
                  style={styles.item_input}
                  placeholder="请输入企业名称"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ inputPhone: text })
                  }}
                  onBlur={() => {
                   
                  }}
                  value={this.state.inputPhone}
                />
                </View>

                <View style={styles.eachItem}>
                <Touchable
                  onPress={this.handleTypeSelect}
                  style={styles.school_select}
                >
                  <Text style={styles.school_title}>
                    {this.state.typeName}
                  </Text>
                  <IconFont
                    name="&#xe738;"
                    size={18}
                    style={styles.item_icon}
                  />
                </Touchable>
              </View>

              <View style={styles.eachItem}>
                  <TextInput
                  style={styles.item_input}
                  placeholder="请输入主营业务"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ inputPhone: text })
                  }}
                  onBlur={() => {
                   
                  }}
                  value={this.state.inputPhone}
                />
                </View>

                <View style={styles.eachItem}>
                  <TextInput
                  style={styles.item_input}
                  placeholder="请输入总资产"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ inputPhone: text })
                  }}
                  onBlur={() => {
                   
                  }}
                  value={this.state.inputPhone}
                />
                </View>

                <View style={styles.eachItem}>
                  <TextInput
                  style={styles.item_input}
                  placeholder="请输入融资方式"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ inputPhone: text })
                  }}
                  onBlur={() => {
                   
                  }}
                  value={this.state.inputPhone}
                />
                </View>
            </View>
            : progress===2?
            <View style={styles.next_content}>
                 <Touchable onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 30}]}>
                        { this.state.avatarSource === null ? <Text>选择照片</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource} />
                        }
                    </View>
                </Touchable>
            </View>
            : 
            <View>
              <View style={styles.eachItem}>
              <TextInput
                style={styles.item_input}
                placeholder="请输入联系人"
                underlineColorAndroid="transparent"
                keyboardType="phone-pad"
                onChangeText={text => {
                  this.setState({ inputPhone: text })
                }}
                onBlur={() => {
                 
                }}
                value={this.state.inputPhone}
              />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                style={styles.item_input}
                placeholder="请输入联系电话"
                underlineColorAndroid="transparent"
                keyboardType="phone-pad"
                onChangeText={text => {
                  this.setState({ inputPhone: text })
                }}
                onBlur={() => {
                 
                }}
                value={this.state.inputPhone}
              />
              </View>
              

          </View>
           }
        </View>
        <View style={styles.buttons}>
        {progress!=1?<Button
          style={[styles.submitBtn,styles.submitBtn2]}
          titleStyle={styles.submitText}
          title='上一步'
          onPress={this.gotoLast}
        />:null}

        <Button
          style={styles.submitBtn}
          titleStyle={styles.submitText}
          title={progress === 3 ? '提交' : '下一步'}
          onPress={this.gotoNext}
        />

        </View>
        

        <Divider type="bottomSpace" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: commonStyle.bgColor,
  },
  content: {
    width,
  },
  topLine: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  topText: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: commonStyle.themeColor,
  },
  topText2: {
    color: commonStyle.h2Color,
  },
  eachItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: commonStyle.lineColor,
  },
  item_icon: {
    color: commonStyle.h1Color,
    marginLeft: 12,
    marginRight: 5,
  },
  item_input: {
    width: width * 0.7,
    padding: 0,
    paddingLeft:15,
  },
  item_input2: {
    width: width * 0.5,
  },
  bottom_tip: {
    marginLeft: 12,
    marginTop: 10,
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: commonStyle.h4Color,
  },
  bind_sendCode: {
    position: 'absolute',
    right: 5,
    width: 90,
    height: 30,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: commonStyle.themeColor,
    alignItems: 'center',
  },
  bind_sendCodeText: {
    fontFamily: commonStyle.PFregular,
    fontSize: 12,
    padding: 0,
    color: commonStyle.themeColor,
  },
  item_line: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: commonStyle.lineColor,
    alignItems: 'center',
    marginTop: 10,
  },
  item_line2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  school_select: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  school_title: {
    width: '83%',
    color: '#999999',
    paddingLeft:15,

  },
  buttons:{
    flexDirection:'row'
  },
  submitBtn: {
    width: (width - 145)/2,
    height: 45,
    borderRadius: 4,
    backgroundColor: commonStyle.themeColor,
    marginTop: 25,
    borderColor: commonStyle.themeColor,
    alignItems: 'center',
  },
  submitBtn2:{
    backgroundColor:commonStyle.bluebuttonColor,
    borderColor:commonStyle.bluebuttonColor,
    marginRight:42,
  },
  submitText: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h1Size,
    color: '#fffefe',
  },
  next_content:{
    width:width*0.9,
    backgroundColor:'#fff',
    alignSelf:'center',
    paddingVertical:36,
    paddingHorizontal:29,
  },
  next_title:{
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: "#3a3a3a"
  },  
  userInput: {
    marginTop: 25,
    padding: 15,
    textAlignVertical: 'top',
    backgroundColor: commonStyle.bgColor,
    width:'100%',
    height: 270,
    alignSelf:'center',
  },
})
export default FinanceDemandForm
