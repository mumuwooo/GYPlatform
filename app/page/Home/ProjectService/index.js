import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Popover } from 'teaset'
import { connect } from 'react-redux'
import { Touchable, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

@connect()
class ProjectService extends Component {
  goToDetail = index => {
    switch (index) {
      case 1:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'OnlineInvest' })
        )
        break
      case 2:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'ProjectReport' })
        )
        break
      case 3:
        this.props.dispatch(
          NavigationActions.navigate({ routeName: 'ProjectCoordinateForm' })
        )
        break
      default:
        break
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Popover style={styles.content_block} arrow="top" paddingCorner={16}>
          <View style={styles.item_row}>
            <Touchable
              style={styles.item_each}
              onPress={() => this.goToDetail(1)}
            >
              <IconFont
                name="&#xe631;"
                size={22}
                color={commonStyle.orangeColor}
              />
              <Text style={styles.icon_text}>投资在线审批服务</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => this.goToDetail(3)}
            >
              <IconFont
                name="&#xe62d;"
                size={22}
                color={commonStyle.orangeColor}
              />
              <Text style={styles.icon_text}>建设项目协调服务</Text>
            </Touchable>
          </View>
          <View style={styles.item_row}>
            <Touchable
              style={styles.item_each}
              onPress={() => this.goToDetail(2)}
            >
              <IconFont
                name="&#xe629;"
                size={22}
                color={commonStyle.orangeColor}
              />
              <Text style={styles.icon_text}>项目申报</Text>
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
    // marginBottom:12,
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

export default ProjectService
