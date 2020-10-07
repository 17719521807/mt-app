import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = 'https://open.duyiedu.com';
axios.interceptors.response.use(response => {
    return response.data && response.data;
});
Vue.prototype.axios = axios;