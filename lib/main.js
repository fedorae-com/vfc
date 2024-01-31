/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)

registerPlugins(app)

import * as components from './components'

const componentList = components?.default

const VuetifyComponents = {
    install(app) {
        Object.keys(componentList).forEach((name) => {
           app.component(name, componentList[name])
        })
    },
}
 
 
export default VuetifyComponents
