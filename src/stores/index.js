import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		storeTestData: 'Hello Store',
	}),
	getters: {
		getStoreTest: state => state.storeTestData,
	},
	actions: {
		setStoreTest(payload) {
			this.$patch({ storeTestData: payload })
		},
	},
	persist: {
		storage: sessionStorage,
	},
})
