import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as components from './components'

const componentsList = components?.default

const VuetifyComponents = {
    install(Vue) {
        Object.keys(componentsList).forEach((name) => {
            Vue.component(name, componentsList[name])
        })
    },
}

export default VuetifyComponents

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuetifyComponents)
}

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount('#app')
