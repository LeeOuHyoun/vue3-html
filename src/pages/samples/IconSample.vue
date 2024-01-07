<script setup>
import { ref } from 'vue'
import { map } from 'lodash-es'
const vuetifyDefaultIcons = {
	$calendar: 'mdi-calendar',
	$cancel: 'mdi-close-circle',
	$checkboxIndeterminate: 'mdi-minus-box',
	$checkboxOff: 'mdi-checkbox-blank-outline',
	$checkboxOn: 'mdi-checkbox-marked',
	$clear: 'mdi-close-circle',
	$close: 'mdi-close',
	$collapse: 'mdi-chevron-up',
	$complete: 'mdi-check',
	$delete: 'mdi-close-circle',
	$delimiter: 'mdi-circle',
	$dropdown: 'mdi-menu-down',
	$edit: 'mdi-pencil',
	$error: 'mdi-close-circle',
	$expand: 'mdi-chevron-down',
	$eyeDropper: 'mdi-eyedropper',
	$file: 'mdi-paperclip',
	$first: 'mdi-page-first',
	$info: 'mdi-information',
	$last: 'mdi-page-last',
	$loading: 'mdi-cached',
	$menu: 'mdi-menu',
	$minus: 'mdi-minus',
	$next: 'mdi-chevron-right',
	$plus: 'mdi-plus',
	$prev: 'mdi-chevron-left',
	$radioOff: 'mdi-radiobox-blank',
	$radioOn: 'mdi-radiobox-marked',
	$ratingEmpty: 'mdi-star-outline',
	$ratingFull: 'mdi-star',
	$ratingHalf: 'mdi-star-half-full',
	$sortAsc: 'mdi-arrow-up',
	$sortDesc: 'mdi-arrow-down',
	$subgroup: 'mdi-menu-down',
	$success: 'mdi-check-circle',
	$unfold: 'mdi-unfold-more-horizontal',
	$warning: 'mdi-alert-circle',
}
const headers = ref([
	{ title: 'Alias', align: 'start', key: 'alias', width: 200 },
	{ title: 'Name', align: 'start', key: 'name', width: 200 },
	{ title: 'Preview', align: 'start', key: 'preview', width: 200 },
])
const virtualBoats = ref(map(vuetifyDefaultIcons, (name, alias) => ({ alias, name })))
</script>

<template>
	<v-container>
		<v-card variant="flat">
			<template v-slot:title>
				<a href="https://vuetifyjs.com/en/features/icon-fonts/#built-in-aliases" target="_blank">
					<strong class="text-red-lighten-1">
						<v-icon> mdi-open-in-new </v-icon>
						Vuetify Icon API
					</strong>
				</a>
				<v-divider></v-divider>
			</template>

			<template v-slot:subtitle>
				<v-alert icon="mdi-vector-square" class="align-center">
					<template v-slot:text>
						<v-btn
							href="https://pictogrammers.com/library/mdi/"
							flat
							color="transparent"
							max-height="30"
							target="_blank"
							append-icon="mdi-open-in-new"
							class="text-blue-darken-4 px-1"
						>
							Material Design Icons
						</v-btn>
					</template>
				</v-alert>
			</template>

			<v-card-item>
				<v-data-table-virtual
					:headers="headers"
					:items="virtualBoats"
					fixed-header
					item-key="alias"
					height="500"
					hover
				>
					<template v-slot:[`item.preview`]="{ item }">
						<v-icon size="small" :icon="item.alias" />
					</template>
				</v-data-table-virtual>
			</v-card-item>
		</v-card>
	</v-container>
</template>

<style lang="scss" scoped></style>