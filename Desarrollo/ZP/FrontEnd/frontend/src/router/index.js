import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
  },
  {
    path: "/servicios",
    name: "servicios",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Servicios.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
