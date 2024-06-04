import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home/HomePage.vue'
import NotFound from '../views/NotFound.vue'
import ComingSoon from '../views/ComingSoon.vue'
import Maintenance from '../views/Maintenance.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
        meta: {
            title: 'ITE - G7 | Home',
        },
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: 'ITE - G7 | 404',
        },
    },
    {
        path: '/coming-soon',
        name: 'ComingSoon',
        component: ComingSoon,
        meta: {
            title: 'ITE - G7 | Coming Soon',
        },
    },
    {
        path: '/maintenance',
        name: 'Maintenance',
        component: Maintenance,
        meta: {
            title: 'ITE - G7 | Maintenance',
        },
    },
    // Catch-all route for 404
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'ITE - G7';
    next();
    window.scrollTo(0, 0);
});

export default router
