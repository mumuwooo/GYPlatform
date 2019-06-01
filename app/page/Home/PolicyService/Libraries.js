import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage, SearchInput } from 'teaset'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import {
  Divider,
  NavBar,
  IconFont,
  Button,
  Touchable,
} from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import NewsBlock from './NewsBlock'

const { width, height } = Dimensions.get('window')

@connect(({ policyService }) => ({ policyService }))
class Libraries extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      sortType: 1, // 1 相关性  2 时间
    }
  }

  renderNavigationBar() {
    return <NavBar title="文件库" />
  }
  handleSortType = type => {
    this.setState({ sortType: type })
  }
  handleSubmit = () => {
    alert('搜索中...')
  }
  renderStartDatePicker() {
    const nowDate = moment(new Date()).format('YYYY-MM-DD')
    return (
      <DatePicker
        style={{ width: 96 }}
        date={this.state.startDate}
        mode="date"
        placeholder="起始日期"
        format="YYYY-MM-DD"
        minDate="2009-01-01"
        maxDate={nowDate}
        confirmBtnText="确定"
        cancelBtnText="取消"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: -2,
            // top: 14,
            // marginLeft: 0,
            width: 15,
            height: 15,
          },
          dateInput: {
            // marginLeft: 16,
            height: 25,
            borderRadius: 3,
            padding: 0,
          },
          placeholderText: {
            fontFamily: commonStyle.PFregular,
            fontSize: commonStyle.h5Size,
            color: '#bcbcbc',
          },
          dateText: {
            fontFamily: commonStyle.PFregular,
            fontSize: commonStyle.h5Size,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({ startDate: date })
        }}
      />
    )
  }

  renderEndDatePicker() {
    const nowDate = moment(new Date()).format('YYYY-MM-DD')
    return (
      <DatePicker
        style={{ width: 96 }}
        date={this.state.endDate}
        mode="date"
        placeholder="结束日期"
        format="YYYY-MM-DD"
        minDate="2014-01-01"
        maxDate={nowDate}
        confirmBtnText="确定"
        cancelBtnText="取消"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: -2,
            // top: 14,
            // marginLeft: 0,
            width: 15,
            height: 15,
          },
          dateInput: {
            // marginLeft: 16,
            height: 25,
            borderRadius: 3,
            padding: 0,
          },
          placeholderText: {
            fontFamily: commonStyle.PFregular,
            fontSize: commonStyle.h5Size,
            color: '#bcbcbc',
          },
          dateText: {
            fontFamily: commonStyle.PFregular,
            fontSize: commonStyle.h5Size,
          },

          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({ endDate: date })
        }}
      />
    )
  }
  renderPage() {
    const { sortType } = this.state
    const { libList } = this.props.policyService
    return (
      <ScrollView style={styles.container}>
        <View style={styles.top}>
          <SearchInput style={styles.searchLine} placeholder="输入关键词搜索" />
          <View style={styles.rowItem}>
            <Text style={styles.itemTitle}>发布日期</Text>
            {this.renderStartDatePicker()}
            <View style={styles.date_line} />
            {this.renderEndDatePicker()}
          </View>

          <View style={styles.rowItem}>
            <Text style={styles.itemTitle}>排序方式</Text>
            <Button
              style={
                sortType === 1
                  ? [styles.button_type, styles.button_type_active]
                  : styles.button_type
              }
              textStyle={
                sortType === 1
                  ? [styles.button_text, styles.button_text_active]
                  : styles.button_text
              }
              onPress={() => this.handleSortType(1)}
            >
              按相关度
            </Button>
            <Button
              style={
                sortType === 2
                  ? [styles.button_type, styles.button_type_active]
                  : styles.button_type
              }
              textStyle={
                sortType === 2
                  ? [styles.button_text, styles.button_text_active]
                  : styles.button_text
              }
              onPress={() => this.handleSortType(2)}
            >
              按时间
            </Button>
          </View>

          <Button
            style={styles.button_submit}
            textStyle={styles.submit_text}
            onPress={this.handleSubmit}
          >
            搜索
          </Button>
        </View>
        <View style={styles.content}>
          {libList &&
            libList.map((item, index) => (
              <NewsBlock data={item} index={index} key={index} />
            ))}
          <Divider type="bottomSpace" />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  top: {
    alignItems: 'center',
  },
  searchLine: {
    width: 299,
    height: 30,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 3,
    marginBottom: 19,
    marginTop: 32,
  },
  rowItem: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 40,
    alignItems: 'center',
    width: 299,
  },
  itemTitle: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: '#3a3a3a',
    marginRight: 9,
  },
  date_line: {
    width: 25,
    height: 1,
    backgroundColor: '#a2a2a2',
    marginHorizontal: 13,
  },
  button_type: {
    width: 88,
    height: 30,
    borderRadius: 3,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    marginRight: 14,
  },
  button_type_active: {
    backgroundColor: '#ffe5e6',
    borderColor: commonStyle.themeColor,
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: '#3a3a3a',
  },
  button_text_active: {
    color: commonStyle.themeColor,
  },
  button_submit: {
    width: 77,
    height: 29,
    borderRadius: 3,
    backgroundColor: commonStyle.themeColor,
    borderColor: commonStyle.themeColor,
    marginBottom: 24,
  },
  submit_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#ffffff',
  },
  content: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

// const data=[
//   {title:'关于印发《昭化区2019年度特种设备日常监督检查计划及重点监督检查单位目录》的通知',
//   source:'广元市质量技术监督局昭化区分局',
//   date:'2019-04-21'
// },
// {title:'关于印发《昭化区2019年度特种设备日常监督检查计划及重点监督检查单位目录》的通知',
//   source:'广元市质量技术监督局昭化区分局',
//   date:'2019-03-20'
// },
// {title:'关于印发《昭化区2019年度特种设备日常监督检查计划及重点监督检查单位目录》的通知',
//   source:'广元市质量技术监督局昭化区分局',
//   date:'2019-03-08'
// },
// {title:'关于印发《昭化区2019年度特种设备日常监督检查计划及重点监督检查单位目录》的通知',
//   source:'广元市质量技术监督局昭化区分局',
//   date:'2019-02-21'
// },
// {title:'关于印发《昭化区2019年度特种设备日常监督检查计划及重点监督检查单位目录》的通知',
//   source:'广元市质量技术监督局昭化区分局',
//   date:'2019-02-21'
// },
// {title:'关于印发《昭化区2019年度特种设备日常监督检查计划及重点监督检查单位目录》的通知',
//   source:'广元市质量技术监督局昭化区分局',
//   date:'2019-02-21'
// },
// {title:'关于印发《昭化区2019年度特种设备日常监督检查计划及重点监督检查单位目录》的通知',
//   source:'广元市质量技术监督局昭化区分局',
//   date:'2019-02-21'
// },
// ]
export default Libraries
