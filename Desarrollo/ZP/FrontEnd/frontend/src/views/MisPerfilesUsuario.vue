<script>
import PerfilUsuario from "@/components/PerfilUsuario.vue";
export default {
  name: "MisPerfilesUsuario",
  data() {
    return {
      Perfil: String,
      Plataforma: String,
      Correo: String,
      Contrasenia: String,
      FechaInicio: String,
      TiempoDuracion: String,
      PIN: String,
    };
  },
  components: {
    PerfilUsuario,
  },
};
</script>
<template>
  <div class="misperfilesusuario px-4">
    <div class="my-5 p-0 mx-sm-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Disfruta del mejor entretenimiento con Zorrito+
      </h1>
      <div class="d-flex flex-wrap align-items-center pt-2">
        <p class="text-white fs-5 text-start lh-base m-0 pe-4 pb-2">
          Filtrar por plataforma:
        </p>
        <select
          class="form-select text-black fs-5"
          aria-label="Default select example"
        >
          <option selected class="text-black fs-5">Netflix</option>
          <option value="movistar" class="text-black fs-5">
            Movistar Play
          </option>
          <option value="disney-plus" class="text-black fs-5">
            Disney Plus
          </option>
          <option value="star-plus" class="text-black fs-5">Star Plus</option>
          <option value="hbo-max" class="text-black fs-5">HBO Max</option>
          <option value="prime-video" class="text-black fs-5">
            Prime Video
          </option>
          <option value="spotify" class="text-black fs-5">Spotify</option>
        </select>
      </div>
    </div>
    <div class="p-0 mx-sm-3 mx-lg-5">
      <PerfilUsuario
        :Perfil="'Nicole'"
        :Plataforma="'Netflix'"
        :Correo="'Bontamaui@gmail.com'"
        :Contrasenia="'Ayuda123'"
        :FechaInicio="'03 / 10 / 2022'"
        :TiempoDuracion="'2 meses'"
        :PIN="'hola192'"
        class="my-5"
      />
      <PerfilUsuario
        :Perfil="'Nicole'"
        :Plataforma="'Spotify'"
        :Correo="'Bontamaui@gmail.com'"
        :Contrasenia="'Ayuda123'"
        :FechaInicio="'03 / 10 / 2022'"
        :TiempoDuracion="'2 meses'"
        :PIN="'hola192'"
        class="my-5"
      />
    </div>
  </div>
</template>
<style>
.form-select {
  width: inherit !important;
}
</style>
