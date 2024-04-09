<script setup></script>

<template>
	<v-navigation-drawer order="1" class="sub-s" width="180">
		<v-list active-class="activeMnu">
			<v-list-item link title="Button" slim prepend-icon="mdi-alpha-b-box" to="button-sample" />
			<v-list-item link title="Pinia" slim prepend-icon="mdi-fruit-pineapple" to="pinia-sample" />
			<v-list-item link title="Icon" slim prepend-icon="mdi-vector-square" to="icon-sample" />
			<v-list-item link title="Animejs" slim prepend-icon="mdi-movie-filter-outline" to="animejs-sample" />
			<v-list-item link title="VueuseInfinite" slim prepend-icon="mdi-infinity" to="vue-use-sample" />
			<v-list-item link title="Scrollbar" slim prepend-icon="mdi-arrow-up-down-bold" to="vue-scrollbar-sample" />
			<v-list-item link title="RouterHistory" slim prepend-icon="mdi-history" to="vue-router-history-sample" />
		</v-list>
	</v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
