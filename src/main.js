import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/Home'
import VenueDetailPage from '@/pages/VenueDetail'
import PreviewReviewPage from '@/pages/PreviewReview'
import ThankYouPage from '@/pages/ThankYou'
import store from './store/index'
import routeStringHelper from '@/helpers/routeStringHelper'

Vue.config.productionTip = false

const routes = [
  { path: routeStringHelper.venuesPath, name: routeStringHelper.homePageName, component: HomePage, },
  { path: routeStringHelper.venuesDetailsPath, name: routeStringHelper.VenueDetailPageName, component: VenueDetailPage },
  { path: routeStringHelper.previewPath, name: routeStringHelper.PreviewReviewPageName, component: PreviewReviewPage },
  { path: routeStringHelper.ThankYouPageName, name: routeStringHelper.ThankYouPageName, component: ThankYouPage },
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
