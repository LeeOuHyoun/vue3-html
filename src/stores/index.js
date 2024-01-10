import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		storeTestData: '',
		isDarkMode: false,
		naviMenus: [
			{ title: 'Button', icon: 'mdi-alpha-b-box', to: 'button-sample' },
			{ title: 'Pinia', icon: 'mdi-fruit-pineapple', to: 'pinia-sample' },
			{ title: 'Icon', icon: 'mdi-vector-square', to: 'icon-sample' },
			{ title: 'Datepicker', icon: 'mdi-calendar-month-outline', to: 'datepicker-sample' },
		],
	}),
	getters: {
		getStoreTest: state => state.storeTestData,
		wasDarkMode: state => state.isDarkMode,
		getNaviMenus: ({ naviMenus }) => naviMenus,
	},
	actions: {
		setStoreTest(storeTestData) {
			// $patch도 사용해보고
			this.$patch({ storeTestData })
		},
		setDarkMode(payload) {
			// 그냥도 설정해보고
			this.isDarkMode = payload
		},
	},
	persist: [
		{
			paths: ['isDarkMode'],
			storage: localStorage,
		},
		{
			paths: ['storeTestData'],
			storage: sessionStorage,
		},
	],
})
