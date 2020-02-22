import VueRouter from 'vue-router';

import Login from "./pages/login/index.js";
import Home from "./pages/home/index.js";

Vue.use(VueRouter);

const RouteParent = {render(c) { return c('router-view'); }};

const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      layout: 'default',
      auth: false
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      layout: 'blank',
      auth: false
    }
  },
  { path: '*', redirect: '/login' }
]

const router = new VueRouter({routes});

const checkPermission = (route) => {
  return !route.meta.auth === true;
};

router.beforeEach((to, from, next) => {
  next(checkPermission(to));
});

export default router;
