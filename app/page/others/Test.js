import React from 'react'
import { StyleSheet, View, Text, Image, Dimensions} from 'react-native'
import { connect } from 'react-redux'
import { NavigationPage, } from 'teaset'
import Swiper from 'react-native-swiper'

import { NavBar } from '../../components'

const { width } = Dimensions.get('window')


@connect(({ app }) => ({ ...app }))
class Test extends NavigationPage {
  
  renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

renderNavigationBar() {
    return <NavBar title="Test" />
  }
renderPage() {
    return (
      <Swiper
          style={styles.wrapper}
          renderPagination={this.renderPagination}
          autoplay
        >
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image style={styles.image} source={require('../../assets/images/banner1.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image style={styles.image} source={require('../../assets/images/banner1.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image style={styles.image} source={require('../../assets/images/banner1.png')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image style={styles.image} source={require('../../assets/images/banner1.png')} />
          </View>
        </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    width,
    height:192,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    height:182,
  },
  // paginationStyle: {
  //   position: 'absolute',
  //   bottom: 10,
  //   right: 10
  // },
  paginationText: {
    color: 'red',
    fontSize: 20
  }

})

export default Test
