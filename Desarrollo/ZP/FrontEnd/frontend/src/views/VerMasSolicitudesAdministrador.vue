<script>
export default {
  data() {
    return {
      solicitante: JSON.parse(this.$route.params.solicitante),
      isModalContainerShow: false,
    };
  },
  methods: {
    perfilCard: function () {
      switch (this.solicitante.Plataforma) {
        case "Netflix":
          return "perfil-card--f84440";
        case "Movistar Play":
          return "perfil-card--009FF7";
        case "Disney Plus":
          return "perfil-card--05009D";
        case "Star Plus":
          return "perfil-card--FF5400";
        case "HBO Max":
          return "perfil-card--9200BB";
        case "Prime Video":
          return "perfil-card--D0009C";
        case "Spotify":
          return "perfil-card--18D860";
      }
    },
    perfilText: function () {
      switch (this.solicitante.Plataforma) {
        case "Netflix":
          return "perfil-text--f84440";
        case "Movistar Play":
          return "perfil-text--009FF7";
        case "Disney Plus":
          return "perfil-text--05009D";
        case "Star Plus":
          return "perfil-text--FF5400";
        case "HBO Max":
          return "perfil-text--9200BB";
        case "Prime Video":
          return "perfil-text--D0009C";
        case "Spotify":
          return "perfil-text--18D860";
      }
    },
    mostrarModal: function () {
      this.isModalContainerShow = true;
    },
    cerrarModal: function () {
      this.isModalContainerShow = false;
    },
  },
};
</script>
<template>
  <div class="vermassolicitudesadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center p-0 lh-base text-uppercase m-0">
        Solicitudes
      </h1>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5" :class="perfilCard()">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center"
          >
            <div class="text-center user-icon-perfil">
              <img
                src="../assets/images/user--black.png"
                alt="Foto de perfil"
                class="w-100 pb-2"
              />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-8 d-flex align-items-center">
            <div class="w-100">
              <div class="row">
                <div
                  class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
                  :class="perfilText()"
                >
                  Nombres del solicitante:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitante.Nombres }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
                  :class="perfilText()"
                >
                  Apellidos del solicitante:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
                >
                  {{ solicitante.Apellidos }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
                  :class="perfilText()"
                >
                  Teléfono de contacto:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitante.TelefonoContacto }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
                  :class="perfilText()"
                >
                  DNI:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitante.DNI }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
                  :class="perfilText()"
                >
                  Plataforma:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitante.Plataforma }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
                  :class="perfilText()"
                >
                  Fecha de inicio:
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitante.FechaInicio }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
                  :class="perfilText()"
                >
                  Tiempo de duración (en meses):
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitante.TiempoDuracion }}
                </div>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
                  :class="perfilText()"
                >
                  Captura de pago (URL):
                </div>
                <div
                  class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto"
                >
                  {{ solicitante.CapturaPago }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-center justify-content-center flex-wrap">
          <button
            type="button"
            id="button--aceptar"
            v-on:click="mostrarModal"
            class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
          >
            Aceptar solicitud
          </button>
          <button
            type="button"
            class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
          >
            Eliminar solicitud
          </button>
          <router-link to="/solicitudesadministrador" class="atras-button p-0">
            <button
              type="button"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            >
              Atrás
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="modalContainer"
    id="ventanaRegistroPerfil"
    :class="{ 'modalContainer--show': isModalContainerShow }"
  >
    <div class="ventanaModalPublicacion">
      <div class="bg-black rounded-4">
        <div class="formulario p-5 rounded-4 w-100">
          <form class="d-flex flex-column">
            <h1
              class="text-white fs-1 text-center lh-base pb-3 m-0 fw-bold text-uppercase"
            >
              Registrar perfil
            </h1>
            <div class="row">
              <div class="col-12 col-md-6">
                <label
                  for="perfilRegistroPerfil"
                  class="text-white fs-5 text-start lh-base py-3 d-block"
                  >Perfil</label
                >
                <input
                  type="text"
                  id="perfilRegistroPerfil"
                  name="perfilRegistroPerfil"
                  class="formulario__input border-0 rounded-pill py-2 px-3 d-block w-100"
                  required
                />
                <label
                  for="PIN"
                  class="text-white fs-5 text-start lh-base py-3 d-block"
                  >PIN</label
                >
                <input
                  type="password"
                  id="PIN"
                  name="PIN"
                  class="formulario__input border-0 rounded-pill py-2 px-3 d-block w-100"
                  required
                />
              </div>
              <div class="col-12 col-md-6">
                <label
                  for="correoRegistroPerfil"
                  class="text-white fs-5 text-start lh-base py-3 d-block"
                  >Correo</label
                >
                <input
                  type="email"
                  id="correoRegistroPerfil"
                  name="correoRegistroPerfil"
                  class="formulario__input border-0 rounded-pill py-2 px-3 d-block w-100"
                  required
                />
                <label
                  for="contraseniaRegistroPerfil"
                  class="text-white fs-5 text-start lh-base py-3 d-block"
                  >Contraseña</label
                >
                <input
                  type="password"
                  id="contraseniaRegistroPerfil"
                  name="contraseniaRegistroPerfil"
                  class="formulario__input border-0 rounded-pill py-2 px-3 d-block w-100"
                  required
                />
              </div>
            </div>
            <div class="row text-center justify-content-center flex-wrap">
              <input
                type="submit"
                value="Guardar"
                class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
              />
              <button
                type="button"
                id="button--cerrar"
                class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
                v-on:click="cerrarModal"
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.formulario {
  background-image: linear-gradient(
    to bottom right,
    #040c51 20%,
    #171e5700 100%
  );
  max-width: 50rem;
}
.user-icon-perfil {
  max-width: 20rem;
}
.perfil-card {
  &--f84440 {
    box-shadow: -20px 20px 30px #f8444054;
  }
  &--009FF7 {
    box-shadow: -20px 20px 30px #009ff754;
  }
  &--05009D {
    box-shadow: -20px 20px 30px #05009d54;
  }
  &--FF5400 {
    box-shadow: -20px 20px 30px #ff540054;
  }
  &--9200BB {
    box-shadow: -20px 20px 30px #9200bb54;
  }
  &--D0009C {
    box-shadow: -20px 20px 30px #d0009c54;
  }
  &--18D860 {
    box-shadow: -20px 20px 30px #18d86054;
  }
}
.perfil-text {
  &--f84440 {
    color: #f84440;
  }
  &--009FF7 {
    color: #009ff7;
  }
  &--05009D {
    color: #05009d;
  }
  &--FF5400 {
    color: #ff5400;
  }
  &--9200BB {
    color: #9200bb;
  }
  &--D0009C {
    color: #d0009c;
  }
  &--18D860 {
    color: #18d860;
  }
}
.formulario__button {
  max-width: fit-content;
  background-color: #182275;
  white-space: normal;
  &:hover,
  &:active {
    transform: scale(1.1);
  }
}
.atras-button {
  width: fit-content;
}
/*VENTANA MODAL*/
.modalContainer {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #111111bd;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s 0.6s;
  --transform: translateY(-100vh);
  --transition: transform 0.5s;
}
.modalContainer--show {
  opacity: 1;
  pointer-events: unset;
  transition: opacity 0.3s;
  --transform: translateY(0);
  --transition: transform 0.5s 0.5s;
}
.ventanaModalPublicacion {
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.7);
  width: fit-content;
  height: fit-content;
  transform: var(--transform);
  transition: var(--transition);
}
</style>
