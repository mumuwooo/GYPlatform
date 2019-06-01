import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Touchable, ModalView } from './index'
import { commonStyle } from '../utils'

class MajorSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModal: false,
    }
  }
  showModal = () => {
    this.setState({
      isModal: true,
    })
  }
  hideModal = () => {
    this.setState({
      isModal: false,
    })
  }
  checkMajor(Major) {
    if (!Major._selected) {
      // 非选定可切换
      this.props.dispatch({ type: 'app/switchMajor', payload: Major })
      this.hideModal()
    }
  }

  checkPlan(PlanKey, PlanObj) {
    const PlanKeyNow = this.props.app.PlanKey
    if (PlanKey != PlanKeyNow) {
      // 不同时可切换
      this.props.dispatch({
        type: 'app/switchPlan',
        payload: { PlanKey, PlanObj },
      })
      this.hideModal()
    }
  }
  render() {
    const {
      app: { PlanInfo, PlanInfo2, PlanInfo3, MajorList },
    } = this.props
    const PlanKey = window._PlanType
    return (
      <ModalView
        isShow={this.state.isModal}
        hideModal={this.hideModal}
        contentHeight={360}
        contentStyle={styles.modal_content}
        title="选择"
      >
        <View>
          <View style={styles.select_content}>
            <View style={styles.select_content_item}>
              <View style={styles.item_title}>
                <Text style={styles.item_title_text}>专业选择</Text>
              </View>
              <View style={styles.item_list}>
                {MajorList &&
                  MajorList.map((item, index) => (
                    <Touchable
                      activeOpacity={item._selected ? 1 : 0}
                      key={index}
                      style={[
                        styles.btn_view,
                        item._selected ? styles.btn_view_active : {},
                      ]}
                      onPress={() => this.checkMajor(item)}
                    >
                      <Text
                        style={[
                          styles.btn_text,
                          item._selected ? styles.btn_text_active : {},
                        ]}
                      >
                        {item.SpecialtyName}({item.DictionaryName})
                      </Text>
                    </Touchable>
                  ))}
              </View>
            </View>
            <View style={styles.select_content_item}>
              <View style={styles.item_title}>
                <Text style={styles.item_title_text}>类别选择</Text>
              </View>
              <View style={styles.item_list}>
                {PlanInfo && (
                  <Touchable
                    activeOpacity={PlanKey == 1 ? 1 : 0}
                    style={[
                      styles.btn_view,
                      PlanKey == 1 ? styles.btn_view_active : {},
                    ]}
                    onPress={() => this.checkPlan(1, PlanInfo)}
                  >
                    <Text
                      style={[
                        styles.btn_text,
                        PlanKey == 1 ? styles.btn_text_active : {},
                      ]}
                    >
                      {PlanInfo && (PlanInfo.ShowName || '强化实践能力')}
                    </Text>
                  </Touchable>
                )}
                {PlanInfo2 && (
                  <Touchable
                    activeOpacity={PlanKey == 2 ? 1 : 0}
                    style={[
                      styles.btn_view,
                      PlanKey == 2 ? styles.btn_view_active : {},
                    ]}
                    onPress={() => this.checkPlan(2, PlanInfo2)}
                  >
                    <Text
                      style={[
                        styles.btn_text,
                        PlanKey == 2 ? styles.btn_text_active : {},
                      ]}
                    >
                      {PlanInfo2 && (PlanInfo2.ShowName || '在校生实践课程')}
                    </Text>
                  </Touchable>
                )}
                {PlanInfo3 && (
                  <Touchable
                    activeOpacity={PlanKey == 3 ? 1 : 0}
                    style={[
                      styles.btn_view,
                      PlanKey == 3 ? styles.btn_view_active : {},
                    ]}
                    onPress={() => this.checkPlan(3, PlanInfo3)}
                  >
                    <Text
                      style={[
                        styles.btn_text,
                        PlanKey == 3 ? styles.btn_text_active : {},
                      ]}
                    >
                      {PlanInfo3 && (PlanInfo3.ShowName || '证书职业能力')}
                    </Text>
                  </Touchable>
                )}
              </View>
            </View>
          </View>
        </View>
      </ModalView>
    )
  }
}

const styles = StyleSheet.create({
  modal_content: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 12,
  },
  item_title: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  item_title_text: {
    fontFamily: 'PingFang-SC-Bold',
    fontSize: commonStyle.h3Size,
    color: commonStyle.h2Color,
  },
  item_list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn_view: {
    borderRadius: 30,
    paddingVertical: commonStyle.h5Size,
    paddingHorizontal: commonStyle.h5Size * 2,
    backgroundColor: commonStyle.lightGrayColor,
    marginLeft: commonStyle.h4Size,
    marginBottom: commonStyle.h4Size,
  },
  btn_view_active: {
    backgroundColor: commonStyle.themeColor,
  },
  btn_text: {
    fontFamily: 'PingFang-SC-Bold',
    fontSize: commonStyle.h21Size,
    color: commonStyle.h2Color,
  },
  btn_text_active: {
    color: '#fff',
  },
})
export default MajorSwitch
