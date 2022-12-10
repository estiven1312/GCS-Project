<script>
import StreamingPlatformCard from "@/components/StreamingPlatformCard.vue";
import MetodosDePago from "@/components/MetodosDePago.vue";
export default {
  name: "Servicios",
  data: () => {
    return {
      plataformas: [
        {
          Color: "#f84440",
          ImageUrl: "netflix-logo.png",
          Precio: 12,
        },
        {
          Color: "#009FF7",
          ImageUrl: "movistar-logo.png",
          Precio: 5,
        },
        {
          Color: "#05009D",
          ImageUrl: "disneyplus-logo.png",
          Precio: 7,
        },
        {
          Color: "#FF5400",
          ImageUrl: "starplus-logo.png",
          Precio: 7,
        },
        {
          Color: "#9200BB",
          ImageUrl: "hbomax-logo.png",
          Precio: 8,
        },
        {
          Color: "#D0009C",
          ImageUrl: "primevideo-logo.png",
          Precio: 7,
        },
        {
          Color: "#18D860",
          ImageUrl: "spotify-logo.png",
          Precio: 7,
        },
      ],
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
          v-for="plataforma in plataformas"
          :key="plataforma.ImageUrl"
        >
          <StreamingPlatformCard
            :Color="plataforma.Color"
            :ImageUrl="plataforma.ImageUrl"
            :Precio="plataforma.Precio"
            :Width="13"
          />
        </div>
      </div>
    </div>
    <div class="my-5 p-0 mx-md-3 mx-lg-5">
      <MetodosDePago />
    </div>
  </div>
</template>
