<script>
import moment from "moment";
export default {
  props: {
    NombresSolicitante: String,
    ApellidosSolicitante: String,
    TelefonoContacto: String,
    Plataforma: String,
    FechaInicio: Date,
    TiempoDuracion: Number,
    CapturaPago: URL,
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD / MM / YYYY");
      }
    },
  },
};
</script>
<template>
  <tr class="bg-dark d-block d-md-table-row mb-4 mb-md-0">
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Plataforma"
    >
      {{ Plataforma }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Fecha de inicio"
    >
      {{ format_date(FechaInicio) }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Nombres del solicitante"
    >
      {{ NombresSolicitante }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Apellidos del solicitante"
    >
      {{ ApellidosSolicitante }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Teléfono de contacto"
    >
      {{ TelefonoContacto }}
    </td>
    <td
      class="solicitudes__cell text-white fs-5 d-block d-md-table-cell p-3"
      data-label="Acciones"
    >
      <div class="d-md-flex justify-content-md-center">
        <router-link
          :to="{
            name: 'vermassolicitudesadministrador',
            params: {
              solicitante: JSON.stringify(this.$props),
            },
          }"
          class="nav-link active fs-5 p-0 fw-bold text-uppercase"
        >
          <button
            class="formulario__button text-white fs-5 text-center lh-base border-0 px-4 py-3 rounded-4 text-break w-100"
          >
            Ver más
          </button></router-link
        >
      </div>
    </td>
  </tr>
</template>
<style></style>
