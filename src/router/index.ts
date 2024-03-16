import {createRouter,createWebHashHistory} from 'vue-router'
import type { RouteRecordRaw,Router } from 'vue-router';
import About from '@/views/About/index.vue';
import Home from '@/views/Home/index.vue';

const routes:RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router:Router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
