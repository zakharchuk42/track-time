<script setup>
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'
import {
	isSelectValueValid,
	isUndefinedOrNull,
	validateSelectOptions,
} from '../utils/validators.js'
import { BUTTON_TYPE_NEUTRAL } from '../utils/constants.js'
import { normalizeSelectValue } from '../utils/functions.js'
import BaseIcon from './BaseIcon.vue'
import { ICON_X_MARK } from '../utils/icons.js'

const props = defineProps({
	options: {
		required: true,
		type: Array,
		validator: validateSelectOptions,
	},
	placeholder: {
		required: true,
		type: String,
	},
	selected: {
		type: [Number, String],
	},
})

const emit = defineEmits({
	select: isSelectValueValid,
})

const isNotSelected = computed(() => {
	return isUndefinedOrNull(props.selected)
})

function select(value) {
	emit('select', normalizeSelectValue(value))
}
</script>

<template>
	<div class="flex gap-2">
		<BaseButton @click="select(null)" :type="BUTTON_TYPE_NEUTRAL">
			<BaseIcon :name="ICON_X_MARK" />
		</BaseButton>
		<select
			class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
			@change="select($event.target.value)"
		>
			<option :selected="isNotSelected" disabled value="">
				{{ placeholder }}
			</option>
			<option
				v-for="{ value, label } in options"
				:key="value"
				:value="value"
				:selected="value === selected"
			>
				{{ label }}
			</option>
		</select>
	</div>
</template>
