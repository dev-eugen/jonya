import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('/src/components/Home.vue'),
        meta: {
            layout: 'Side',
            requreAuth: false,
            permition: 'dashboard-view'
        }
    },
]

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
