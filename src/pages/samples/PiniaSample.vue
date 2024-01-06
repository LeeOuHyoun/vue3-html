<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores'
import { isEmpty, trim, size } from 'lodash-es'
const store = useStore()
const { getStoreTest } = storeToRefs(store)
const testText = ref(getStoreTest.value)
const setStoreTest = () => {
	if (isEmpty(trim(testText.value)) || size(trim(testText.value)) > 20) {
		alert('잘 좀 입력 해 주세요!!!')
		testText.value = getStoreTest.value
	} else {
		store.setStoreTest(testText.value)
	}
}
const rules = {
	required: value => !isEmpty(trim(value)) || '뭐 좀 입력 해 주세요!!!(※공백말고)',
	maxErrors: value => 20 > size(trim(value)) || '그건 좀 긴거 같으네요!!!',
}
</script>

<template>
	<v-container>
		<v-card variant="flat">
			<template v-slot:title>
				<a href="https://pinia.vuejs.kr/" target="_blank">
					<strong class="text-red-lighten-1">
						<v-icon> mdi-open-in-new </v-icon>
						Pinia
					</strong>
				</a>
				<v-divider></v-divider>
			</template>
			<v-card-item>
				<div class="ma-2">{{ getStoreTest }}</div>
				<v-divider length="200" class="border-opacity-100 mb-3"></v-divider>
				<v-text-field
					v-model="testText"
					append-icon="mdi-send"
					clear-icon="mdi-close-circle"
					clearable
					label="StoreTest"
					type="text"
					hint="스토어(SessionStorage)에 데이터를 설정 합니다."
					max-errors="5"
					:rules="[rules.required, rules.maxErrors]"
					@click:append="setStoreTest"
				/>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<style lang="scss" scoped></style>
