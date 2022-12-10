<script>
import StreamingPlatformIcon from "@/components/StreamingPlatformIcon.vue";
export default {
  name: "Servicios",
  components: {
    StreamingPlatformIcon,
  },
};
</script>
<template>
  <h2 class="text-white fs-1 text-center pb-2 lh-base text-uppercase m-0">
    Métodos de pago
  </h2>
  <div class="d-flex pt-2 justify-content-center flex-wrap">
    <div
      class="mx-3 d-flex justify-content-center flex-column align-items-center"
    >
      <StreamingPlatformIcon
        :Color="'rgba(208, 0, 156, 0)'"
        :ImageUrl="'bcp-logo.svg'"
        :Width="10"
      />
      <h3 class="text-white lh-base fs-4 text-center">BCP</h3>
      <p class="text-white lh-base fs-5 text-center m-0">
        1234567890987645 <br />Jose Velarde
      </p>
    </div>
    <div
      class="mx-3 d-flex justify-content-center flex-column align-items-center"
    >
      <StreamingPlatformIcon
        :Color="'rgba(208, 0, 156, 0)'"
        :ImageUrl="'yape-logo.svg'"
        :Width="10"
      />
      <h3 class="text-white lh-base fs-4 text-center">YAPE</h3>
      <p class="text-white lh-base fs-5 text-center m-0">
        123456789 <br />Jose Velarde
      </p>
    </div>
    <div
      class="mx-3 d-flex justify-content-center flex-column align-items-center"
    >
      <StreamingPlatformIcon
        :Color="'rgba(208, 0, 156, 0)'"
        :ImageUrl="'bbva-logo.svg'"
        :Width="10"
      />
      <h3 class="text-white lh-base fs-4 text-center">BBVA</h3>
      <p class="text-white lh-base fs-5 text-center m-0">
        1234567890987645 <br />Jose Velarde
      </p>
    </div>
    <div
      class="mx-3 d-flex justify-content-center flex-column align-items-center"
    >
      <StreamingPlatformIcon
        :Color="'rgba(208, 0, 156, 0)'"
        :ImageUrl="'plin-logo.svg'"
        :Width="10"
      />
      <h3 class="text-white lh-base fs-4 text-center">PLIN</h3>
      <p class="text-white lh-base fs-5 text-center m-0">
        123456789 <br />Jose Velarde
      </p>
    </div>
  </div>
</template>
