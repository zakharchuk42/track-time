<script setup>
import { HUNDRED_PERCENT, PAGE_PROGRESS } from '../utils/constants.js'
import { navigate } from '../modules/router.js'
import BaseIcon from './BaseIcon.vue'
import { ICON_CHECK } from '../utils/icons.js'
import { useTotalProgress } from '../composables/total-progress.js'

const { colorClass, percentage } = useTotalProgress()
</script>

<template>
	<a
		:href="`#${PAGE_PROGRESS}`"
		@click="navigate(PAGE_PROGRESS)"
		class="text-sm"
	>
		<div
			v-if="percentage < HUNDRED_PERCENT"
			class="flex items-center gap-1"
		>
			<div>
				Progress: <span class="font-mono">{{ percentage }}%</span>
			</div>
			<div :class="`h-3 w-3 rounded-full ${colorClass}`" />
		</div>
		<div v-else class="flex items-center gap-1">
			<BaseIcon :name="ICON_CHECK" class="h-7 text-green-500" />
			Day complete!
		</div>
	</a>
</template>
