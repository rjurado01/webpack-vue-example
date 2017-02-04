import VueRouter from "vue-router";
import VueI18n from "vue-i18n";

require('scss/main.scss');


/*--- LOCALES ---*/

import esLocales from "locales/es.json";
import enLocales from "locales/en.json";

var locales = {
  en: enLocales,
  es: esLocales
}

Vue.use(VueI18n)

// set lang
Vue.config.lang = 'es'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})


/*-- ROUTER --*/

import Layout from "./components/layout/layout.js";
import Home from "./pages/home/home.js";

Vue.use(VueRouter);

// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Layout, redirect: 'home',
    children: [
      { path: 'home', component: Home }
    ]
  },
  { path: '*', redirect: '/home' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
