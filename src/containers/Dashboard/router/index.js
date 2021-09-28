export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('/src/components/Home.vue'),
        meta: {
            layout: 'Side',
            requreAuth: false,
            permition: 'dashboard-view',
            group: 'dashboard'
        }
    },
]