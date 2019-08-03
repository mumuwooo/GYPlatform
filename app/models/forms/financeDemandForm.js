import { Toast, ModalIndicator } from 'teaset'
import * as services from '../../services/forms'

export default {
    namespace: 'financeDemandForm',
    state: {
        companyName: "",
        industryType: "",
        majorBusiness: "",
        totalAssets: "",
        financeMethod: "",
        pictureId: "",
        pictureUrl: "",
        contact: "",
        phone: ""
    },
    reducers: {
        updateCompanyName(state, {payload}){
            return {...state, companyName: payload}
        },
        updateIndustryType(state, {payload}){
            console.log("tweataetawetawe")
            return {...state, industryType: payload}
        },
        updateMajorBusiness(state, {payload}){
            return {...state, majorBusiness: payload}
        },
        updateTotalAssets(state, {payload}){
            return {...state, totalAssets: payload}
        },
        updateFinanceMethod(state, {payload}){
            return {...state, financeMethod: payload}
        },
        updatePicture(state, {payload}){
            return {...state, pictureId: payload.id, pictureUrl: payload.pictureUrl}
        },
        updateContact(state, {payload}){
            return {...state, contact: payload}
        },
        updatePhone(state, {payload}){
            return {...state, phone: payload}
        },
    },
    effects: {
        *postFinanceDemandForm({payload}, {call, put}){
            const res = yield call(services.postFinanceDemandForm, payload)
            console.log(res)
            if(res){
                //toast提交成功，跳转到用户界面
                console.log(res)
                Toast.success("提交成功")
            }else{
                Toast.fail("网络错误")
            }
        }
    },
    subscriptions: {

    }
}