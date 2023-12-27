<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import {
	BUTTON_TYPE_DANGER,
	BUTTON_TYPE_SUCCESS,
	BUTTON_TYPE_WARNING,
} from '../utils/constants.js'
import { isTimelineItemValid } from '../utils/validators.js'
import { formatSeconds } from '../utils/functions.js'
import { ICON_ARROW, ICON_PAUSE, ICON_PLAY } from '../utils/icons.js'

import { now } from '../modules/time.js'
import {
	resetTimelineItemTimer,
	startTimelineItemTimer,
	stopTimelineItemTimer,
} from '../modules/timeline-item-timer.js'
import { activeTimelineItem } from '../modules/timeline-items.js'

defineProps({
	timelineItem: {
		required: true,
		type: Object,
		validator: isTimelineItemValid,
	},
})
</script>

<template>
	<div class="flex w-full gap-2">
		<BaseButton
			:type="BUTTON_TYPE_DANGER"
			:disabled="!timelineItem.activitySeconds"
			@click="resetTimelineItemTimer(timelineItem)"
		>
			<BaseIcon :name="ICON_ARROW" />
		</BaseButton>
		<div
			class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl"
		>
			{{ formatSeconds(timelineItem.activitySeconds) }}
		</div>
		<BaseButton
			v-if="timelineItem === activeTimelineItem"
			@click="stopTimelineItemTimer"
			:type="BUTTON_TYPE_WARNING"
		>
			<BaseIcon :name="ICON_PAUSE" />
		</BaseButton>
		<BaseButton
			v-else
			@click="startTimelineItemTimer(timelineItem)"
			:type="BUTTON_TYPE_SUCCESS"
			:disabled="timelineItem.hour !== now.getHours()"
		>
			<BaseIcon :name="ICON_PLAY" />
		</BaseButton>
	</div>
</template>
