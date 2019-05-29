import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Popover, Toast } from 'teaset'
import { connect } from 'react-redux'
import { Touchable, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect()
class CompanyService extends Component {
  gotoDetail = index => {
    switch (index) {
      case 1:
        Toast.message('暂无权限')
        break
      case 2:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'FactorGuarantee' })
        )
        break
      case 3:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'SocialService' })
        )
        break
      case 4:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'TaxService' })
        )
        break
      case 5:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'AdmApproval' })
        )
        break
      case 6:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'FourIdentification' })
        )
        break
      case 7:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'LegalAid' })
        )
        break
      case 8:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'DemandForm' })
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
          paddingCorner={44}
        >
          <View style={styles.item_row}>
            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(1)}
            >
              <IconFont
                name="&#xe624;"
                size={22}
                color={commonStyle.blueColor}
              />
              <Text style={styles.icon_text}>企业运行分析</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(2)}
            >
              <IconFont
                name="&#xe62c;"
                size={22}
                color={commonStyle.blueColor}
              />
              <Text style={styles.icon_text}>要素保障服务</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(3)}
            >
              <IconFont
                name="&#xe628;"
                size={22}
                color={commonStyle.blueColor}
              />
              <Text style={styles.icon_text}>社保服务直通车</Text>
            </Touchable>
          </View>

          <View style={styles.item_row}>
            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(4)}
            >
              <IconFont
                name="&#xe626;"
                size={22}
                color={commonStyle.blueColor}
              />
              <Text style={styles.icon_text}>税务服务直通车</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(5)}
            >
              <IconFont
                name="&#xe625;"
                size={22}
                color={commonStyle.blueColor}
              />
              <Text style={styles.icon_text}>行政审批事项</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(6)}
            >
              <IconFont
                name="&#xe62a;"
                size={22}
                color={commonStyle.blueColor}
              />
              <Text style={styles.icon_text}>四上企业申报</Text>
            </Touchable>
          </View>

          <View style={[styles.item_row, styles.item_row2]}>
            <Touchable
              style={[styles.item_each, styles.item_each2]}
              onPress={() => this.gotoDetail(7)}
            >
              <IconFont
                name="&#xe627;"
                size={22}
                color={commonStyle.blueColor}
              />
              <Text style={styles.icon_text}>法律援助服务</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(8)}
            >
              <IconFont
                name="&#xe62b;"
                size={22}
                color={commonStyle.blueColor}
              />
              <Text style={styles.icon_text}>我要诉求</Text>
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
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "#d5d5d5",
    width: width * 0.9,
    // borderRadius:5,
    paddingHorizontal: 13,
    paddingVertical: 20,
  },
  item_row: {
    flexDirection: 'row',
    // justifyContent:'space-around',
    marginBottom: 12,
  },
  item_row2: {
    marginBottom: 0,
    // justifyContent:'flex-start',
  },
  item_each: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_each2: {
    flex: 0.5,
  },
  icon_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h4Size,
    color: '#6a6a6a',
    marginLeft: 4,
  },
})

export default CompanyService
