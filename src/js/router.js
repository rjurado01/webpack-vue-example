import { createWebHashHistory, createRouter } from "vue-router";
import Home from "js/pages/home/index";
import About from "js/pages/about/index";

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

export default router;
