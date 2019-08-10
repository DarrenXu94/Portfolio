<template>
  <div class="section">
    <div class="hero-text">
      <h1>Darren Xu</h1>
      <p>Software Developer</p>
      <md-button class="md-primary md-raised">See more</md-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "landing"
};
</script>
<style lang="scss">
.hero-text {
  button {
    background-color: white;
  }
  text-align: center;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
