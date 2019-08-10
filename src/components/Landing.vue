<template>
  <div class="section" id="hero">
    <div class="hero-image">
      <div class="hero-text">
        <h1>Darren Xu</h1>
        <p>Software Developer</p>
        <md-button class="md-primary md-raised">See more</md-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "landing"
};
</script>
<style lang="scss">
#hero {
  height: 100vh;
}
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/hero.jpg");

  /* Set a specific height */
  height: 100%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  button {
    background-color: white;
  }
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
