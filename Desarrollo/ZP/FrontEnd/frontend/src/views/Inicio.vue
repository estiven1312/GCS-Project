<script>
import StreamingPlatformIcon from "@/components/StreamingPlatformIcon.vue";
export default {
  name: "Inicio",
  data() {
    return {
      Color: String,
      ImageUrl: String,
    };
  },
  components: {
    StreamingPlatformIcon,
  },
};
</script>
<template>
  <div class="inicio px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Disfruta del mejor entretenimiento con Zorrito+
      </h1>
      <p class="text-white fs-4 text-center py-2 lh-base m-0">
        ¡Contrata tu perfil al menos precio posible!
      </p>
      <div class="d-flex pt-2 justify-content-center flex-wrap">
        <StreamingPlatformIcon
          :Color="'#f84440'"
          :ImageUrl="'netflix-logo.png'"
          :Width="'8'"
          class="m-3"
        />
        <StreamingPlatformIcon
          :Color="'#009FF7'"
          :ImageUrl="'movistar-logo.png'"
          :Width="'8'"
          class="m-3"
        />
        <StreamingPlatformIcon
          :Color="'#05009D'"
          :ImageUrl="'disneyplus-logo.png'"
          :Width="'8'"
          class="m-3"
        />
        <StreamingPlatformIcon
          :Color="'#FF5400'"
          :ImageUrl="'starplus-logo.png'"
          :Width="'8'"
          class="m-3"
        />
        <StreamingPlatformIcon
          :Color="'#9200BB'"
          :ImageUrl="'hbomax-logo.png'"
          :Width="'8'"
          class="m-3"
        />
        <StreamingPlatformIcon
          :Color="'#D0009C'"
          :ImageUrl="'primevideo-logo.png'"
          :Width="'8'"
          class="m-3"
        />
        <StreamingPlatformIcon
          :Color="'#18D860'"
          :ImageUrl="'spotify-logo.png'"
          :Width="'8'"
          class="m-3"
        />
      </div>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-6 text-center mb-3 m-md-0">
          <img
            src="../assets/images/zorrito-animado.png"
            alt="Avatar de zorrito"
            class="zorrito-avatar w-100"
          />
        </div>
        <div class="col-12 col-md-6 text-center mt-3 m-md-0">
          <h2 class="text-white fs-2 text-center lh-base text-uppercase pb-2">
            Crea tu cuenta y ten control de todos tus perfiles
          </h2>
          <button
            class="button text-white fs-4 text-center lh-base text-uppercase bg-danger border-0 py-2 px-3 rounded-3 fw-semibold mt-2"
          >
            Registrarme
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.button {
  font-family: "Readex Pro", sans-serif;
}
.zorrito-avatar {
  max-width: 30rem !important;
}
</style>
