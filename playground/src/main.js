import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VFC from '@fedorae/vfc'
import '@fedorae/vfc/dist/@fedorae/vfc.css'

Vue.config.productionTip = false
Vue.prototype.$vuetify = { rtl: false }
Vue.use(VFC)

new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount('#app')
