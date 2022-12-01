<script>
import StreamingPlatformCard from "@/components/StreamingPlatformCard.vue";
import MetodosDePago from "@/components/MetodosDePago.vue";
export default {
  name: "Servicios",
  data() {
    return {
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
            :Color="'#f84440'"
            :ImageUrl="'netflix-logo.png'"
            :Precio="'S/. 12.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'#009ff7'"
            :ImageUrl="'movistar-logo.png'"
            :Precio="'S/. 5.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'#05009d'"
            :ImageUrl="'disneyplus-logo.png'"
            :Precio="'S/. 7.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'#ff5400'"
            :ImageUrl="'starplus-logo.png'"
            :Precio="'S/. 7.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'#9200bb'"
            :ImageUrl="'hbomax-logo.png'"
            :Precio="'S/. 8.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'#d0009c'"
            :ImageUrl="'primevideo-logo.png'"
            :Precio="'S/. 7.00'"
            :Width="'13'"
          />
        </div>
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center p-4"
        >
          <StreamingPlatformCard
            :Color="'#18d860'"
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
