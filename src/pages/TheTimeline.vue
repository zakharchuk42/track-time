<script setup>
import { onActivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
	timelineItems,
	timelineItemRefs,
	scrollToCurrentHour,
} from '../modules/timeline-items.js'
import TheTimelineIndicator from '../components/TheTimelineIndicator.vue'

onActivated(scrollToCurrentHour)
</script>

<template>
	<div class="mt-10 relative">
		<TheTimelineIndicator />
		<ul>
			<TimelineItem
				v-for="timelineItem in timelineItems"
				ref="timelineItemRefs"
				:key="timelineItem.hour"
				:timeline-item="timelineItem"
			/>
		</ul>
	</div>
</template>
