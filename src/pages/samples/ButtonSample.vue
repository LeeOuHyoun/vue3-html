<script setup>
// import { ref } from 'vue'
import { inject } from 'vue'

const $http = inject('$http')
const onClickBtn = () => {
	console.log($http.get)
}
const helloWorld = () => {
	alert('Hello World!')
}
</script>

<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-btn
					prepend-icon="mdi-check-circle"
					color="primary-gradient"
					append-icon="mdi-account-circle"
					outlined
					@click="helloWorld"
				>
					<template v-slot:prepend> <v-icon>mdi-heart-settings-outline</v-icon> </template>
					그냥 버튼
					<template v-slot:append> <v-icon>mdi-exit-run</v-icon> </template>
				</v-btn>
				<v-btn variant="outlined" color="primary-2" class="ma-2"> 아웃라인 버튼 </v-btn>
			</v-col>
			<v-col cols="12">
				<v-btn icon="mdi-open-in-new" size="large" @click="onClickBtn"></v-btn>
			</v-col>
			<v-col cols="12">
				<v-icon dark>mdi-open-in-new</v-icon>
				<v-icon dark>mdi-alpha-s-circle</v-icon>
			</v-col>
		</v-row>
	</v-container>
</template>

<style lang="scss" scoped></style>
