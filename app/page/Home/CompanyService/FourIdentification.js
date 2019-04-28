import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Alert,
  Text,
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import HTML from 'react-native-render-html'
import { NavigationBar, NavigationPage, Label, Toast } from 'teaset'
import { Divider, Button } from '../../../components'
import { NavigationActions, commonStyle } from '../../../utils'
import NavBar from '../../../components/NavBar'

const { width, height } = Dimensions.get('window')

@connect(({ user }) => ({ user }))
class FourIdentification extends NavigationPage {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }

 
  renderNavigationBar() {
    return <NavBar title="四上企业申报" />
  }

  handleSubmit=()=>{
    this.props.dispatch(NavigationActions.navigate({routeName:'FourIdentifiForm'}))
  }
  renderPage() {
    const htmlContent=`
  
    <p style="font-size:13px;text-indent:55px;margin-top:10px">
    一、规模以上工业企业
      1.申报范围：年主营业务收入达到2000万元及以上的工业企业法人单位。
      2.申报时间：月度申报时间为当月10日至次月5日以前，2018年年度申报截止时间2018年11月10日。
      注：2018年调查单位年度审核工作由往年的两次合并为一次。2018年11月10日前，各县（市）区统计局在10月定报调查单位库的基础上，一次性完成纳入、退出，以及主要信息发生变更的年报调查单位的申报审核；取消2018年12月月度审核。
      3.审批方式：月度审批和年度审批。
      （1）月度审批范围：
      ①新开业（投产）单位；
      ②因改制、重新注册、合并或拆分产生的新单位；
      ③因改制、重新注册、合并或拆分退出的原单位；
      ④单位名称变更的单位。
      （2）年度审批范围：
      ①新开业（投产）并达到申报范围的工业企业法人单位；
      ②原年度规模以下成长达到申报范围的工业企业法人单位；
      ③专业变更需纳入的企业，企业达到申报范围；
      ④辖区变更（跨省）需纳入的企业（变更后辖区填报）；
      ⑤组织机构代码或单位名称变更企业；
      ⑥规模以上工业转规模以下工业企业单位；
      ⑦破产、注（吊）销企业；
      ⑧专业变更需退出企业；
      ⑨辖区变更（跨省）需退出企业；
      ⑩单位界定错误需退出企业；
      ⑪停业（歇业）企业；
      ⑫其他原因退出企业。
      4.企业需提供的审批材料：
      （1）入库申报资料清单（由县级统计机构提供表式、存档并上报市局工业处，不需上传）；
      （2）新开业（投产）工业企业调研情况记录表（由县级统计机构提供表式、存档并上报市局工业处，不需上传）；
      （3）审核登记表（由县级统计机构提供表式，不需上传）；
      （4）基本情况表（由县级统计机构提供表式，不需上传）；
      （5）营业执照（证书）复印件；
      （6）税务登记证复印件；
      （7）中华人民共和国组织机构代码证复印件；
      （已经实行五证合一的单位，只需提供五证合一证照复印件）
      （8）新开业（投产）单位还需提供发展改革委（经信委或工信委）对建设项目的批复（或备案）文件复印件（发展改革委或工信委盖章）；
      （9）截至申报期最近1个月的《利润表》复印件，该复印件须由企业经办人员注明与原件一致，并加盖企业公章；
      （10）截至申报期最近1个月在税务部门打印并加盖税务部门和企业公章的《增值税纳税申报表》及《增值税纳税申报表附列资料（一）》；
      （11）截至申报期当年累计开具的增值税专用发票、普通发票或出口报关单的复印件（或照片），照片可以电子格式保存，不强制要求为纸质形式（由县级统计机构存档并上报市局工业处，不需上传）；
      12）有企业名称的公司（厂门）大门、办公楼、生产加工现场的企业生产线、车间及产品照片，照片要有拍摄时间的水印；
      （13）真实性承诺（由县级统计机构提供格式）。
      指标解释：新开业（投产）单位是指上一年第4季度及当年新开业（投产）的单位。
      注：以上材料必须在有效期内并均需加盖企业公章。截至申报期当年主营业务收入、
      纳税申报表中累计销售额、累计开具的增值税专用发票、普通发票或出口报关单累计销售金额合计须大于2000万；对于无纳税申报表或者纳税申报表上累计销售额小于2000万的，
      须提供有税务部门公章的说明，说明中要注明企业的销售额（该销售额须大于2000万）。新开业（投产）单位的审批情况表、法人表开业时间应在当年内。
      </p>
    

    `
    return (
      <View style={styles.container}>
  <View style={styles.content}>
          <ScrollView style={{height:height*0.65}} showsVerticalScrollIndicator={false}>
            <Text style={styles.content_title}>四上企业申报指南</Text>
            <HTML
              html={htmlContent}
              imagesMaxWidth={width*0.95}
              tagsStyles={{
                p: {
                  // fontFamily: "PingFang-SC-Medium",
                  // fontSize: 16,
                  // lineHeight:24,
                  // color: "#666"
                },
              }}
            />
          
            <Divider type = "bottomSpace" color='#fff'/>
        </ScrollView>
        </View>
      <Button
          style={styles.button_save}
          textStyle={styles.button_text}
          onPress={this.handleSubmit}
          type="theme"
        >
          立即申报
        </Button>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button_save: {
    marginTop: 18,
    width: 119,
    height: 33,
    borderRadius: 2,
    borderColor: commonStyle.themeColor,
    backgroundColor: commonStyle.themeColor,
    alignSelf:'center',
  },
  button_text: {
    fontFamily: commonStyle.PFregular,
    fontSize: commonStyle.h21Size,
    color: '#ffff',
  },
  content:{
    backgroundColor:'#fff',
    marginHorizontal:14,
    marginTop:18,
    marginBottom:27,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#bababa",
    paddingHorizontal:16,
  },
  content_title:{
    width:161,
    fontFamily: commonStyle.PFmedium,
    fontSize: commonStyle.h31Size,
    color: "#ffffff",
    paddingVertical:8,
    paddingHorizontal:21,
    borderRadius: 15,
    backgroundColor:commonStyle.themeColor,
    marginTop:19,
    marginBottom:26,
  },
})
export default FourIdentification
