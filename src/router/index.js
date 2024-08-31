import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //   path: '/',
        //   name: 'home',
        //   component: HomeView
        // },
        {
            path: '/contador',
            name: 'contador',
            component: () => import('../components/Contador.vue')
        },
        {
            path: '/ListaDeTareas',
            name: 'ListaDeTareas',
            component: () => import('../components/ListaDeTareas.vue')
        },
        {
            path: '/h',
            name: 'H',
            component: () => import('../components/h.vue')
        }
    ]
})

export default router
