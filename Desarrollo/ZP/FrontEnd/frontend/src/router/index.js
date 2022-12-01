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
  {
    path: "/iniciarsesion",
    name: "iniciarsesion",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IniciarSesion.vue"),
  },
  {
    path: "/registrate",
    name: "registrate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registrate.vue"),
  },
  {
    path: "/misperfilesusuario",
    name: "misperfilesusuario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MisPerfilesUsuario.vue"),
  },
  {
    path: "/solicitarperfilusuario",
    name: "solicitarperfilusuario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/SolicitarPerfilUsuario.vue"
      ),
  },
  {
    path: "/cuentasyperfilesadministrador",
    name: "cuentasyperfilesadministrador",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/CuentasYPerfilesAdministrador.vue"
      ),
  },
  {
    path: "/solicitudesadministrador",
    name: "solicitudesadministrador",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/SolicitudesAdministrador.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
