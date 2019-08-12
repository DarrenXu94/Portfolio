<template>
  <div class="section">
    <div class="hero-text">
      <h1>Darren Xu</h1>
      <p>Software Developer</p>
      <md-button v-scroll-to="'#element'" class="md-primary md-raised">See more</md-button>
    </div>
    <div id="element" class="container more-info maxWidth960 padTop15">
      <h2>Info About Me</h2>
      <div class="md-layout align-center">
        <div class="md-layout-item md-size-33 md-medium-size-33 md-small-hide">
          <md-icon id="large-size">computer</md-icon>
        </div>
        <div
          class="md-layout-item md-size-66 md-medium-size-66 md-small-size-100 md-xsmall-size-100"
        >
          <p>
            Hi there,
            <br />
            <br />My name is Darren and I'm enthusiastic about full stack development with experience in JavaScript and Python frameworks. I love delivering creative and exciting new projects that enrich people's lives! Learning and improving is an important motto I strive towards and am always open to new opporunities.
            <br />
            <br />I have a strong understanding of JavaScript with experience in both front end React applications and back end Node Express APIs.
          </p>
        </div>
      </div>
    </div>
    <div id="technologies">
      <div class="md-layout maxWidth960 padTop15">
        <div class="md-layout-item">Item</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "landing"
};
</script>
<style lang="scss">
.hero-text {
  button {
    background-color: white;
  }
  position: absolute;
  text-align: center;
  color: white;
  left: 50%;
  transform: translate(-50%, 150%);
}

.padTop15 {
  padding-top: 15px;
}

.more-info {
  color: white;
  width: 100%;

  text-align: center;
  position: relative;
  top: 100vh;
  p {
    // white-space: pre-wrap;
    text-align: left;
    // max-width: 300px;
  }
}

.md-icon {
  color: white !important;
}

#large-size {
  font-size: 10rem !important;
}

.align-center {
  align-items: center;
}
#technologies {
  position: relative;
  top: 100vh;
  background: white;
}

.maxWidth960 {
  max-width: 960px;
  margin: auto;
}
</style>
