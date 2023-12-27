<script setup>
import TheNav from './TheNav.vue'
import TheHeader from './TheHeader.vue'
import { currentPage, routes } from '../modules/router.js'
</script>

<template>
	<TheHeader />

	<main class="flex flex-grow flex-col">
		<KeepAlive>
			<component :is="routes[currentPage]" />
		</KeepAlive>
	</main>

	<TheNav />
</template>
