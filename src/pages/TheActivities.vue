<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import TheActivityForm from '../components/TheActivityForm.vue'
import TheActivityEmptyState from '../components/TheActivityEmptyState.vue'
import { activities } from '../modules/activities.js'
</script>

<template>
	<div class="flex flex-col grow">
		<ul v-if="activities.length" class="divide-y grow">
			<ActivityItem
				v-for="activity in activities"
				:key="activity.id"
				:activity="activity"
			/>
		</ul>
		<TheActivityEmptyState v-else />
		<TheActivityForm />
	</div>
</template>
