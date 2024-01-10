<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { delay, isEqual, isEmpty, trim, debounce, size, map } from 'lodash-es'
import { useStore } from '@/stores'
import { useTheme } from 'vuetify'
import { storeToRefs } from 'pinia'
const store = useStore()
const theme = useTheme()
const { getStoreTest, wasDarkMode, naviMenus } = storeToRefs(store)
const logoSrc = computed(() => new URL('@/assets/img/constant_logo.svg', import.meta.url).href)
const isDarkMode = ref(wasDarkMode.value)
const headerMenus = ref(
	map(naviMenus.value, ({ title, to }) => ({
		title,
		to,
		color: '#fff',
		'active-class': 'activeMnu',
		disabled: false,
	})),
)
const searchLoading = ref(false)
const searchDialog = ref(false)
const searchCondition = ref(getStoreTest.value)
watch(getStoreTest, val => {
	searchCondition.value = val
})
// 테마 스위치(light/dark)
watchEffect(() => {
	theme.global.name.value = isDarkMode.value ? 'dark' : 'light'
	store.setDarkMode(isDarkMode.value)
})
const dialog = ref(false)
const onSearch = debounce(() => {
	if (isEqual(searchCondition.value, getStoreTest.value)) return
	if (isEmpty(trim(searchCondition.value)) || size(trim(searchCondition.value)) > 20) {
		alert('잘 좀 입력해 주세요!!!')
		searchCondition.value = getStoreTest.value
	} else {
		searchDialog.value = searchLoading.value = true
		delay(() => (dialog.value = searchDialog.value = searchLoading.value = false), 2000)
		store.setStoreTest(trim(searchCondition.value))
	}
}, 200)
</script>
<template>
	<v-app-bar color="primary-gradient" class="sub-s">
		<template v-slot:prepend>
			<router-link to="/">
				<v-img :src="logoSrc" width="50" height="50" alt="Go to Home" />
			</router-link>
			<!-- #region 상단 검색 -->
			<v-btn icon="mdi-magnify" class="ma-1 d-sm-none" @click="dialog = true" />
			<v-dialog v-model="dialog" class="d-md-none">
				<v-text-field
					v-model="searchCondition"
					:loading="searchLoading"
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
			</v-dialog>
			<v-text-field
				v-model="searchCondition"
				:loading="searchLoading"
				size="40"
				class="mx-2 d-none d-sm-flex"
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
			<!-- #endregion -->
		</template>
		<template v-slot:append>
			<!-- #region 상단 메뉴링크 -->
			<v-breadcrumbs :items="headerMenus" divider="|" class="d-none d-md-flex">
				<template v-slot:prepend>
					<v-icon size="small" icon="$vuetify" color="#fde0e0" />
				</template>
			</v-breadcrumbs>
			<!-- 모바일사이즈시 메뉴표시 -->
			<v-menu>
				<template v-slot:activator="{ props }">
					<v-btn v-bind="props" variant="text" icon="mdi-dots-vertical" class="d-md-none" />
				</template>
				<v-list>
					<v-list-item
						v-for="item in naviMenus"
						:key="item.to"
						:prepend-icon="item.icon"
						:to="item.to"
						:title="item.title"
					/>
				</v-list>
			</v-menu>
			<!-- #endregion -->
			<!-- 테마 모드변경 light or dark -->
			<v-tooltip location="bottom" activator="#themeSwitch">
				<template v-slot:activator="{ attrs }">
					<div v-bind="attrs" style="width: min-content">
						<v-switch id="themeSwitch" class="d-flex align-center" v-model="isDarkMode" />
					</div>
				</template>
				<div>{{ `다크모드 ${isDarkMode ? 'OFF' : 'ON'}` }}</div>
			</v-tooltip>
		</template>
	</v-app-bar>
	<!-- #region overlay loader -->
	<v-overlay :model-value="searchDialog" class="align-center justify-center" persistent>
		<v-progress-circular color="primary" indeterminate size="64" />
	</v-overlay>
	<!-- #endregion -->
</template>
<style lang="scss" scoped>
.sub-s:deep(.activeMnu) {
	font-weight: bold;
}
</style>
