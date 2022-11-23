<script>
import StreamingPlatformCard from "@/components/StreamingPlatformCard.vue";
import MetodosDePago from "@/components/MetodosDePago.vue";
export default {
  name: "Servicios",
  data() {
    return {
      ColorShadow: String,
      Color: String,
      ImageUrl: String,
      Precio: String,
      Width: String,
    };
  },
  components: {
    StreamingPlatformCard,
    MetodosDePago,
  },
};
</script>
<template>
  <div class="servicios px-4">
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <h1 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
        Nuestros planes
      </h1>
      <div class="row justify-content-around">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'rgb(248, 68, 64)'"
            :ColorShadow="'rgb(248, 68, 64, 0.8)'"
            :ImageUrl="'netflix-logo.png'"
            :Precio="'S/. 12.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'rgba(0, 159, 247)'"
            :ColorShadow="'rgba(0, 159, 247, 0.8)'"
            :ImageUrl="'movistar-logo.png'"
            :Precio="'S/. 5.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'rgb(5, 0, 157)'"
            :ColorShadow="'rgb(5, 0, 157, 0.8)'"
            :ImageUrl="'disneyplus-logo.png'"
            :Precio="'S/. 7.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'rgb(255, 84, 0)'"
            :ColorShadow="'rgb(255, 84, 0, 0.8)'"
            :ImageUrl="'starplus-logo.png'"
            :Precio="'S/. 7.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'rgb(146, 0, 187)'"
            :ColorShadow="'rgb(146, 0, 187, 0.8)'"
            :ImageUrl="'hbomax-logo.png'"
            :Precio="'S/. 8.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'rgb(208, 0, 156)'"
            :ColorShadow="'rgb(208, 0, 156, 0.8)'"
            :ImageUrl="'primevideo-logo.png'"
            :Precio="'S/. 7.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'rgb(24, 216, 96)'"
            :ColorShadow="'rgb(24, 216, 96, 0.8)'"
            :ImageUrl="'spotify-logo.png'"
            :Precio="'S/. 7.00'"
            :Width="'13'"
          />
        </div>
      </div>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <MetodosDePago />
    </div>
  </div>
</template>
