import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Popover } from 'teaset'
import { connect } from 'react-redux'

import { Touchable, IconFont } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'

const { width, height } = Dimensions.get('window')

class PolicyService extends Component {
  navigateTo(routeName, params) {
    this.props.dispatch(NavigationActions.navigate({ routeName, params }))
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
              onPress={() => {
                this.navigateTo('Libraries')
              }}
            >
              <IconFont
                name="&#xe635;"
                size={22}
                color={commonStyle.purpleColor}
              />
              <Text style={styles.icon_text}>文件库</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => {
                this.navigateTo('PoliticTopics')
              }}
            >
              <IconFont
                name="&#xe639;"
                size={22}
                color={commonStyle.purpleColor}
              />
              <Text style={styles.icon_text}>专题政策</Text>
            </Touchable>

            <Touchable
              style={styles.item_each}
              onPress={() => {
                this.navigateTo('LawRules')
              }}
            >
              <IconFont
                name="&#xe637;"
                size={22}
                color={commonStyle.purpleColor}
              />
              <Text style={styles.icon_text}>法律法规</Text>
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

export default connect()(PolicyService)
