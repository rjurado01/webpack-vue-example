import DefaultLayout from 'js/layouts/default'

import store from 'js/store.js'
import router from 'js/router.js'
import i18n from 'js/i18n.js'
import Auth from 'js/services/auth'

require('scss/main.scss')

Vue.createApp({
  setup() {
    console.info('Initialized vue App !!')
  },
  components: {
    DefaultLayout
  }
}).use(store)
  .use(Auth)
  .use(router)
  .use(i18n)
  .mount('#app')
