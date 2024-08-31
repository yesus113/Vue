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
            component: () => import('../components/modules/contador/components/Contador.vue')
        },
        {
            path: '/ListaDeTareas',
            name: 'ListaDeTareas',
            component: () => import('../components/modules/listaDeTareas/components/ListaDeTareas.vue')
        },
        {
            path: '/h',
            name: 'H',
            component: () => import('../components/h.vue')
        },
        {
            path: '/registrar',
            name: 'registrar',
            component: () => import('../components/modules/registro/views/registrarView.vue')
        }
    ]
})

export default router
