<script>
import PerfilUsuario from "@/components/PerfilUsuario.vue";
export default {
  name: "MisPerfilesUsuario",
  data() {
    return {
      Perfil: "",
      Plataforma: "",
      Correo: "",
      Contrasenia: "",
      FechaInicio: "",
      TiempoDuracion: "",
      PIN: "",
    };
  },
  components: {
    PerfilUsuario,
  },
};
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
        >
          <option selected class="text-black fs-5">Netflix</option>
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
        >
          Filtrar
        </button>
      </div>
    </div>
    <div class="p-0 mx-md-3 mx-lg-5">
      <PerfilUsuario
        :Perfil="'Nicole'"
        :Plataforma="'Netflix'"
        :Correo="'Bontamaui@gmail.com'"
        :Contrasenia="'Ayuda123'"
        :FechaInicio="new Date(2022, 3, 10)"
        :TiempoDuracion="2"
        :PIN="'hola192'"
        class="my-5"
      />
      <PerfilUsuario
        :Perfil="'Nicole'"
        :Plataforma="'Netflix'"
        :Correo="'Bontamaui@gmail.com'"
        :Contrasenia="'Ayuda123'"
        :FechaInicio="new Date(2022, 3, 10)"
        :TiempoDuracion="2"
        :PIN="'hola192'"
        class="my-5"
      />
    </div>
  </div>
</template>
<style lang="scss">
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
