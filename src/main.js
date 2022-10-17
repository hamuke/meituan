import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import './styles.scss'
import './assets/css/main.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.name === 'goodsList' && store.state.userName === '') {
    if (to.name !== 'login') next({
      name: 'login'
    })
  } else next()
})