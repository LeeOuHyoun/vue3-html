<script setup></script>

<template>
	<v-container>
		<v-card variant="flat">
			<template v-slot:title>
				<a href="https://pinia.vuejs.kr/" target="_blank">
					<strong class="text-red-lighten-1">
						<v-icon> mdi-open-in-new </v-icon>
						Router History Control Sample
					</strong>
				</a>
				<v-divider></v-divider>
			</template>
			<v-card-item>
				<v-divider length="200" class="border-opacity-100 mb-3"></v-divider>
				<v-row>
					<v-col cols="12">
						<v-btn class="ma-1" color="primary" @click="onClickTest"> default </v-btn>
					</v-col>
				</v-row>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<style lang="scss" scoped></style>
