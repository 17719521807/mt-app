import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import manageCookie from "@/cookie/cookie.js"
import './axios/index.js';
import '@/assets/css/reset.css';
import '@/assets/css/index.css';

Vue.config.productionTip = false
Vue.prototype.manageCookie = manageCookie;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')