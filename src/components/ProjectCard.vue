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
      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div></div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            <div class="expansion-flex">
              <a href>
                <md-icon>web_asset</md-icon>&nbsp;Live page
              </a>
              <a href>
                <md-icon>code</md-icon>&nbsp;Code
              </a>
            </div>
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
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
.md-card-actions {
  border-radius: 10px;
}
.expansion-flex {
  display: flex;
  justify-content: space-evenly;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
}
</style>