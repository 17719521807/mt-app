import Vue from 'vue'
import VueRouter from 'vue-router';
import myMain from '@/template/myMain.vue';
import mainPage from "@/views/mainPage.vue";
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/main'
}, {
    path: '/main',
    redirect: "/main/mainPage",
    component: myMain,
    children: [{
        path: 'mainPage',
        component: mainPage,
    }, {
        path: 'productList',
        component: () =>
            import ('@/views/productList.vue')
    }, {
        path: 'cityList',
        component: () =>
            import ('@/views/cityList.vue')
    }],
}, {
    path: '/login',
    component: () =>
        import ('@/template/login.vue')
}, {
    path: '/regisiter',
    component: () =>
        import ('@/template/regisiter.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router