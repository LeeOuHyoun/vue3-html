<script setup>
import { ref, inject, computed } from 'vue'
const $dayjs = inject('$dayjs')
const currentDate = ref($dayjs().format('YYYY'))
const logoSrc = computed(() => new URL('@/assets/img/constant_logo.svg', import.meta.url).href)
const headerMenus = ref([
	{ title: 'Button', color: '#fff', 'active-class': 'activeMnu', disabled: false, to: 'button-sample' },
	{ title: 'Link 1', color: '#fff', 'active-class': 'activeMnu', disabled: false, to: 'breadcrumbs-link-1' },
	{ title: 'Link 2', color: '#fff', 'active-class': 'activeMnu', disabled: false, to: 'breadcrumbs-link-2' },
])
</script>

<template>
	<v-app>
		<v-layout class="rounded rounded-md">
			<!-- #region 상단 헤더 -->
			<v-app-bar color="primary-gradient" class="sub-s">
				<template v-slot:prepend>
					<router-link to="/">
						<v-img :src="logoSrc" width="50" height="50"></v-img>
					</router-link>
				</template>
				<template v-slot:append>
					<v-breadcrumbs :items="headerMenus" divider="|">
						<template v-slot:prepend>
							<v-icon size="small" icon="$vuetify" color="#fde0e0"></v-icon>
						</template>
					</v-breadcrumbs>
				</template>
			</v-app-bar>
			<!-- #endregion -->

			<!-- #region 완쪽 네비게이션 -->
			<v-navigation-drawer order="1" class="sub-s">
				<v-list>
					<v-list-item title="Kenya"></v-list-item>
					<v-list-item title="Singapore"></v-list-item>
					<v-list-item title="Spain"></v-list-item>
					<v-list-item title="Syria"></v-list-item>
					<v-list-item title="Japan"></v-list-item>
					<v-list-item title="Zambia"></v-list-item>
					<v-list-item title="Tanzania"></v-list-item>
					<v-list-item title="Bulgaria"></v-list-item>
					<v-list-item title="Iraq"></v-list-item>
					<v-list-item title="Switzerland"></v-list-item>
					<v-list-item title="Cyprus"></v-list-item>
					<v-list-item title="St. Helena"></v-list-item>
				</v-list>
			</v-navigation-drawer>
			<!-- #endregion -->

			<v-main class="d-flex align-center justify-center" style="min-height: 300px">
				<router-view />
			</v-main>

			<v-footer border app class="sub-s" height="50">
				<div class="px-4 py-2 text-center w-100">
					Copyright © 2022-{{ currentDate }} Constant Company All rights reserved.
				</div>
			</v-footer>
		</v-layout>
	</v-app>
</template>

<style lang="scss" scoped>
.sub-s ::v-deep .activeMnu {
	font-weight: bold;
}
</style>
