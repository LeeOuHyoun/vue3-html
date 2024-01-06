<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores'
const store = useStore()
const { getStoreTest } = storeToRefs(store)
const testText = ref('')
</script>

<template>
	<v-container>
		<v-card variant="flat">
			<template v-slot:title>
				<strong class="text-red-lighten-1"> breadcrumbs-link-1 </strong>
				<v-divider></v-divider>
			</template>
			<v-card-item>
				{{ getStoreTest }}
				<v-text-field
					v-model="testText"
					append-icon="mdi-send"
					clear-icon="mdi-close-circle"
					clearable
					label="StoreTest"
					type="text"
					@click:append="store.setStoreTest(testText)"
				/>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<style lang="scss" scoped></style>
