import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		storeTestData: '',
		isDarkMode: false,
	}),
	getters: {
		getStoreTest: state => state.storeTestData,
		wasDarkMode: state => state.isDarkMode,
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
