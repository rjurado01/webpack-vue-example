import VueRouter from 'vue-router';

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
  { path: '*', redirect: '/home' }
]

const router = new VueRouter({routes});

const checkPermission = (route) => {
  return !route.meta.auth === true;
};

router.beforeEach((to, from, next) => {
  next(checkPermission(to));
});

export default router;
