import React from 'react'
import { ScrollView, StyleSheet, View, Dimensions, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Toast, NavigationBar, NavigationPage, Button } from 'teaset'
import { Divider, NavBar, IconFont, Touchable } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ forms }) => ({ forms }))
class ProjectCoordinateForm extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      progress: 1, //  1信息登记 2联系方式
      middlePosition:0,
      // [Display(Name = "项目名称")]
      ProjectName: '',
      // [Display(Name = "业主单位")]
      CompanyName: '',
      // [Display(Name = "联系人")]
      Contact: '',
      // [Display(Name = "联系人电话")]
      PhoneNum: '',
      // [Display(Name = "所属行业")]
      IndustryType: '',
      // [Display(Name = "项目总投资")]
      TotalFinance: '',
      // [Display(Name = "建设地址")]
      BuildingLoaction: '',
      // [Display(Name = "开工日期")]
      // [DataType(DataType.Date)]
      StartDateTime: '',
      // [Display(Name = "建成日期")]
      // [DataType(DataType.Date)]
      PlanDateTime: '',
      // [Display(Name = "主要建设内容及规模")]
      MajorBuildingContent: '',
      // [Display(Name = "工程形象进度")]
      BuildingProcess: '',
      // [Display(Name ="办理责任人")]
      Responsible: '',
      // [Display(Name ="办理部门")]
      Department: '',
      // [Display(Name = "存在困难")]
      Difficultyies: '',
    }
  }
  componentWillMount() {
    if (!window._userToken) {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'Personal' }))
      Toast.stop('请先登陆')
    }
  }

  renderNavigationBar() {
    return <NavBar title="建设项目协调服务" />
  }
  gotoNext = () => {
    this.refs.scrollContainer.scrollTo({x:0,y:0,animated:true})
    let { progress } = this.state
    if (progress >= 4) {
      this.handleSubmit()
    } else {
      progress++
      this.setState({ progress })
    }
  }

  gotoLast = () => {
    this.refs.scrollContainer.scrollTo({x:0,y:0,animated:true})
    let { progress } = this.state
    progress--
    this.setState({ progress })
  }
  handleProgress = index => {
    this.setState({ progress: index })
  }

  handleSubmit = () => {
    dispatch({ type: 'forms/postProjectCoordinateForm', payload: this.state })
  }
  renderPage() {
    const { progress } = this.state
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
              1
            </Text>
            <IconFont
              name="&#xe6eb;"
              size={15}
              style={{
                marginRight: 5,
                marginLeft: 5,
                color: commonStyle.h2Color,
              }}
            />
            <Text
              style={
                progress === 2
                  ? styles.topText
                  : [styles.topText, styles.topText2]
              }
              onPress={() => this.handleProgress(2)}
            >
              2
            </Text>
            <IconFont
              name="&#xe6eb;"
              size={15}
              style={{
                marginRight: 5,
                marginLeft: 5,
                color: commonStyle.h2Color,
              }}
            />
            <Text
              style={
                progress === 3
                  ? styles.topText
                  : [styles.topText, styles.topText2]
              }
              onPress={() => this.handleProgress(3)}
            >
              3
            </Text>
            <IconFont
              name="&#xe6eb;"
              size={15}
              style={{
                marginRight: 5,
                marginLeft: 5,
                color: commonStyle.h2Color,
              }}
            />
            <Text
              style={
                progress === 4
                  ? styles.topText
                  : [styles.topText, styles.topText2]
              }
              onPress={() => this.handleProgress(4)}
            >
              4
            </Text>
          </View>
            <ScrollView
              ref="scrollContainer"
            >
            <View>
          {progress === 1 ? (
            <View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入项目名称"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ ProjectName: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.ProjectName}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入业主单位"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ CompanyName: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.CompanyName}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入所属行业"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ IndustryType: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.IndustryType}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入项目总投资"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ TotalFinance: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.TotalFinance}
                />
              </View>
                <View
                  onLayout={layout=>{
                    console.log("the first layout excuted");
                    this.setState({middlePosition:layout.nativeEvent.layout.y})
                  }}
                  style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入建设地址"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ BuildingLoaction: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.middlePosition,animated:true})
                  }}
                  value={this.state.BuildingLoaction}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入开工日期"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ StartDateTime: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.middlePosition,animated:true})
                  }}
                  value={this.state.StartDateTime}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入建成日期"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ PlanDateTime: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.middlePosition,animated:true})
                  }}
                  value={this.state.PlanDateTime}
                />
              </View>
            </View>
          ) : progress === 2 ? (
            <View style={styles.next_content}>
              <Text style={styles.next_title}>主要建设内容及规模</Text>
              <TextInput
                maxLength={140}
                placeholder="请输入内容，不超过140字"
                underlineColorAndroid="transparent"
                multiline
                style={styles.userInput}
                onChangeText={MajorBuildingContent =>
                  this.setState({ MajorBuildingContent })
                }
                value={this.state.MajorBuildingContent}
              />
            </View>
          ) : progress === 3 ? (
            <View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入联系人"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ Contact: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.Contact}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入联系人电话"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ PhoneNum: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.PhoneNum}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入工程形象进度"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ BuildingProcess: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.BuildingProcess}
                />
              </View>
            </View>
          ) : (
            <View style={styles.next_content}>
              <Text style={styles.next_title}>存在困难</Text>
              <TextInput
                maxLength={140}
                placeholder="请输入内容，不超过140字"
                underlineColorAndroid="transparent"
                multiline
                style={styles.userInput}
                onChangeText={Difficultyies => this.setState({ Difficultyies })}
                value={this.state.Difficultyies}
              />
            </View>
          )}
        </View>
        <View style={styles.buttons}>
          {progress != 1 ? (
            <Button
              style={[styles.submitBtn, styles.submitBtn2]}
              titleStyle={styles.submitText}
              title="上一步"
              onPress={this.gotoLast}
            />
          ) : null}

          <Button
            style={styles.submitBtn}
            titleStyle={styles.submitText}
            title={progress === 4 ? '提交' : '下一步'}
            onPress={this.gotoNext}
          />
        </View>
      </ScrollView>
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
    paddingLeft: 15,
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
    paddingLeft: 15,
  },
  buttons: {
    width: width,
    height: height+100,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  submitBtn: {
    width: (width - 145) / 2,
    height: 45,
    borderRadius: 4,
    backgroundColor: commonStyle.themeColor,
    marginTop: 25,
    borderColor: commonStyle.themeColor,
    alignItems: 'center',
  },
  submitBtn2: {
    backgroundColor: commonStyle.bluebuttonColor,
    borderColor: commonStyle.bluebuttonColor,
    marginRight: 42,
  },
  submitText: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h1Size,
    color: '#fffefe',
  },
  next_content: {
    width: width * 0.9,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingVertical: 36,
    paddingHorizontal: 29,
  },
  next_title: {
    fontFamily: commonStyle.PFregular,
    fontSize: 15,
    color: '#3a3a3a',
  },
  userInput: {
    marginTop: 25,
    padding: 15,
    textAlignVertical: 'top',
    backgroundColor: commonStyle.bgColor,
    width: '100%',
    height: 270,
    alignSelf: 'center',
  },
})
export default ProjectCoordinateForm
