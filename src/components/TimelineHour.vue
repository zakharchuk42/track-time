<script setup>
import { isHourValid } from '../utils/validators.js'
import { scrollToCurrentHour } from '../modules/timeline-items.js'
import { now } from '../modules/time.js'
import { computed } from 'vue'

const props = defineProps({
	hour: {
		required: true,
		type: Number,
		validator: isHourValid,
	},
})

const classes = computed(() => [
	'absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg ',
	props.hour === now.value.getHours()
		? 'bg-purple-900 font-black text-white'
		: 'bg-gray-100 text-gray-500',
])

const formattedHour = `${props.hour.toString().padStart(2, '0')}:00`
</script>

<template>
	<a href="#" :class="classes" @click.prevent="scrollToCurrentHour">{{
		formattedHour
	}}</a>
</template>
