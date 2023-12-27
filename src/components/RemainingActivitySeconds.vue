<script setup="">
import { formatSecondsWithSign } from '../utils/functions.js'
import { isActivityValid } from '../utils/validators.js'
import { computed } from 'vue'
import {
	calculateTrackedActivitySeconds,
	timelineItems,
} from '../modules/timeline-items.js'

const props = defineProps({
	activity: {
		required: true,
		type: Object,
		validator: isActivityValid,
	},
})

const colorClasses = computed(() => [
	'flex items-center rounded px-2 font-mono text-xl',
	remainingSeconds.value < 0
		? 'bg-red-100 text-red-600'
		: 'bg-green-100 text-green-600',
])

const remainingSeconds = computed(
	() =>
		calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
		props.activity.secondsToComplete
)
</script>

<template>
	<div :class="colorClasses">
		{{ formatSecondsWithSign(remainingSeconds) }}
	</div>
</template>
