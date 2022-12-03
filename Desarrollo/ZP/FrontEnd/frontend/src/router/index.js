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
    // this generates a separate chunk (servicios.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "servicios" */ "../views/Servicios.vue"),
  },
  {
    path: "/iniciarsesion",
    name: "iniciarsesion",
    // route level code-splitting
    // this generates a separate chunk (iniciarsesion.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "iniciarsesion" */ "../views/IniciarSesion.vue"
      ),
  },
  {
    path: "/registrate",
    name: "registrate",
    // route level code-splitting
    // this generates a separate chunk (registrate.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "registrate" */ "../views/Registrate.vue"),
  },
  {
    path: "/misperfilesusuario",
    name: "misperfilesusuario",
    // route level code-splitting
    // this generates a separate chunk (misperfilesusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "misperfilesusuario" */ "../views/MisPerfilesUsuario.vue"
      ),
  },
  {
    path: "/solicitarperfilusuario",
    name: "solicitarperfilusuario",
    // route level code-splitting
    // this generates a separate chunk (solicitarperfilusuario.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "solicitarperfilusuario" */ "../views/SolicitarPerfilUsuario.vue"
      ),
  },
  {
    path: "/cuentasyperfilesadministrador",
    name: "cuentasyperfilesadministrador",
    // route level code-splitting
    // this generates a separate chunk (cuentasyperfilesadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "cuentasyperfilesadministrador" */ "../views/CuentasYPerfilesAdministrador.vue"
      ),
  },
  {
    path: "/solicitudesadministrador",
    name: "solicitudesadministrador",
    // route level code-splitting
    // this generates a separate chunk (solicitudesadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "solicitudesadministrador" */ "../views/SolicitudesAdministrador.vue"
      ),
  },
  {
    path: "/vermassolicitudesadministrador/:solicitante",
    name: "vermassolicitudesadministrador",
    // route level code-splitting
    // this generates a separate chunk (vermassolicitudesadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "vermassolicitudesadministrador" */ "../views/VerMasSolicitudesAdministrador.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
