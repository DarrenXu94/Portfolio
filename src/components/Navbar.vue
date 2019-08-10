<template>
  <div id="nav">
    <md-toolbar md-elevation="0">
      <h3 class="md-title" style="flex: 1">Darren Xu</h3>
      <md-button v-for="link in links" :key="link.to" class="md-raised md-primary">
        <router-link :to="link.to">{{link.text}}</router-link>
      </md-button>
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
  a {
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
