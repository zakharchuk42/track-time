<script setup>
import { nextTick, ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { id } from '../utils/functions.js'
import { createActivity } from '../modules/activities.js'
import BaseIcon from './BaseIcon.vue'
import { ICON_PLUS } from '../utils/icons.js'

const name = ref('')

async function submit() {
	createActivity({
		id: id(),
		name: name.value,
		secondsToComplete: 0,
	})

	name.value = ''

	await nextTick(() => {
		window.scrollTo(0, document.body.scrollHeight)
	})
}
</script>

<template>
	<form
		@submit.prevent="submit"
		class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
	>
		<input
			type="text"
			v-model="name"
			class="w-full rounded border px-4 text-xl"
			placeholder="Activity name"
		/>
		<BaseButton placeholder="" options="" :disabled="name.trim() === ''">
			<BaseIcon :name="ICON_PLUS" />
		</BaseButton>
	</form>
</template>
