// import './assets/main.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserPlus,faSignInAlt,faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons'
import '@/services/AxiosInterceptorSetup'
library.add(faUserPlus,faSignInAlt,faSignOutAlt,faUser)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')