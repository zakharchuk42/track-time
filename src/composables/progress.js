import { computed } from 'vue'
import { calculateActivityCompletionPercentage } from '../modules/activities.js'
import {
	calculateTrackedActivitySeconds,
	timelineItems,
} from '../modules/timeline-items.js'
import { getProgressColorClass } from '../utils/functions.js'

export function useProgress(activity) {
	const colorClass = computed(() => getProgressColorClass(percentage.value))
	const percentage = computed(() =>
		calculateActivityCompletionPercentage(
			activity,
			trackedActivitySeconds.value
		)
	)
	const trackedActivitySeconds = computed(() => {
		return calculateTrackedActivitySeconds(timelineItems.value, activity)
	})

	return {
		percentage,
		trackedActivitySeconds,
		colorClass,
	}
}
