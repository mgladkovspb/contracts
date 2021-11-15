import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Signin from '@/views/Signin.vue'
import store from '@/store'

Vue.use(VueRouter)

function scrollBehavior (to, from, savedPosition) {
    // TODO
    // сделать скрол в позицию договора в списке после редактирования
    
    let existing = {
        x: window.scrollX,
        y: window.scrollY
    }
    
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/contract/:id?',
        name: 'ContractDetails',
        component: () => import('../views/ContractDetails.vue')
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: Signin
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior
})

router.beforeEach((to, from, next) => {
    // if (to.name !== 'SignIn' && !store.state.auth.user) {
    //     next({ name: 'SignIn', path: '/signin', replace: true })
    // } 
    //else next()
    next()
})

export default router