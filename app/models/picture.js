export default {
    namespace: 'picture',
    state: {
        picture: null
    },
    reducers: {
        updatePicture(state, {payload}){
            return {...state, picture: payload}
        }
    },
    effects: {

    },
    subscriptions: {

    }
}