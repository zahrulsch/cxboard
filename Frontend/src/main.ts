import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import VueGapi from 'vue-gapi'

const app = createApp(App)
const store = createPinia()

app.use(VueGapi, {
  apiKey: 'AIzaSyA6BwB4iZAHBXE7n7JNoLDUKIq0o1cnS8U',
  clientId: '680985954441-79brl8t5ir27uhkrapqa63ckkelnq562.apps.googleusercontent.com',
  prompt: 'select_account',
  scope: 'profile email'
})
app.use(router)
app.use(store)
app.use(VueQueryPlugin)
app.mount('#app')