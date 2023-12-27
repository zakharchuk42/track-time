<script setup>
import { ICONS } from '../utils/icons.js'
import { isIconValid } from '../utils/validators.js'

defineProps({
	name: {
		type: String,
		required: true,
		validator: isIconValid,
	},
})
</script>

<template>
	<component :is="ICONS[name]" :class="$attrs.class || 'h-8'" />
</template>
