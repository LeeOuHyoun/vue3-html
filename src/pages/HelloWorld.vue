<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img :src="logo" class="my-3" contain height="200" />
			</v-col>
			<v-col cols="12">
				<v-btn prepend-icon="mdi-check-circle" append-icon="mdi-account-circle" @click="helloWorld">
					<template v-slot:prepend>
						<v-icon color="success"></v-icon>
					</template>
					안녕하세요!
					<template v-slot:append>
						<v-icon color="warning"></v-icon>
					</template>
				</v-btn>
			</v-col>
			<v-col cols="12">
				<v-btn icon="mdi-open-in-new" size="large" @click="onClickBtn"></v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import logo from '../assets/logo.svg'
import { inject } from 'vue'

const $http = inject('$http')
const onClickBtn = () => {
	console.log($http.get)
}
const helloWorld = () => {
	alert('Hello World!')
}
</script>
