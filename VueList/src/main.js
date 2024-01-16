import './assets/styles.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
function vueRouter () {
    return { router }
}

const pinia = createPinia()
    .use(vueRouter)

const app = createApp(App)
    .use(router)
    .use(pinia)

app.config.performance = true
app.mount('#app')
