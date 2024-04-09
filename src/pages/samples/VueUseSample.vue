<script setup>
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
import { range, last } from 'lodash-es'

const el = ref(null)
const data = ref(new Array(10).fill(null).map((_v, idx) => idx))

const canLoadMore = ref(true)
const loadMore = () => {
	const lastNm = last(data.value)
	data.value.push(...range(lastNm + 1, lastNm + 10))
	if (data.value.length > 200) canLoadMore.value = false
	console.log('onLoad!!!')
}
useInfiniteScroll(el, loadMore, {
	distance: 10,
	canLoadMore: () => {
		console.log('=====>>> ', canLoadMore.value)
		return canLoadMore.value
	},
})
</script>

<template>
	<v-container>
		<v-card variant="flat">
			<template v-slot:title>
				<a href="https://vueuse.org/" target="_blank">
					<strong class="text-red-lighten-1">
						<v-icon> mdi-open-in-new </v-icon>
						Vueuse
					</strong>
				</a>
				<v-divider></v-divider>
			</template>
			<v-card-item>
				<div class="ma-2">InfiniteScroll</div>
				<v-divider length="200" class="border-opacity-100 mb-3"></v-divider>
				<v-row>
					<v-col col="12">
						<div ref="el" style="height: 100px; width: 500px; overflow-y: scroll">
							<div v-for="item in data" :key="item">
								{{ item }}
							</div>
						</div>
					</v-col>
				</v-row>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<style lang="scss" scoped></style>
