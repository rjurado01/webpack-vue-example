import DefaultLayout from 'js/layouts/default';

import 'js/vue-resource-config';

import router from 'js/router.js';
import store from 'js/vuex.js';
import i18n from 'js/i18n.js';
import Icon from 'vue-awesome';

// import Ionic from '@ionic/core';
// import {add, archive, mail} from '@ionic/vue/node_modules/ionicons/icons';
// import {addIcons} from '@ionic/vue/node_modules/ionicons';

/* https://github.com/ionic-team/ionic-docs/issues/446#issuecomment-583018126 */
import {defineCustomElements} from '@ionic/core/loader';

defineCustomElements(window).then(() => { /* Ionic is loaded! */ });

require('scss/main.scss');

Vue.router = router;
Vue.store = store;
Vue.i18n = i18n;
Vue.config.ignoredElements = [/^ion-/];

Vue.component('v-icon', Icon);
// Vue.use(Ionic);

// addIcons({
//   'ios-add': add.ios,
//   'md-add': add.md,
//   'ios-mail': mail.ios,
//   'md-mail': mail.md,
//   'ios-archive': archive.ios,
//   'md-archive': archive.md
// });

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
