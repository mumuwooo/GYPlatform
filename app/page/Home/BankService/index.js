import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Popover } from 'teaset'
import { Touchable, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect()
class BankService extends Component {
  goToDetail = index => {
    switch (index) {
      case 1:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'FinanceDemandForm' })
        )
        break
      case 2:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'FinanceGuaranteeForm' })
        )
        break
      case 3:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'BankConnect' })
        )
        break
      default:
        break
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Popover
          style={styles.content_block}
          arrow="topLeft"
          paddingCorner={45}
        >
          <View style={styles.item_row}>
            <Touchable
              style={styles.item_each}
              onPress={() => this.goToDetail(1)}
            >
              <IconFont
                name="&#xe643;"
                size={22}
                color={commonStyle.oceanColor}
              />
              <Text style={styles.icon_text}>融资需求登记</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.goToDetail(2)}
            >
              <IconFont
                name="&#xe62f;"
                size={22}
                color={commonStyle.oceanColor}
              />
              <Text style={styles.icon_text}>融资担保申请</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.goToDetail(3)}
            >
              <IconFont
                name="&#xe634;"
                size={22}
                color={commonStyle.oceanColor}
              />
              <Text style={styles.icon_text}>银行直通车</Text>
            </Touchable>
          </View>
        </Popover>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
  },
  content_block: {
    backgroundColor: '#e9e9e9',
    width: width * 0.9,
    paddingHorizontal: 13,
    paddingVertical: 20,
  },
  item_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item_each: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: '#6a6a6a',
    marginLeft: 4,
  },
})

export default BankService
