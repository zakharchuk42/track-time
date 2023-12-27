<script setup>
import BaseButton from './BaseButton.vue'
import { isActivityValid } from '../utils/validators.js'
import {
	BUTTON_TYPE_DANGER,
	PERIOD_SELECT_OPTIONS,
} from '../utils/constants.js'
import RemainingActivitySeconds from './RemainingActivitySeconds.vue'
import BaseSelect from './BaseSelect.vue'
import { deleteActivity, updateActivity } from '../modules/activities.js'
import {
	resetTimelineItemActivities,
	timelineItems,
} from '../modules/timeline-items.js'
import BaseIcon from './BaseIcon.vue'
import { ICON_TRASH } from '../utils/icons.js'

defineProps({
	activity: {
		required: true,
		type: Object,
		validator: isActivityValid,
	},
})

function deleteAndResetActivity(activity) {
	resetTimelineItemActivities(timelineItems.value, activity)
	deleteActivity(activity)
}
</script>

<template>
	<li class="flex flex-col gap-2 p-4">
		<div class="flex items-center gap-2">
			<BaseButton
				class="font-mono"
				:type="BUTTON_TYPE_DANGER"
				@click="deleteAndResetActivity(activity)"
			>
				<BaseIcon :name="ICON_TRASH" />
			</BaseButton>
			<span class="truncate text-xl">{{ activity.name }}</span>
		</div>
		<div class="flex gap-2">
			<BaseSelect
				class="font-mono grow"
				placeholder="hh:mm"
				:options="PERIOD_SELECT_OPTIONS"
				:selected="activity.secondsToComplete || null"
				@select="
					updateActivity(activity, { secondsToComplete: $event || 0 })
				"
			/>
			<RemainingActivitySeconds
				v-if="activity.secondsToComplete"
				:activity="activity"
			/>
		</div>
	</li>
</template>
