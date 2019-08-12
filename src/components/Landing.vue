<template>
  <div class="section">
    <div class="hero-text">
      <h1>Darren Xu</h1>
      <p>Software Developer</p>
      <md-button class="md-primary md-raised">See more</md-button>
    </div>
    <div class="container more-info">More info</div>
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
  position: absolute;
  text-align: center;
  color: white;
  left: 50%;
  transform: translate(-50%, 150%);
}

.more-info {
  position: absolute;
  top: 100vh;
}
</style>
