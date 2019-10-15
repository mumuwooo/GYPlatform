import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
  Image,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import {
  Toast,
  NavigationBar,
  NavigationPage,
  PullPicker,
  Button,
} from 'teaset'
import ImagePicker from 'react-native-image-picker'
import { Divider, NavBar, IconFont, Touchable } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import { BASE_URL } from '../../../utils/config'

const { width, height } = Dimensions.get('window')

// @connect(({picture,  financeDemandForm }) => ({picture,  financeDemandForm }))
@connect()
class FinanceDemandForm extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      progress: 1, //  1信息登记 2联系方式

      MajorBusinessLayout:0,
      TotalOwesLayout:0,

      CompanyName: '',
      IndustryType: '请选择行业类型',
      MajorBusiness: '',
      EnterpriseKey: '',
      RegisterAssets: '',
      TotalAssets: '',
      IncomeLastYear: '',
      FinanceAmount: '',
      FinanceMethod: '',
      FinancePurpose: '',
      FloatingAssets: '',
      TotalOwes: '',
      FloatingOwes: '',
      OwePeopleSaved: '',
      OweBankSaved: '',
      FinanceTimeExpected: '',
      RenterBank: '',
      ValueOfPawn: '',
      PawnCategory: '',
      Contact: '',
      Phone: '',
      FinanceProcess: '',
      Department: '',
    }
  }

  componentWillMount() {
    if (!window._userToken) {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'Personal' }))
      Toast.stop('请先登陆')
    }
  }

  renderNavigationBar() {
    return <NavBar title="融资需求登记" />
  }

  getLayout=(layout, viewId)=>{
    let {x,y,width,height} = layout.nativeEvent.layout;
    console.log("get the layout: "+x+" viewId:"+viewId);
    console.log("get the layout: "+y+" viewId:"+viewId);
    console.log("get the layout: "+width+" viewId:"+viewId);
    console.log("get the layout: "+height+" viewId:"+viewId);
  }

  gotoNext = () => {
    this.refs.scrollContainer.scrollTo({x:0,y:0,animated:true})
    let { progress } = this.state
    if (progress >= 5) {
      this.handleSubmit()
    } else {
      progress++
      this.setState({ progress })
    }
    this.forceUpdate();
  }

  gotoLast = () => {
    this.refs.scrollContainer.scrollTo({x:0,y:0,animated:true})
    let { progress } = this.state
    progress--
    this.setState({ progress })
  }
  显示需求列表
  handleTypeSelect = () => {
    const typeList = [
      { Name: '工业' },
      { Name: '商贸服务业' },
      { Name: '农业' },
      { Name: '建筑与房地产业' },
    ]
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
        this.setState({ IndustryType: item })
      }
    )
  }

  handleProgress = index => {
    this.setState({ progress: index })
  }

  handleSubmit = () => {
    dispatch({ type: 'forms/postFinanceDemandForm', payload: this.state })
    console.log('new states', this.state)
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
          <View
          >
          {progress === 1 ? (
            <View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入企业名称"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
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
                  placeholder="统一社会信用代码/注册号"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ EnterpriseKey: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.EnterpriseKey}
                />
              </View>

              <View style={styles.eachItem}>
                <Touchable
                  onPress={this.handleTypeSelect}
                  style={styles.school_select}
                >
                  <Text style={styles.school_title}>
                    {this.state.IndustryType}
                  </Text>
                  <IconFont
                    name="&#xe738;"
                    size={18}
                    style={styles.item_icon}
                  />
                </Touchable>
              </View>

                <View
                  onLayout={layout=>{
                    console.log("the first layout excuted");
                    this.setState({MajorBusinessLayout:layout.nativeEvent.layout.y})
                  }}
                  style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入主营业务"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ MajorBusiness: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.MajorBusinessLayout,animated:true})
                  }}
                  value={this.state.MajorBusiness}
                />
              </View>
                <View
                  style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入注册资金"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ RegisterAssets: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.MajorBusinessLayout,animated:true})
                  }}
                  value={this.state.RegisterAssets}
                />
              </View>
              <View
                  style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入总资产"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ TotalAssets: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.MajorBusinessLayout,animated:true})
                  }}
                  value={this.state.TotalAssets}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入上年收入"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ IncomeLastYear: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.MajorBusinessLayout,animated:true})
                  }}
                  value={this.state.IncomeLastYear}
                />
              </View>
            </View>
          ) : progress === 2 ? (
            <View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入融资金额"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ FinanceAmount: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.FinanceAmount}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入融资方式"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ FinanceMethod: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.FinanceMethod}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入融资用途"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ FinancePurpose: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.FinancePurpose}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入流动资产"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ FloatingAssets: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.FloatingAssets}
                />
              </View>
                <View
                  onLayout={layout=>{
                    console.log(" the second onLayout excuded");
                    this.setState({TotalOwesLayout:layout.nativeEvent.layout.y})
                  }}
                  style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入总负债"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ TotalOwes: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.MajorBusinessLayout,animated:true})
                  }}
                  value={this.state.TotalOwes}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入流动负债"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ FloatingOwes: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.MajorBusinessLayout,animated:true})
                  }}
                  value={this.state.FloatingOwes}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入民间借款余额"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ OwePeopleSaved: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.MajorBusinessLayout,animated:true})
                  }}
                  value={this.state.OwePeopleSaved}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入银行贷款余额"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ OweBankSaved: text })
                  }}
                  onFocus={() => {
                    this.refs.scrollContainer.scrollTo({x:0,y:this.state.MajorBusinessLayout,animated:true})
                  }}
                  value={this.state.OweBankSaved}
                />
              </View>
            </View>
          ) : progress === 3 ? (
            <View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入预计融资时间"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ FinanceTimeExpected: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.FinanceTimeExpected}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入贷款银行"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ RenterBank: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.RenterBank}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入抵押物估值"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ ValueOfPawn: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.ValueOfPawn}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入抵押物类别"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ PawnCategory: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.PawnCategory}
                />
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入联系人"
                  underlineColorAndroid="transparent"
                  // keyboardType="phone-pad"
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
                  placeholder="请输入联系电话"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ Phone: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.Phone}
                />
              </View>
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
  avatar: {
    width,
    height: 200,
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
export default FinanceDemandForm
