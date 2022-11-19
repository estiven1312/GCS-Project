<script>
export default {
  props: {
    Color: String,
    ImageUrl: String,
  },
};
</script>
<template>
  <div class="logo-streaming p-2" :style="{ 'border-color': Color }">
    <img
      :src="require(`../assets/images/${ImageUrl}`)"
      alt="Logo de Netflix"
      class="img-fluid"
    />
  </div>
</template>
<style lang="scss">
.logo-streaming {
  width: 7rem;
  border-width: 10px;
  border-style: solid;
  border-radius: 10px;
  margin: 1rem;
}
</style>
