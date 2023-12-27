<script setup>
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'
import { isTimelineItemValid } from '../utils/validators.js'
import TimelineStopwatch from './TimelineStopwatch.vue'
import { activitySelectOptions } from '../modules/activities.js'
import { updateTimelineItem } from '../modules/timeline-items.js'

defineProps({
	timelineItem: {
		required: true,
		type: Object,
		validator: isTimelineItemValid,
	},
})
</script>

<template>
	<li
		class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4"
	>
		<TimelineHour :hour="timelineItem.hour" />
		<BaseSelect
			placeholder="Rest"
			:selected="timelineItem.activityId"
			:options="activitySelectOptions"
			@select="updateTimelineItem(timelineItem, { activityId: $event })"
		/>
		<TimelineStopwatch :timeline-item="timelineItem" />
	</li>
</template>
