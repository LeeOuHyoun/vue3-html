<script setup>
// import { ref, inject } from 'vue'
// const $dayjs = inject('$dayjs')
</script>

<template>
	<v-container>
		<v-card variant="flat">
			<template v-slot:title>
				<a href="https://vuetifyjs.com/en/components/date-pickers/#usage" target="_blank">
					<strong class="text-red-lighten-1">
						<v-icon> mdi-open-in-new </v-icon>
						Date pickers
					</strong>
				</a>
				<v-divider></v-divider>
			</template>
			<v-card-item>
				<v-date-picker
					color="primary"
					title="날짜를 입력하세요"
					header="안녕달력"
					year-icon="mdi-calendar-blank"
					prev-icon="mdi-skip-previous"
					next-icon="mdi-skip-next"
				/>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<style lang="scss" scoped></style>
