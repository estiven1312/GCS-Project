<script>
import moment from "moment";
export default {
  props: {
    Perfil: String,
    Plataforma: String,
    Correo: String,
    Contrasenia: String,
    FechaInicio: Date,
    TiempoDuracion: Number,
    PIN: String,
  },
  methods: {
    perfilCard: function () {
      switch (this.$props.Plataforma) {
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
      switch (this.$props.Plataforma) {
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
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD / MM / YYYY");
      }
    },
  },
};
</script>
<template>
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
          <p class="text-white fs-5 pt-2 m-0 lh-base">Perfil: {{ Perfil }}</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-8 d-flex align-items-center">
        <div class="w-100">
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
              :class="perfilText()"
            >
              Plataforma:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Plataforma }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
              :class="perfilText()"
            >
              Correo:
            </div>
            <div
              class="col-12 col-md-6 text-white fs-5 py-2 text-break lh-base my-auto"
            >
              {{ Correo }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
              :class="perfilText()"
            >
              Contraseña:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ Contrasenia }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
              :class="perfilText()"
            >
              Fecha de inicio:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ format_date(FechaInicio) }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
              :class="perfilText()"
            >
              Tiempo de duración (en meses):
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ TiempoDuracion }}
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-6 fs-5 py-2 fw-semibold lh-base my-auto"
              :class="perfilText()"
            >
              PIN:
            </div>
            <div class="col-12 col-md-6 text-white fs-5 py-2 lh-base my-auto">
              {{ PIN }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
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
</style>
