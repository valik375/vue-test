import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import SurveyComponent from "@/components/Survey";

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: HelloWorld },
  { path: '/survey', name: 'survey', component: SurveyComponent }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
