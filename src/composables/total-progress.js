import { computed } from 'vue'
import {
	calculateCompletionPercentage,
	trackedActivities,
} from '../modules/activities.js'
import { getProgressColorClass } from '../utils/functions.js'
import {
	calculateTrackedActivitySeconds,
	timelineItems,
} from '../modules/timeline-items.js'

export function useTotalProgress() {
	const colorClass = computed(() => getProgressColorClass(percentage.value))

	const percentage = computed(() =>
		calculateCompletionPercentage(totalTrackedSeconds.value)
	)

	const totalTrackedSeconds = computed(() => {
		return trackedActivities.value
			.map((activity) =>
				Math.min(
					calculateTrackedActivitySeconds(
						timelineItems.value,
						activity
					),
					activity.secondsToComplete
				)
			)
			.reduce((total, seconds) => total + seconds, 0)
	})

	return {
		percentage,
		colorClass,
	}
}
