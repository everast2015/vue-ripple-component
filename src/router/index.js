import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('@/views/index/mainContent.vue'),
        meta: 'main'
    },
    {
        path: '/index',
        component: () => import('@/views/index/index.vue'),
        meta: '按钮和标签'
    },
    {
        path: '/first',
        component: () => import('@/views/index/first.vue'),
        meta: '第一章'
    },
    {
        path: '/second',
        component: () => import('@/views/index/second.vue'),
        meta: '第二章'
    },
    {
        path: '/three',
        component: () => import('@/views/index/three.vue'),
        meta: '第三章'
    }
]

const router = new VueRouter({
    routes
})

export default router;