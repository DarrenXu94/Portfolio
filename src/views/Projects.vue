<template>
  <div class="projects md-layout">
    <div class="md-layout-item main-raised md-size-80 md-elevation-3">
      <div class="container">
        <div class="projects-content">projects</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "projects"
};
</script>
<style lang="scss" scoped>
.main-raised {
  background-color: white;
}
.projects {
  justify-content: center;
  position: absolute;
  top: 15%;
  width: 100%;
  height: 150vh;
  // transform: translate(0%, 450%);
}
.projects-content {
  padding: 10px;
}
</style>