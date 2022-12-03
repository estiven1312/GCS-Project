<script>
import MetodosDePago from "@/components/MetodosDePago.vue";
export default {
  name: "solicitarperfilusuario",
  data() {
    let data = {
      FormularioSolicitarPerfilUsuario: {
        NombresSolicitante: "",
        ApellidosSolicitante: "",
        TelefonoContacto: "",
        Plataforma: "Netflix",
        FechaInicio: "",
        TiempoDuracion: 1,
        CapturaPago: "",
      },
    };
    return data;
  },
  methods: {
    calcularTotalPagar() {
      let precio = 0;
      switch (this.$data.FormularioSolicitarPerfilUsuario.Plataforma) {
        case "Netflix":
          precio =
            12 * this.$data.FormularioSolicitarPerfilUsuario.TiempoDuracion;
          break;
        case "Movistar Play":
          precio =
            5 * this.$data.FormularioSolicitarPerfilUsuario.TiempoDuracion;
          break;
        case "Disney Plus":
          precio =
            7 * this.$data.FormularioSolicitarPerfilUsuario.TiempoDuracion;
          break;
        case "Star Plus":
          precio =
            7 * this.$data.FormularioSolicitarPerfilUsuario.TiempoDuracion;
          break;
        case "HBO Max":
          precio =
            8 * this.$data.FormularioSolicitarPerfilUsuario.TiempoDuracion;
          break;
        case "Prime Video":
          precio =
            7 * this.$data.FormularioSolicitarPerfilUsuario.TiempoDuracion;
          break;
        case "Spotify":
          precio =
            7 * this.$data.FormularioSolicitarPerfilUsuario.TiempoDuracion;
          break;
      }
      return precio;
    },
  },
  components: {
    MetodosDePago,
  },
};
</script>
<template>
  <div class="solicitarperfilusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="bg-dark p-5 panel-solicitar-perfil mx-auto">
        <form>
          <h1
            class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0"
          >
            Solicitar perfil
          </h1>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text my-auto"
            >
              Nombres del solicitante:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              Estiven Salvador
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text my-auto"
            >
              Apellidos del solicitante:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              Hurtado Santos
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text my-auto"
            >
              Teléfono de contacto:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              989595621
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text my-auto"
            >
              Plataforma:
            </div>
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base text-white my-auto"
            >
              <select
                class="form-select text-black fs-5 w-100"
                aria-label="Default select example"
                v-model="FormularioSolicitarPerfilUsuario.Plataforma"
              >
                <option selected class="text-black fs-5">Netflix</option>
                <option value="Movistar Play" class="text-black fs-5">
                  Movistar Play
                </option>
                <option value="Disney Plus" class="text-black fs-5">
                  Disney Plus
                </option>
                <option value="Star Plus" class="text-black fs-5">
                  Star Plus
                </option>
                <option value="HBO Max" class="text-black fs-5">HBO Max</option>
                <option value="Prime Video" class="text-black fs-5">
                  Prime Video
                </option>
                <option value="Spotify" class="text-black fs-5">Spotify</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="fechaInicio"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text"
                >Fecha de inicio:</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="date"
                id="fechaInicio"
                name="fechaInicio"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="FormularioSolicitarPerfilUsuario.FechaInicio"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="tiempoDuracion"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text"
                >Tiempo de duración (en meses):</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="number"
                min="1"
                id="tiempoDuracion"
                name="tiempoDuracion"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model.number="FormularioSolicitarPerfilUsuario.TiempoDuracion"
                required
              />
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text my-auto"
            >
              Usted debe pagar:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              S/. {{ calcularTotalPagar() }}
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 my-auto">
              <label
                for="capturaPago"
                class="fs-5 py-2 fw-semibold lh-base panel-solicitar-perfil__text"
                >Captura de pago (URL):</label
              >
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              <input
                type="url"
                id="capturaPago"
                name="capturaPago"
                class="border-0 rounded-pill py-2 px-3 w-100"
                v-model="FormularioSolicitarPerfilUsuario.CapturaPago"
                required
              />
            </div>
          </div>
          <div class="row text-center justify-content-center flex-wrap">
            <input
              type="submit"
              value="Enviar"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            />
            <input
              type="reset"
              value="Limpiar"
              class="mt-4 formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 mx-3"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5"><MetodosDePago /></div>
  </div>
</template>
<style lang="scss">
.panel-solicitar-perfil {
  max-width: 55rem;
  box-shadow: -20px 20px 30px #ce47f054;
}
.panel-solicitar-perfil__text {
  color: #ce47f0;
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
</style>
