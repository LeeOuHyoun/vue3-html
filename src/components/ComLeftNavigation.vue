<script setup>
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia'
const store = useStore()
const { naviMenus } = storeToRefs(store)
</script>

<template>
	<v-navigation-drawer order="1" class="sub-s" width="180">
		<v-list>
			<v-list-item
				v-for="item in naviMenus"
				:key="item.to"
				:prepend-icon="item.icon"
				:to="item.to"
				:title="item.title"
			/>
		</v-list>
	</v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
