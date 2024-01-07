<script setup>
import { ref, inject } from 'vue'
import ComHeader from '@/components/ComHeader.vue'
const $dayjs = inject('$dayjs')
const currentDate = ref($dayjs().format('YYYY'))
</script>

<template>
	<v-app>
		<v-layout class="rounded rounded-md">
			<!-- 상단 헤더 -->
			<ComHeader />

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
