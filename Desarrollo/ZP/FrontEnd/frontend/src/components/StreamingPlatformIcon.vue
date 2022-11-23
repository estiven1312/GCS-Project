<script>
export default {
  props: {
    Color: String,
    ImageUrl: String,
    Width: String,
  },
};
</script>
<template>
  <div
    class="logo-streaming p-2"
    :style="{ 'border-color': Color, 'max-width': Width + 'rem' }"
  >
    <img
      :src="require(`../assets/images/${ImageUrl}`)"
      alt="Logo de Netflix"
      class="img-fluid"
    />
  </div>
</template>
<style lang="scss">
.logo-streaming {
  background-color: black;
  border-width: 10px;
  border-style: solid;
  border-radius: 10px;
}
</style>
