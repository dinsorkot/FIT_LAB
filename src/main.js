import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//css
import './asset/main.css'
//firebase
import './firebase.js';
// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.css";
// Import all of Bootstrap's JS
import "bootstrap/dist/js/bootstrap.js";
// Import all of icon bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
