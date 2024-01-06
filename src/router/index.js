import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: () => import('@/pages/IndexPage.vue') },
		{ path: '/button-sample', component: () => import('@/pages/samples/ButtonSample.vue') },
		{ path: '/pinia-sample', component: () => import('@/pages/samples/PiniaSample.vue') },
		{ path: '/breadcrumbs-link-2', component: () => import('@/pages/samples/BreadcrumbsLink2.vue') },
	],
})
export default router
