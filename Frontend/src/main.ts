import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'

const app = createApp(App)
const store = createPinia()

app.use(router)
app.use(store)
app.use(VueQueryPlugin)
app.mount('#app')