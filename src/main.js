import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomeComponent from "@/components/Home";
import VenuesComponent from "@/components/Venues";
import store from './store/index'

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: HomeComponent },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
