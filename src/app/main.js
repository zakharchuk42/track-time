import { createApp } from 'vue'

import './style.css'
import App from '../components/App.vue'
import { syncState } from '../modules/storage.js'
import { startCurrentDateTimer } from '../modules/time.js'

syncState()

startCurrentDateTimer()

document.addEventListener('visibilitychange', () => {
	syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')
