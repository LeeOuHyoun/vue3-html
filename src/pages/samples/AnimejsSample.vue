<script setup>
import { ref } from 'vue'
// import anime from 'animejs/lib/anime.es.js'
import { useMotions } from '@vueuse/motion'

const motions = useMotions()
const onClickBtn = () => {}
const isShow = ref(true)
const log = console.log
</script>

<template>
	<v-container>
		<v-card variant="flat">
			<template v-slot:title>
				<a href="https://vuetifyjs.com/en/components/buttons/#usage" target="_blank">
					<strong class="text-red-lighten-1">
						<v-icon> mdi-open-in-new </v-icon>
						AnimeJs API
					</strong>
				</a>
				<!-- 아래 라인 -->
				<v-divider></v-divider>
			</template>
			<v-card-item>
				<v-row>
					<v-col
						cols="12"
						style="background-color: palevioletred; height: 400px"
						class="d-flex align-center pl-10"
					>
						<transition
							:css="false"
							@leave="
								(_el, done) => {
									motions.cube.leave(done)
								}
							"
						>
							<div
								v-if="isShow"
								v-motion="'cube'"
								:initial="{ y: 400, x: 0, opacity: 0 }"
								:enter="{ y: 0, opacity: 1 }"
								:leave="{ y: -400, opacity: 0 }"
								style="width: 50px; height: 50px; background-color: aquamarine"
							/>
						</transition>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-btn class="ma-1" @click="isShow = !isShow"> toggle: {{ isShow }} </v-btn>
					</v-col>
				</v-row>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<style lang="scss" scoped></style>
