import React,{Component} from "react";
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Modal,
  Dimensions,
  View,
  Text
} from "react-native";
import {Touchable} from './index'
import Divider from './Divider'
import {commonStyle} from '../utils'

const { width, height } = Dimensions.get("window");

class ModalView extends Component { 
  static propTypes = {
    isShow: PropTypes.bool,//是否显示
    bgColor: PropTypes.string,//背景色 默认透明
    hideModal: PropTypes.func,//隐藏方法
    contentHeight: PropTypes.number, // 主体内容最小高度  默认全屏
    animationType:PropTypes.string, // 'none', 'slide', 'fade' 默认slide从底部滑入
    title:PropTypes.string, //标题   
  }

  render(){
    const {children,title, contentHeight, animationType="fade",isShow,bgColor, hideModal,contentStyle} = this.props
    return <Modal
      animationType={animationType}
      transparent={true} // 透明
      visible={isShow}
      onRequestClose={() => {
        // this.onRequestClose();
      }} // android必须实现
    >
      <Touchable
        style={[styles.modal_container,bgColor&&{backgroundColor:bgColor}]}
        activeOpacity={1}
        onPress={hideModal}
      >
          <Touchable style={[styles.modal_view,{minHeight: (contentHeight||height)-20,bottom:0,paddingBottom:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        padding:12,
        },contentStyle]} activeOpacity={1} onPress={() => {}}>
          {/* 主体内容 */}
          {title&&
          <View style={styles.select_title}>
            <View>
              <Text style={styles.select_title_text}>{title}</Text>
            </View>
            <Touchable
                onPress={hideModal}
            ><Text  style={styles.close_text}>关闭</Text>
            </Touchable>
          </View>}
          {title&&<Divider/>}
          {children}
        </Touchable>
      </Touchable>
    </Modal>
  }
}

const styles = StyleSheet.create({
  modal_container: {
    position: "relative",
    flex: 1,
    backgroundColor: "rgba(0,0,0,.6)"
  },
  modal_view: {
    width,
    backgroundColor: "#fff",
    position: "absolute"
  },
  select_title:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:15
  },
  select_title_text:{
    fontFamily: "PingFang-SC-Bold",
    fontSize:commonStyle.h2Size,
    color:commonStyle.h1Color
  },
  close_text:{
    fontFamily: "PingFang-SC-Regular",
    fontSize:commonStyle.h3Size
  },
});
export default ModalView;
