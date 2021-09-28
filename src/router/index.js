import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store"

// * modules
import dashboard from '@dashboard/router'
import user from '@user/router'

const routes = [ ...dashboard, ...user ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach(async (to, from, next) => {
    if (/*!store.state.auth && */ to.meta.requireAuth) {
        try { 

        } catch {
            next('/login')
        }
    } else if (store.state.auth && to.meta.requireAuth) {
        store.getters['permitions/permition'](to.meta.permition) ? next() : next('/login')
    } else { 
        next()
    }
})

export default router
