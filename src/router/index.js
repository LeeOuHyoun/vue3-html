import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: () => import('@/pages/IndexPage.vue') },
		{ path: '/button-sample', component: () => import('@/pages/samples/ButtonSample.vue') },
	],
})
export default router
