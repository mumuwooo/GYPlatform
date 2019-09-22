import React from 'react'
import { StyleSheet, View, Dimensions, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage, PullPicker, Button } from 'teaset'
import { Divider, NavBar, IconFont, Touchable } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class FinanceGuaranteeForm extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      progress: 1, //  1信息登记 2联系方式
      //[Display(Name = "企业名称")]
      EnterpriseName:'',
      //[Display(Name = "行业类型")]
      IndustryType:'',
      //[Display(Name = "贷款金额(万元)")]
      LoanAmount:'',
      //[Display(Name = "资金用途")]
      FinancePurpose:'',
      //[Display(Name = "期限")]
      Deadline:'',
      //[Display(Name = "还款来源")]
      RepaySource:'',
      //[Display(Name = "反担措施")]
      ReverseGuarantee:'',
      //[Display(Name = "联系人")]
      Contact:'',
      //[Display(Name = "联系电话")]
      PhoneNUm:'',
    }
  }
  componentWillMount() {
    if (!window._userToken) {
      this.props.dispatch(NavigationActions.navigate({ routeName: 'Personal' }))
      Toast.stop('请先登陆')
    }
  }

  renderNavigationBar() {
    return <NavBar title="融资担保申请" />
  }
  gotoNext = () => {
    let { progress } = this.state
    if (progress >= 2) {
      this.handleSubmit()
    } else {
      progress++
      this.setState({ progress })
    }
  }

  gotoLast = () => {
    this.setState({ progress: 1 })
  }
  // 显示需求列表
  handleTypeSelect = () => {
    const typeList = [
      { Name: '制造业' },
      { Name: '制造业' },
      { Name: '制造业' },
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
        this.setState({ typeName: item })
      }
    )
  }
  handleLoansSelect = () => {
    const typeList = [{ Name: '50万' }, { Name: '100万' }, { Name: '150万' }]
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
        this.setState({ loans: item })
      }
    )
  }
  handleGuaranteeSelect = () => {
    const typeList = [
      { Name: '企业所有定着物' },
      { Name: '企业所有定着物' },
      { Name: '企业所有定着物' },
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
        this.setState({ gurantName: item })
      }
    )
  }
  handleProgress = index => {
    this.setState({ progress: index })
  }

  handleSubmit = () => {
    dispatch({ type: 'forms/postFinanceGuararnteeForm', payload: this.state })
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
              1.信息登记
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
              2.联系方式
            </Text>
          </View>
          {progress === 1 ? (
            <View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入企业名称"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ EnterpriseName: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.EnterpriseName}
                />
              </View>

              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入行业类型"
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
                  placeholder="请输入贷款金额（万元）"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ LoanAmount: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.LoanAmount}
                />
              </View>

              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入贷款用途"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
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
                  placeholder="请输入期        限"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ Deadline: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.Deadline}
                />
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入还款来源"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ RepaySource: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.RepaySource}
                />
              </View>
              <View style={styles.eachItem}>
                <TextInput
                  style={styles.item_input}
                  placeholder="请输入反担措施"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ ReverseGuarantee: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.ReverseGuarantee}
                />
              </View>
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
                  placeholder="请输入联系电话"
                  underlineColorAndroid="transparent"
                  keyboardType="phone-pad"
                  onChangeText={text => {
                    this.setState({ PhoneNUm: text })
                  }}
                  onBlur={() => {}}
                  value={this.state.PhoneNUm}
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
            title={progress === 2 ? '提交' : '下一步'}
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
    flexDirection: 'row',
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
export default FinanceGuaranteeForm
