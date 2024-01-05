<script setup>
import logo from '../assets/logo.svg'
</script>

<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<h2 class="text-red-lighten-1">Hello world.</h2>
			</v-col>
			<v-col cols="12">
				<v-img :src="logo" class="my-3" contain height="200" />
			</v-col>
		</v-row>
	</v-container>
</template>

<style lang="scss" scoped></style>
