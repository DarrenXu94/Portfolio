<template>
  <div id="app">
    <navbar></navbar>
    <div class="content">
      <router-view />
    </div>
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
body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./assets/hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
