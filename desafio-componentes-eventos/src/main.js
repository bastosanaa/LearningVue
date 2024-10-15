import Vue from 'vue'
import App from './App.vue'
import UserTable from './components/UserTable.vue'

Vue.config.productionTip = false
Vue.component(UserTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
