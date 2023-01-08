import { createApp } from 'vue'
import App from './App.vue'

import './index.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSelector, BiChevronUp, BiChevronDown, BiX } from "oh-vue-icons/icons";

addIcons(HiSelector, BiChevronUp, BiChevronDown, BiX);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");

// createApp(App).mount('#app')
