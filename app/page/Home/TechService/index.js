import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Popover } from 'teaset'
import { Touchable, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect()
class TechService extends Component {
  gotoDetail = index => {
    switch (index) {
      case 1:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'PatentReport' })
        )
        break
      case 2:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'TechProject' })
        )
        break
      case 3:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'TechAchive' })
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
          arrow="topRight"
          paddingCorner={45}
        >
          <View style={styles.item_row}>
            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(1)}
            >
              <IconFont
                name="&#xe630;"
                size={22}
                color={commonStyle.pinkColor}
              />
              <Text style={styles.icon_text}>专利申报服务</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(2)}
            >
              <IconFont
                name="&#xe62e;"
                size={22}
                color={commonStyle.pinkColor}
              />
              <Text style={styles.icon_text}>科技项目服务</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.gotoDetail(3)}
            >
              <IconFont
                name="&#xe633;"
                size={22}
                color={commonStyle.pinkColor}
              />
              <Text style={styles.icon_text}>科技成果服务</Text>
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

export default TechService
