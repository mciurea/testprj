import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import router from './router'
import store from './store/store'
import messages from './store/messages'
Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
})

new Vue({
  data () {
    return { langs: ['ja', 'en'] }
  },
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
