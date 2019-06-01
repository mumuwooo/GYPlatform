import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View, Text, TouchableOpacity } from 'react-native'

class CollapsePanel extends Component {
  renderHeader() {
    const { header } = this.props
    return typeof header == 'String' ? <Text>{header}</Text> : header
  }
  toggle() {
    this.props.onPress && this.props.onPress()
  }
  setMinHeight() {}
  render() {
    const { header, style, children } = this.props
    return (
      <View style={[style]}>
        <TouchableOpacity
          ref={ref => (this._header = ref)}
          activeOpacity={1}
          onPress={() => this.toggle()}
          onLayout={this.setMinHeight}
        >
          {this.renderHeader()}
        </TouchableOpacity>

        <View>{children}</View>
      </View>
    )
  }
}

CollapsePanel.propTypes = {
  children: PropTypes.element.isRequired,
}
// CollapsePanel.defaultProps = {
//   name:'panel',
//   onPress:()=>{
//      console.log('change')
//  }
// }
export default CollapsePanel
