<template>
  <div class="projects md-layout">
    <div class="md-layout-item main-raised md-size-80 md-small-size-95 md-elevation-3">
      <div class="container">
        <div class="about md-layout">
          <div class="experience md-layout-item md-size-80 md-small-size-95">
            <div class="experience-container">
              <div v-for="exp in experience" :key="exp.id" class="experience-card md-layout">
                <div class="logo-container md-layout-item md-size-20 md-small-size-100">
                  <img :src="exp.img" alt />
                </div>
                <div class="details-container md-layout-item md-size-80 md-small-size-100">
                  <h3>{{exp.company}}</h3>
                  <h4>{{exp.title}}</h4>
                  <h5>{{exp.dates}}</h5>
                  <p>{{exp.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import experience from "@/assets/data/experience";

export default {
  name: "about",
  data() {
    return {
      experience: experience
    };
  }
};
</script>
<style lang="scss" scoped>
.about {
  justify-content: center;
  position: absolute;
  top: 15%;
  width: 100%;
  background: none;
}

.experience {
  padding: 15px;

  img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 0.3rem solid #05222f;
    z-index: 2;
    background-color: #fff;
    object-fit: contain;
  }
  .experience-container {
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 40px 1px rgb(111, 105, 107);
  }

  .experience-card {
    padding: 1.5rem 1.5rem 0;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-container {
    border-bottom: 1px solid #dcd9d9;
  }
}

// .experience {
//   .experience-container {
//     // display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     max-width: 768px;
//     margin: auto;
//     box-shadow: 0px 2px 40px 1px rgb(111, 105, 107);
//   }
//   .experience-card {
//     color: #333;
//     flex-direction: row;
//     position: relative;
//     background-color: #fff;
//     box-sizing: border-box;
//     padding: 1.5rem 1.5rem 0;
//     width: 768px;
//     border-left: 1px solid #dcd9d9;
//     border-right: 1px solid #dcd9d9;
//     align-items: center;
//     img {
//       width: 96px;
//       height: 96px;
//       border-radius: 50%;
//       border: 0.3rem solid #05222f;
//       z-index: 2;
//       background-color: #fff;
//     }
//   }
//   .details-container {
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;
//     padding: 0 0 1.5rem 1.5rem;
//     border-bottom: 1px solid #dcd9d9;
//     text-align: left;
//   }
//   h3,
//   h4,
//   h5 {
//     margin: 0 0 0.6rem;
//   }
// }
</style>