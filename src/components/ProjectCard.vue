<template>
  <div class="project-card md-layout-item md-size-45 md-small-size-100">
    <md-card md-with-hover>
      <md-card-header>
        <div class="md-title">{{project.name}}</div>
      </md-card-header>

      <md-card-content>{{project.description}}</md-card-content>
    </md-card>
  </div>
</template>
<script>
export default {
  name: "project-card",
  props: {
    project: Object
  }
};
</script>
<style scoped>
.project-card {
  margin: 10px;
}
</style>