<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../utils/constants.js'
</script>

<template>
	<nav class="sticky bottom-0 z-20 bg-white border-t">
		<ul class="flex item-center justify-around">
			<NavItem
				v-for="navItem in NAV_ITEMS"
				:key="navItem.page"
				:nav-item="navItem"
			/>
		</ul>
	</nav>
</template>
