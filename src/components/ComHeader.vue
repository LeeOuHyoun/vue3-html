<script setup>
import { ref, computed, watch } from 'vue'
import { delay, isEqual, isEmpty, trim, debounce, size } from 'lodash-es'
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia'
const store = useStore()
const { getStoreTest } = storeToRefs(store)
const logoSrc = computed(() => new URL('@/assets/img/constant_logo.svg', import.meta.url).href)
const headerMenus = ref([
	{ title: 'Button', color: '#fff', 'active-class': 'activeMnu', disabled: false, to: 'button-sample' },
	{ title: 'Pinia', color: '#fff', 'active-class': 'activeMnu', disabled: false, to: 'pinia-sample' },
	{ title: 'Icon', color: '#fff', 'active-class': 'activeMnu', disabled: false, to: 'icon-sample' },
])
const searchLoading = ref(false)
const searchDialog = ref(false)
const searchCondition = ref(getStoreTest.value)
watch(getStoreTest, val => {
	searchCondition.value = val
})
const onSearch = debounce(() => {
	if (isEqual(searchCondition.value, getStoreTest.value)) return
	if (isEmpty(trim(searchCondition.value)) || size(trim(searchCondition.value)) > 20) {
		alert('잘 좀 입력해 주세요!!!')
		searchCondition.value = getStoreTest.value
	} else {
		searchDialog.value = searchLoading.value = true
		delay(() => (searchDialog.value = searchLoading.value = false), 2000)
		store.setStoreTest(trim(searchCondition.value))
	}
}, 500)
</script>
<template>
	<v-app-bar color="primary-gradient" class="sub-s">
		<template v-slot:prepend>
			<router-link to="/">
				<v-img :src="logoSrc" width="50" height="50" alt="Go to Home" />
			</router-link>
			<v-text-field
				v-model="searchCondition"
				:loading="searchLoading"
				size="40"
				class="mx-2"
				density="compact"
				variant="solo"
				label="검색어를 입력 하세요. pinia연계 데이터"
				append-inner-icon="mdi-magnify"
				single-line
				hide-details
				clearable
				@click:append-inner="onSearch"
				@keydown.enter="onSearch"
			/>
		</template>
		<template v-slot:append>
			<v-breadcrumbs :items="headerMenus" divider="|">
				<template v-slot:prepend>
					<v-icon size="small" icon="$vuetify" color="#fde0e0"></v-icon>
				</template>
			</v-breadcrumbs>
		</template>
	</v-app-bar>
	<!-- #region overlay loader -->
	<v-overlay :model-value="searchDialog" class="align-center justify-center" persistent>
		<v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
	</v-overlay>
	<!-- #endregion -->
</template>
<style lang="scss" scoped></style>
