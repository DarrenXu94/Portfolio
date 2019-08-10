<template>
  <div class="home">
    <landing></landing>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "home",
  components: {
    Landing
  }
};
</script>
<style>
body,
html {
  height: 100%;
}
</style>
