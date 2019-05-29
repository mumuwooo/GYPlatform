import React, { Component } from 'react'
import { View, Animated, Easing } from 'react-native'

export default class Loading extends Component {
  state = {
    rotateVal: new Animated.Value(0),
  }
  componentDidMount() {
    // 组件加载完成后启动动画
    const animationLoading = Animated.timing(
      this.state.rotateVal, // 初始值
      {
        toValue: 360, // 终点值
        duration: 1500,
        easing: Easing.linear, // 这里使用匀速曲线，详见RN-api-Easing
      }
    )
    Animated.loop(animationLoading).start() // 开始动画
    setTimeout(Animated.loop(animationLoading).stop, 10000) // 10秒后停止动画，可用于任意时刻停止动画
  }

  render() {
    // 渲染界面
    return (
      <View
        style={{
          height: 48,
          minWidth: 48,
          flex: 1,
          backgroundColor: 'transparent',
          transform: [
            {
              scale:
                (this.props.size && (this.props.size == 'small' ? 0.8 : 1.2)) ||
                0.8,
            },
          ],
        }}
      >
        <Animated.Text
          style={{
            textAlign: 'center',
            fontSize: 50,
            color: '#555',
            fontFamily: 'iconfont',
            transform: [
              {
                // 动画属性
                rotate: this.state.rotateVal.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        >
          &#xe68f;
        </Animated.Text>
      </View>
    )
    // return (
    //   <View
    //     style={{
    //       height: 48,
    //       minWidth: 48,
    //       flex: 1,
    //       backgroundColor: 'transparent',
    //       transform: [
    //         {
    //           scale:
    //             (this.props.size && (this.props.size == 'small' ? 0.6 : 1.2)) ||
    //             0.8,
    //         },
    //       ],
    //     }}
    //   >
    //     <Animated.Text
    //       style={{
    //         textAlign: 'center',
    //         fontSize: 34,
    //         color: '#555',
    //         fontFamily: 'iconfont',
    //         left: -4,
    //         transform: [
    //           {
    //             // 动画属性
    //             rotate: this.state.rotateVal.interpolate({
    //               inputRange: [0, 360],
    //               outputRange: ['0deg', '360deg'],
    //             }),
    //           },
    //         ],
    //       }}
    //     >
    //       &#xe712;
    //     </Animated.Text>
    //     <Animated.Text
    //       style={{
    //         textAlign: 'center',
    //         fontSize: 24,
    //         top: -9,
    //         left: 11,
    //         color: '#555',
    //         fontFamily: 'iconfont',
    //         transform: [
    //           {
    //             // 动画属性
    //             rotate: this.state.rotateVal.interpolate({
    //               inputRange: [0, 360],
    //               outputRange: ['360deg', '0deg'],
    //             }),
    //           },
    //         ],
    //       }}
    //     >
    //       &#xe712;
    //     </Animated.Text>
    //   </View>
    // )
  }
}
