<script setup>
// import { ref, inject } from 'vue'
// const $dayjs = inject('$dayjs')
</script>

<template>
	<v-container>
		<v-date-picker
			color="primary"
			title="날짜를 입력하세요"
			header="안녕달력"
			year-icon="mdi-calendar-blank"
			prev-icon="mdi-skip-previous"
			next-icon="mdi-skip-next"
		/>
	</v-container>
</template>

<style lang="scss" scoped></style>
