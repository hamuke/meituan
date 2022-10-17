import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import index from '@/pages/index.vue'
import changeCity from '@/pages/changeCity.vue'
import goodsList from '@/pages/goodsList.vue'
import login from '@/pages/login.vue'
import register from '@/pages/register.vue'

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'default',
            component: defaultPage,
            redirect: 'index',
            children: [{
                path: '/index',
                name: 'index',
                component: index,
            }, {
                path: '/changeCity',
                name: 'changeCity',
                component: changeCity,
            }, {
                path: '/goodsList',
                name: 'goodsList',
                component: goodsList,
            }]
        },
        {
            path: '/blank',
            name: 'blank',
            component: blankPage,
            children: [{
                path: '/login',
                name: 'login',
                component: login,
            }, {
                path: '/register',
                name: 'register',
                component: register,
            }]
        }
    ]
})