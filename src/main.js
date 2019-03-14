import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import YmapPlugin from 'vue-yandex-maps'
import 'vuetify/dist/vuetify.min.css'

Vue.use(YmapPlugin)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
