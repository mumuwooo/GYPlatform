import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native'
import moment from 'moment'
import { Col, Row, Grid} from 'react-native-easy-grid'
import { connect } from 'react-redux'
import { NavigationBar, NavigationPage } from 'teaset'
import { Icon, Steps, WingBlank } from '@ant-design/react-native';
import { Touchable, ModalView, IconFont, NavBar } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
const Step = Steps.Step;

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window')


@connect(({ app, user }) => ({ app, user }))
class FinanceDemandsList extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      isModalShow:false,
      modalContent: null,
    }
  }

  renderNavigationBar() {
    return <NavBar title="融资需求登记表" />
  }


  navigateTo(routeName, params) {
    this.props.dispatch(NavigationActions.navigate({ routeName, params }))
  }

  handleCheckDetail= item => {
    console.log('========handleCheckDetail============================');
    console.log(item);
    console.log('====================================');
    this.setState({ isModalShow: true, modalContent: item.procedureDetails})
  }
  hideModal = () => {
    this.setState({ isModalShow: false })
  }
  _renderItemView = ({ item, index }) => (
    // return(
      <View style={styles.block}>
        <View style={styles.blockTitle}>
          <View style={styles.leftLabel}>
            <Text style={styles.leftLabel_name}>{item.contact}</Text>
          </View>
          <Touchable onPress={()=>this.handleCheckDetail(item)}>
            <View style={styles.rightLabel} >
              <Text>查看申请进度 
              <IconFont
                  name="&#xe6eb;"
                  size={commonStyle.h2Size}
                  style={{ color: commonStyle.h2Color }}
                />
              </Text>
            </View>
          </Touchable> 
        </View>
        <View style={styles.blockContent}>
          <Text>企业名称: <Text style={styles.blockContent_text}>{item.companyName}</Text></Text>
          <Text>行业类型: <Text style={styles.blockContent_text}>{item.industryType}</Text></Text>
          <Text>主营业务: <Text style={styles.blockContent_text}>{item.majorBusiness}</Text></Text>
          <Text>统一社会信用代码: <Text style={styles.blockContent_text}>{item.enterpriseKey}</Text></Text>
          <Text>注册资金: <Text style={styles.blockContent_text}>{item.registerAssets}</Text></Text>
          <Text>总资产: <Text style={styles.blockContent_text}>{item.totalAssets}</Text></Text>
          <Text>上年收入: <Text style={styles.blockContent_text}>{item.incomeLastYear}</Text></Text>
          <Text>融资金额: <Text style={styles.blockContent_text}>{item.financeAmount}</Text></Text>
          <Text>融资方式: <Text style={styles.blockContent_text}>{item.financeMethod}</Text></Text>
          <Text>融资用途: <Text style={styles.blockContent_text}>{item.financePurpose}</Text></Text>
          <Text>流动资产: <Text style={styles.blockContent_text}>{item.floatingAssets}</Text></Text>
          <Text>总负债: <Text style={styles.blockContent_text}>{item.totalOwes}</Text></Text>
          <Text>流动负债: <Text style={styles.blockContent_text}>{item.floatingOwes}</Text></Text>
          <Text>民间借款余额: <Text style={styles.blockContent_text}>{item.owePeopleSaved}</Text></Text>
          <Text>银行贷款余额: <Text style={styles.blockContent_text}>{item.oweBankSaved}</Text></Text>
          <Text>预计融资时间: <Text style={styles.blockContent_text}>{item.financeTimeExpected}</Text></Text>
          <Text>贷款银行: <Text style={styles.blockContent_text}>{item.renterBank}</Text></Text>
          <Text>抵押物估值: <Text style={styles.blockContent_text}>{item.valueOfPawn}</Text></Text>
          <Text>抵押物类型: <Text style={styles.blockContent_text}>{item.pawnCategory}</Text></Text>
          <Text>融资进展情况: <Text style={styles.blockContent_text}>{item.financeProcess}</Text></Text>
          <Text>联挂责任部门: <Text style={styles.blockContent_text}>{item.department}</Text></Text>
        </View>
        <View style={styles.blockFooter}>
          <View style={styles.leftLabel}>
            <Text>{item.companyName}</Text>
          </View>
          <View style={styles.rightLabel}>
            <Text style={styles.rightLabel_time}>{moment(item.createdTime).format('YYYY-MM-DD')}</Text>
          </View>
        </View>
      </View>
    )
  // }


  renderPage() {
    const { modalContent } = this.state
    const {userinfo} = this.props.user
    const {
      financeDemands,
    } = userinfo
    console.log("financeDemands", financeDemands);
    return (
      <View>
        <FlatList
          data={financeDemands}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItemView}
          ListEmptyComponent={<Text>暂无数据</Text>}
          showsVerticalScrollIndicator={false}
          enabled
        />
        <ModalView
          isShow={this.state.isModalShow}
          hideModal={this.hideModal}
          contentHeight={360}
          contentStyle={styles.modal_content}
          title="申请进度"
        >
          <ScrollView
            style={{ height: 150 }}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ marginTop: 60 }}>
              <WingBlank size="lg">
                {modalContent&&modalContent.length>0?<Steps size="small" current={1} direction="vertical">
                  {modalContent.map((item, index) => (
                    <Step
                      current={0}
                      key={index}
                      title={
                        <View>
                          <Text>{item.content}</Text>
                          <Text>{item.procTime}</Text>
                        </View>
                      }
                      status='finish'
                    />
                  ))}
                </Steps>:<Text>抱歉, 暂无进度</Text>}
              </WingBlank>
            </View>
        </ScrollView>
      </ModalView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block:{
    // marginTop: 10,
    flex: 1,
    // borderRadius: 4,
    paddingHorizontal:5,
    paddingVertical:8,
    borderBottomWidth:1,
    borderBottomColor: '#d2d2d2',
    backgroundColor: '#fff',
  },
  blockTitle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:4,
    // borderBottomWidth:1,
    // borderBottomColor: '#eee',
  },
  blockContent:{
    padding: 4,
  },
  blockFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:4,
    // borderTopWidth:1,
    // borderTopColor: '#eee',
  },
  leftLabel:{
    alignSelf: 'flex-start',
  },
  leftLabel_name: {
    fontSize:20,
    color:'#333',
  },
  rightLabel:{
    alignSelf: 'flex-end',
    display:"flex",
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  rightLabel_time: {
    color:'#e0161b'
  },
  blockContent_text: {
    color:'#333',
  },
})

export default FinanceDemandsList
