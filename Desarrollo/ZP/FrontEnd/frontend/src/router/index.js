import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio,
    meta: {
      title: "Inicio | Zorrito +",
    },
  },
  {
    path: "/servicios",
    name: "servicios",
    // route level code-splitting
    // this generates a separate chunk (servicios.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "servicios" */ "../views/Servicios.vue"),
    meta: {
      title: "Servicios | Zorrito +",
    },
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
    meta: {
      title: "Iniciar sesión | Zorrito +",
    },
  },
  {
    path: "/registrate",
    name: "registrate",
    // route level code-splitting
    // this generates a separate chunk (registrate.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "registrate" */ "../views/Registrate.vue"),
    meta: {
      title: "Regístrate | Zorrito +",
    },
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
    meta: {
      title: "Mis perfiles | Zorrito +",
    },
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
    meta: {
      title: "Solicitar perfil | Zorrito +",
    },
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
    meta: {
      title: "Solicitudes | Zorrito +",
    },
  },
  {
    path: "/vermassolicitudesadministrador/:solicitud",
    name: "vermassolicitudesadministrador",
    // route level code-splitting
    // this generates a separate chunk (vermassolicitudesadministrador.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "vermassolicitudesadministrador" */ "../views/VerMasSolicitudesAdministrador.vue"
      ),
    meta: {
      title: "Ver más de la solicitud | Zorrito +",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
