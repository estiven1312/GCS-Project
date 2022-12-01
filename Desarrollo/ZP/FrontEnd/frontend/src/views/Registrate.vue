<script>
export default {
  name: "registrate",
  data() {
    let data = {
      formularioRegistrate: {
        nombresRegistrate: "",
        apellidosRegistrate: "",
        correoRegistrate: "",
        contraseniaRegistrate: "",
        celularRegistrate: "",
      },
    };
    return data;
  },
  methods: {
    submit() {
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/iniciarsesion");
    },
  },
};
</script>
<template>
  <div class="registrate px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-6 text-center mt-3 m-md-0 order-1 order-md-0">
          <img
            src="../assets/images/zorrito-animado.png"
            alt="Avatar de zorrito"
            class="zorrito-avatar w-100"
          />
        </div>
        <div
          class="col-12 col-md-6 mb-3 m-md-0 d-flex justify-content-center order-0 order-md-1"
        >
          <div class="formulario p-5 rounded-4 w-100">
            <form class="d-flex flex-column">
              <h1
                class="text-white fs-1 text-center lh-base pb-3 m-0 fw-bold text-uppercase"
              >
                Regístrate
              </h1>
              <label
                for="nombresRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Nombres</label
              >
              <input
                type="text"
                id="nombresRegistrate"
                name="nombresRegistrate"
                v-model="formularioRegistrate.nombresRegistrate"
                class="formulario__input border-0 rounded-pill py-2 px-3"
                required
              />
              <label
                for="apellidoRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Apellidos</label
              >
              <input
                type="text"
                id="apellidoRegistrate"
                name="apellidoRegistrate"
                v-model="formularioRegistrate.apellidosRegistrate"
                class="formulario__input border-0 rounded-pill py-2 px-3"
                required
              />
              <label
                for="correoRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Correo</label
              >
              <input
                type="email"
                id="correoRegistrate"
                name="correoRegistrate"
                v-model="formularioRegistrate.correoRegistrate"
                class="formulario__input border-0 rounded-pill py-2 px-3"
                required
              />
              <label
                for="contraseniaRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Contraseña</label
              >
              <input
                type="password"
                id="contraseniaRegistrate"
                name="contraseniaRegistrate"
                v-model="formularioRegistrate.contraseniaRegistrate"
                class="formulario__input border-0 rounded-pill py-2 px-3"
                required
              />
              <label
                for="celularRegistrate"
                class="text-white fs-5 text-start lh-base py-3"
                >Celular</label
              >
              <input
                type="tel"
                id="celularRegistrate"
                name="celularRegistrate"
                v-model="formularioRegistrate.celularRegistrate"
                class="formulario__input border-0 rounded-pill py-2 px-3"
                required
              />
              <input
                type="submit"
                value="Registrate"
                class="mt-4 mb-3 formulario__button mx-auto text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100"
                @click.stop.prevent="submit()"
              />
              <p class="text-white fs-5 text-center lh-base pb-2 m-0">
                ¿Ya tienes una cuenta?
              </p>
              <router-link
                to="/iniciarsesion"
                class="fs-5 text-center lh-base pb-2 formulario__link"
                >Iniciar sesión
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
