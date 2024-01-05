<script setup>
import { ref } from 'vue'
// const btnVal = ref(0)
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
				<template v-slot:append>
					<v-breadcrumbs :items="items" divider="|">
						<template v-slot:prepend>
							<v-icon size="small" icon="$vuetify"></v-icon>
						</template>
					</v-breadcrumbs>
				</template>
			</v-app-bar>

			<v-navigation-drawer>
				<v-list>
					<v-list-item title="Navigation drawer"></v-list-item>
				</v-list>
			</v-navigation-drawer>

			<v-main class="d-flex align-center justify-center" style="min-height: 300px">
				<router-view />
			</v-main>
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
