<script setup>
import { ref, inject, computed } from 'vue'
const $dayjs = inject('$dayjs')
const currentDate = ref($dayjs().format('YYYY'))
const logoSrc = computed(() => new URL('@/assets/img/constant_logo.svg', import.meta.url).href)
const items = ref([
	{ title: 'Button', color: '#fff', 'active-color': 'red', disabled: false, href: 'button-sample' },
	{
		title: 'Link 1',
		color: '#fff',
		'active-color': 'red',
		active: true,
		disabled: false,
		href: 'breadcrumbs_link_1',
	},
	{ title: 'Link 2', color: '#fff', 'active-color': 'red', disabled: false, href: 'breadcrumbs_link_2' },
])
</script>

<template>
	<v-app>
		<v-layout class="rounded rounded-md">
			<v-app-bar color="primary-gradient">
				<!-- 상단 헤더 -->
				<template v-slot:prepend>
					<router-link to="/">
						<v-img :src="logoSrc" width="50" height="50"></v-img>
					</router-link>
				</template>
				<template v-slot:append>
					<v-breadcrumbs :items="items" divider="|">
						<template v-slot:prepend>
							<v-icon size="small" icon="$vuetify"></v-icon>
						</template>
					</v-breadcrumbs>
				</template>
			</v-app-bar>

			<v-navigation-drawer order="1">
				<v-list>
					<v-list-item title="Navigation drawer"></v-list-item>
				</v-list>
			</v-navigation-drawer>

			<v-main class="d-flex align-center justify-center" style="min-height: 300px">
				<router-view />
			</v-main>

			<v-footer border app>
				<div class="px-4 py-2 text-center w-100">
					Copyright © 2022-{{ currentDate }} Constant Company All rights reserved.
				</div>
			</v-footer>
		</v-layout>
	</v-app>
</template>

<!-- TODO scoped 아닌 공통스타일. 규모가 커지면 파일을 따로 빼서 import를 하면 어떨지... -->
<style lang="scss">
// 기본설정
* {
	margin: 0px;
	padding: 0px;
}

ul,
ol {
	list-style: none;
}

a {
	text-decoration: none;
	&:hover {
		opacity: 0.7;
	}
}

.v-app-bar.v-toolbar,
.v-btn.v-theme--light {
	&.bg-primary-gradient {
		background: linear-gradient(45deg, #fde2e2, #f56c6c);
	}
}
// 왜 기본 버튼설정이 자동 대문자인지 모르겠군요.
.v-btn {
	text-transform: unset !important;
	.text-white {
		color: #ffff !important;
	}
}
</style>
