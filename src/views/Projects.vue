<template>
  <div id="top">
    <div class="projects md-layout">
      <div class="md-layout-item main-raised md-size-80 md-small-size-95 md-elevation-3">
        <div class="container">
          <div class="projects-content">
            <h2>Projects</h2>
            <div class="md-layout">
              <project-card v-for="project in projects" :key="project.name" :project="project"></project-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import projects from "@/assets/data/projects";
import ProjectCard from "@/components/ProjectCard";
export default {
  name: "projects",
  mounted: function() {
    this.$scrollTo("#top", 1000, {});
  },
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: projects
    };
  }
};
</script>
<style lang="scss" scoped>
.main-raised {
  background-color: white;
  border-radius: 15px;
  padding-bottom: 5vh;
  padding-top: 2vh;
  padding-left: 2vh;
  padding-right: 2vh;
  margin-bottom: 20px;
}
.projects {
  justify-content: center;
  position: absolute;
  top: 15%;
  width: 100%;
  // height: 150vh;
}
.projects-content {
  padding: 10px;
}
</style>