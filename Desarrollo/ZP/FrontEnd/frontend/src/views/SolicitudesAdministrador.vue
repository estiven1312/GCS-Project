<script>
import FilaSolicitud from "@/components/FilaSolicitud.vue";
export default {
  name: "SolicitudesAdministrador",
  data() {
    return {
      NombresSolicitante: String,
      ApellidosSolicitante: String,
      TelefonoContacto: String,
      Plataforma: String,
      FechaInicio: Date,
      TiempoDuracion: Number,
      CapturaPago: URL,
    };
  },
  components: {
    FilaSolicitud,
  },
};
</script>
<template>
  <div class="solicitudesadministrador px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Solicitudes
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
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <table
        class="solicitudes bordered w-100 text-end text-md-center overflow-hidden"
        cellspacing="0"
      >
        <thead class="solicitudes__head bg-dark">
          <tr>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Plataforma
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Fecha de inicio
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Nombres del solicitante
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Apellidos del solicitante
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Teléfono de contacto
            </th>
            <th
              class="solicitudes__cell text-white fs-5 fw-semibold d-block d-md-table-cell p-3"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <FilaSolicitud
            :NombresSolicitante="'Estiven Salvador'"
            :ApellidosSolicitante="'Hurtado Santos'"
            :TelefonoContacto="987654321"
            :Plataforma="'Netflix'"
            :FechaInicio="new Date(2023, 1, 5)"
            :TiempoDuracion="3"
            :CapturaPago="'https://mail.google.com/mail/u/1/#inbox'"
          />
          <FilaSolicitud
            :NombresSolicitante="'Luz Cristina'"
            :ApellidosSolicitante="'Martinez Santos'"
            :TelefonoContacto="965479484"
            :Plataforma="'Spotify'"
            :FechaInicio="new Date(2022, 12, 24)"
            :TiempoDuracion="3"
            :CapturaPago="'https://mail.google.com/mail/u/1/#inbox'"
          />
        </tbody>
      </table>
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
.solicitudes {
  border-collapse: collapse;
}
.solicitudes__head {
  display: none;
  border-bottom: 0.1rem solid white;
}
.solicitudes__cell::before {
  content: attr(data-label);
  font-weight: 600;
  float: left;
}
@media (min-width: 768px) {
  .solicitudes {
    box-shadow: -20px 20px 30px #ffffff26;
  }
  .solicitudes__head {
    display: table-header-group;
  }
  .solicitudes__cell::before {
    content: "";
  }
}
</style>
