import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
import vuetify from './plugins/vuetify';
import StarRating from 'vue-star-rating'
import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'

Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.component('star-rating', StarRating)
Vue.use(VueMoment)
// moment.tz.setDefault('Asia/Seoul')
// // Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  vuetify,
  components: {
    StarRating
  },
  render: h => h(App)
}).$mount('#app')


