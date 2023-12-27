<script setup>
import { PAGE_TIMELINE } from '../utils/constants.js'
import { currentPage, navigate } from '../modules/router.js'
import { scrollToCurrentHour } from '../modules/timeline-items.js'
import BaseIcon from './BaseIcon.vue'
import { ICON_CLOCK } from '../utils/icons.js'

function handleClick() {
	currentPage.value === PAGE_TIMELINE
		? scrollToCurrentHour(true)
		: navigate(PAGE_TIMELINE)
}
</script>

<template>
	<a :href="`#${PAGE_TIMELINE}`" @click="handleClick">
		<div class="flex items-center gap-2 text-purple-900">
			<BaseIcon :name="ICON_CLOCK" />
			<span class="font-bold text-2xl">Track Time</span>
		</div>
	</a>
</template>
