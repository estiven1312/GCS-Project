<script>
import StreamingPlatformIcon from "@/components/StreamingPlatformIcon.vue";
export default {
  name: "StreamingPlatformCard",
  props: {
    Color: String,
    ImageUrl: String,
    Precio: String,
    Width: String,
  },
  components: {
    StreamingPlatformIcon,
  },
};
</script>
<template>
  <div
    class="card-streaming d-flex flex-column justify-items-center align-items-center"
    :style="{
      'background-color': Color,
      'box-shadow': '-20px 30px 144px -19px ' + Color + 'cc',
    }"
  >
    <StreamingPlatformIcon :Color="Color" :ImageUrl="ImageUrl" :Width="Width" />
    <p class="text-white fs-5 text-center py-2 lh-lg m-0">
      A solo
      <br />
      <span class="fs-2">{{ Precio }}</span>
      <br />
      Al mes
    </p>
  </div>
</template>
<style lang="scss">
.card-streaming {
  width: fit-content;
  padding: 1rem;
  border-radius: 10px;
}
</style>
