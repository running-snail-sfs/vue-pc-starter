import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/Login.vue";
import Home from "../views/home/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    component: Login
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
