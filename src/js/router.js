import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./pages/home/index.js";
import About from "./pages/about/index.js";

import { inject } from 'vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((_to, _from, next) => {
  console.log(inject('auth'))

  next()
})

export default {
  install(app, _options) {
    console.log('router / global:', app.config.globalProperties.global)
    console.log('router / injected:', inject('injected'))
    router.install(app)
  }
};
