<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
html,
body {
  background-color: #021623 !important;
  height: 100%;
}
#app {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./assets/hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // background-attachment: fixed;
}
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    // primary: md-get-palette-color(indigo, 300),
      primary: #3c4354 // The primary color of your application
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
