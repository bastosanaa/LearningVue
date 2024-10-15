import Vue from 'vue'
import App from './App.vue'
import AppContador from './components/AppContador.vue'

Vue.config.productionTip = false
Vue.component('app-contador', AppContador)

new Vue({
  render: h => h(App),
}).$mount('#app')
