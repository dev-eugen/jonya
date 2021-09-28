import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css' 

// global, utils, pluguins, helpers
import global from "@/global"
import helpers from "@/helpers"


const app = createApp(App).use(router).use(store)  

global(app)
helpers(app)


app.mount('#app')
