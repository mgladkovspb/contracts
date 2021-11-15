import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ApiService from '@/services/api.service'
ApiService.init()

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import './assets/css/dashlite.css'
import './assets/css/theme.css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
