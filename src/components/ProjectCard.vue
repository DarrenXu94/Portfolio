<template>
  <div class="project-card md-layout-item md-size-45 md-small-size-100">
    <md-card md-with-hover>
      <md-card-media>
        <img src="@/assets/hero.jpg" alt="hero" />
      </md-card-media>
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
<style lang="scss" scoped>
.project-card {
  margin: 10px;
}
.md-card {
  border-radius: 10px;
  cursor: default;
  img {
    max-height: 100px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-position: 50% 50%;
  }
}
</style>