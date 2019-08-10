<template>
  <div id="app">
    <navbar></navbar>
    <background></background>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Background from "@/components/Background.vue";

export default {
  components: {
    Navbar,
    Background
  }
};
</script>


<style lang="scss">
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
}
</style>
