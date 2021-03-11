import DefaultLayout from 'js/layouts/default';

import store from 'js/store.js';
import router from 'js/router.js';

require('scss/main.scss');

Vue.createApp({
  setup() {
    console.error('Initialized vue App !!')
  },
  components: {
    DefaultLayout
  }
}).use(store).use(router).mount('#app')
