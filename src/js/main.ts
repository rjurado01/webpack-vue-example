import DefaultLayout from 'js/layouts/default'

import store from 'js/store.js'
import router from 'js/router.js'
import i18n from 'js/i18n.js'

require('scss/main.scss')

import { createApp } from 'vue'

createApp({
  setup() {
    console.info('Initialized vue App !!')
  },
  components: {
    DefaultLayout
  }
}).use(store).use(router).use(i18n).mount('#app')
