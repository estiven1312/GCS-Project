<script>
import PerfilUsuario from "@/components/PerfilUsuario.vue";
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";
export default defineComponent({
  name: "misperfilesusuario",
  data: () => {
    return {
      misPerfiles: [],
      plataformaSeleccionada: "Todas",
    };
  },
  components: {
    PerfilUsuario,
  },
  computed: {
    ...mapState("autorizacion", ["usuarioAutorizado"]),
    ...mapGetters("perfiles", ["getPerfilesDeUsuario"]),
  },
  methods: {
    filtrarPorPlataforma(plataforma) {
      this.misPerfiles = this.getPerfilesDeUsuario(
        this.usuarioAutorizado.DNI,
        plataforma
      );
    },
  },
  mounted() {
    this.misPerfiles = this.getPerfilesDeUsuario(
      this.usuarioAutorizado.DNI,
      "Todas"
    );
  },
});
</script>
<template>
  <div class="misperfilesusuario px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Disfruta del mejor entretenimiento con Zorrito+
      </h1>
      <div class="d-flex flex-wrap align-items-center pt-2">
        <p class="text-white fs-5 text-start lh-base m-0 pe-4 my-2">
          Filtrar por plataforma:
        </p>
        <select
          class="form-select--width form-select text-black fs-5 me-4 my-2"
          aria-label="Default select example"
          v-model="plataformaSeleccionada"
        >
          <option selected class="text-black fs-5">Todas</option>
          <option value="Netflix" class="text-black fs-5">Netflix</option>
          <option value="Movistar Play" class="text-black fs-5">
            Movistar Play
          </option>
          <option value="Disney Plus" class="text-black fs-5">
            Disney Plus
          </option>
          <option value="Star Plus" class="text-black fs-5">Star Plus</option>
          <option value="HBO Max" class="text-black fs-5">HBO Max</option>
          <option value="Prime Video" class="text-black fs-5">
            Prime Video
          </option>
          <option value="Spotify" class="text-black fs-5">Spotify</option>
        </select>
        <button
          class="formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100 my-2"
          @click="filtrarPorPlataforma(plataformaSeleccionada)"
        >
          Filtrar
        </button>
      </div>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5">
      <PerfilUsuario
        v-for="miPerfil in misPerfiles"
        :Perfil="miPerfil.Perfil"
        :Plataforma="miPerfil.Plataforma"
        :Correo="miPerfil.Correo"
        :Contrasenia="miPerfil.Contrasenia"
        :FechaInicio="miPerfil.FechaInicio"
        :TiempoDuracion="miPerfil.TiempoDuracion"
        :PIN="miPerfil.PIN"
        class="my-5"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.form-select--width {
  width: inherit !important;
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
