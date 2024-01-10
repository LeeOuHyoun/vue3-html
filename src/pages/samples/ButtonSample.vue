<script setup>
// import { ref } from 'vue'
import { inject } from 'vue'

const $http = inject('$http')
const onClickBtn = () => {
	// FIXME axios오브젝트 있나 확인만
	console.log($http.get)
}
const helloWorld = () => {
	const yesOrNo = confirm('Do you know Hello World?')
	alert(yesOrNo ? 'Yes. I know' : `No I don't know`)
}
</script>

<template>
	<v-container>
		<v-card variant="flat">
			<template v-slot:title>
				<a href="https://vuetifyjs.com/en/components/buttons/#usage" target="_blank">
					<strong class="text-red-lighten-1">
						<v-icon> mdi-open-in-new </v-icon>
						Vuetify Buttons API
					</strong>
				</a>
				<!-- 아래 라인 -->
				<v-divider></v-divider>
			</template>
			<v-card-item>
				<v-row>
					<v-col cols="12">
						<v-btn class="ma-1"> default </v-btn>
						<v-btn class="ma-1" variant="outlined"> default outlined </v-btn>
						<v-btn class="ma-1" prepend-icon="mdi-check-circle"> prepend-icon </v-btn>
						<v-btn class="ma-1" append-icon="mdi-exit-run"> append-icon </v-btn>
					</v-col>
					<v-col cols="12">
						<v-btn color="primary" class="ma-1"> primary default </v-btn>
						<v-btn color="primary" class="ma-1" variant="outlined"> primary outlined </v-btn>
						<v-btn color="primary" class="ma-1" prepend-icon="mdi-check-circle"> prepend-icon </v-btn>
						<v-btn color="primary" class="ma-1" append-icon="mdi-exit-run"> append-icon </v-btn>
					</v-col>
					<v-col cols="12">
						<v-btn color="secondary" class="ma-1"> secondary </v-btn>
						<v-btn color="secondary" class="ma-1" variant="outlined"> secondary outlined </v-btn>
						<v-btn color="secondary" class="ma-1" prepend-icon="mdi-check-circle"> prepend-icon </v-btn>
						<v-btn color="secondary" class="ma-1" append-icon="mdi-exit-run"> append-icon </v-btn>
					</v-col>
					<v-col cols="12">
						<v-btn color="warning" class="ma-1"> warning </v-btn>
						<v-btn color="warning" class="ma-1" variant="outlined"> warning outlined </v-btn>
						<v-btn color="warning" class="ma-1" prepend-icon="mdi-check-circle"> prepend-icon </v-btn>
						<v-btn color="warning" class="ma-1" append-icon="mdi-exit-run"> append-icon </v-btn>
					</v-col>
					<v-col cols="12">
						<v-btn color="info" class="ma-1"> info </v-btn>
						<v-btn color="info" class="ma-1" variant="outlined"> info outlined </v-btn>
						<v-btn color="info" class="ma-1" prepend-icon="mdi-check-circle"> prepend-icon </v-btn>
						<v-btn color="info" class="ma-1" append-icon="mdi-exit-run"> append-icon </v-btn>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" class="ma-1">
						<v-btn
							prepend-icon="mdi-check-circle"
							color="primary-gradient"
							append-icon="mdi-account-circle"
							outlined
							@click="helloWorld"
						>
							<template v-slot:prepend> <v-icon>mdi-heart-settings-outline</v-icon> </template>
							primary-gradient
							<template v-slot:append> <v-icon>mdi-exit-run</v-icon> </template>
						</v-btn>
					</v-col>
					<v-col cols="12">
						<v-btn icon="mdi-open-in-new" class="ma-1" size="large" @click="onClickBtn" />
						<v-btn icon="mdi-open-in-new" color="secondary" class="ma-1" size="large" @click="onClickBtn" />
						<v-btn icon="mdi-open-in-new" color="primary" class="ma-1" size="large" @click="onClickBtn" />
						<v-btn icon="mdi-open-in-new" color="warning" class="ma-1" size="large" @click="onClickBtn" />
						<v-btn icon="mdi-open-in-new" color="info" class="ma-1" size="large" @click="onClickBtn" />
					</v-col>
				</v-row>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<style lang="scss" scoped></style>
