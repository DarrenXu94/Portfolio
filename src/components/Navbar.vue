<template>
  <div id="nav">
    <md-toolbar md-elevation="0" style="display:flex; justify-content: center;">
      <h3 class="md-title md-small-hide" style="flex: 1"></h3>
      <router-link v-for="link in links" :key="link.to" :to="link.to" tag="md-button">{{link.text}}</router-link>
    </md-toolbar>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      links: [
        { to: "/", text: "Home" },
        { to: "/projects", text: "Projects" },
        { to: "/about", text: "About" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#nav {
  button {
    text-decoration: none;
    font-weight: bold;
    color: #737373de;
    &.router-link-exact-active {
      color: white;
    }
  }
  button {
    background-color: #333f51;
  }
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
}
</style>
