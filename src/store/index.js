import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productList: '',
        inputValue: '',
        address: '',
        isLogin: false,
        name: ''
    },
    mutations: {
        changeProductList(state, payload) {
            state.productList = payload.productList;
            state.inputValue = payload.inputValue;
        },
        setAddress(state, payload) {
            state.address = payload.address;
        },
        setIsLogin(state, payload) {
            state.isLogin = payload.isLogin;
            payload.isLogin ? state.name = payload.name : '';
        }
    },
    actions: {},
    modules: {}
})