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
class FinanceGuaranteesList extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      isModalShow:false,
      modalContent: null,
    }
  }

  renderNavigationBar() {
    return <NavBar title="融资担保申请表" />
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
          <Text>行业类型: <Text style={styles.blockContent_text}>{item.industryType}</Text></Text>
          <Text>贷款金额(万元): <Text style={styles.blockContent_text}>{item.loanAmount}</Text></Text>
          <Text>资金用途: <Text style={styles.blockContent_text}>{item.financePurpose}</Text></Text>
          <Text>期限: <Text style={styles.blockContent_text}>{item.deadline}</Text></Text>
          <Text>还款来源: <Text style={styles.blockContent_text}>{item.repaySource}</Text></Text>
          <Text>反担措施: <Text style={styles.blockContent_text}>{item.reverseGuarantee}</Text></Text>
          <Text>联系电话: <Text style={styles.blockContent_text}>{item.phoneNUm}</Text></Text>
        </View>
        <View style={styles.blockFooter}>
          <View style={styles.leftLabel}>
            <Text>{item.enterpriseName}</Text>
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
      financeGuarantees,
    } = userinfo
    console.log("financeGuarantees", financeGuarantees);
    return (
      <View>
        <FlatList
          data={financeGuarantees}
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

export default FinanceGuaranteesList
