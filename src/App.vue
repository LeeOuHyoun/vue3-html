<script setup>
import { ref, inject } from 'vue'
import ComHeader from '@/components/ComHeader.vue'
import ComLeftNavigation from '@/components/ComLeftNavigation.vue'

const $dayjs = inject('$dayjs')
const currentDate = ref($dayjs().format('YYYY'))
</script>

<template>
	<v-app>
		<v-layout class="rounded rounded-md">
			<!-- 상단 헤더 -->
			<ComHeader />
			<!-- 완쪽 네비게이션 -->
			<ComLeftNavigation />

			<v-main class="d-flex align-center justify-center" style="min-height: 300px">
				<router-view />
			</v-main>

			<v-footer border app class="sub-s pa-0" height="50">
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
