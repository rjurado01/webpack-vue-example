import DefaultLayout from 'js/layouts/default';

import 'js/vue-resource-config';

import router from 'js/router.js';
import store from 'js/vuex.js';
import i18n from 'js/i18n.js';
import Icon from 'vue-awesome';

require('scss/main.scss');

Vue.router = router;
Vue.store = store;
Vue.i18n = i18n;

Vue.component('v-icon', Icon);

// Create and mount the root instance.
// Make sure to inject the router with the router option to make the whole app router-aware.
new Vue({
  router,
  store,
  i18n,
  components: {
    DefaultLayout
  }
}).$mount('#app');
