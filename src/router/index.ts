import type {Router, RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from '@/layout/index.vue';
import About from '@/views/About/index.vue';
import Home from '@/views/Home/index.vue';

const routes:RouteRecordRaw[] = [
    { path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About }
        ],
    },
]

const router:Router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
