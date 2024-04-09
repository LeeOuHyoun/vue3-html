import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: () => import('@/pages/IndexPage.vue') },
		{ path: '/button-sample', component: () => import('@/pages/samples/ButtonSample.vue') },
		{ path: '/pinia-sample', component: () => import('@/pages/samples/PiniaSample.vue') },
		{ path: '/icon-sample', component: () => import('@/pages/samples/IconSample.vue') },
		{ path: '/animejs-sample', component: () => import('@/pages/samples/AnimejsSample.vue') },
		{ path: '/vue-use-sample', component: () => import('@/pages/samples/VueUseSample.vue') },
		{ path: '/vue-scrollbar-sample', component: () => import('@/pages/samples/ScrollbarSample.vue') },
		{
			path: '/vue-router-history-sample',
			component: () => import('@/pages/samples/RouterHistoryControlSample.vue'),
		},
	],
})
export default router
