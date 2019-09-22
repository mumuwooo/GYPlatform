import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import moment from 'moment'
import { connect } from 'react-redux'
import { commonStyle, NavigationActions } from '../../../utils'
import { Divider, Touchable, IconFont } from '../../../components'

const { width } = Dimensions.get('window')

const NewsBlock = ({
  text,
  data,
  style,
  type,
  size,
  disable,
  dispatch,
  index,
  navTitle,
  ...rest
}) => {
  const goToDetail = index => {
    dispatch(
      NavigationActions.navigate({
        routeName: 'NewsDetail',
        params: { navTitle, data },
      })
    )
  }

  return (
    <Touchable style={styles.container} onPress={() => goToDetail(index)}>
      <View style={styles.itemRow}>
        <IconFont name="&#xe654;" size={24} color="#3a3a3a" />
        <View style={styles.item_right}>
          <Text style={styles.right_title}>{data.title}</Text>
          <View style={styles.right_bottom}>
            {data.contentSource && (
              <Text style={styles.bottom_text}>来源：{data.contentSource}</Text>
            )}
            <Text style={styles.bottom_text}>
              {moment(data.customTime).format('YYYY-MM-DD')}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.crossLine} />
    </Touchable>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding:20,
    alignItems: 'center',
  },
  itemRow: {
    paddingTop: 20,
    width: width * 0.95,
    flexDirection: 'row',
    marginBottom: 17,
  },
  item_right: {
    marginLeft: 6,
    width: width * 0.85,
  },
  right_title: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#3a3a3a',
    marginBottom: 16,
  },
  right_bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h5Size,
    color: '#aaaaaa',
  },
  crossLine: {
    width: width * 0.9,
    height: 1,
    opacity: 0.46,
    backgroundColor: '#626262',
  },
})
export default connect()(NewsBlock)
