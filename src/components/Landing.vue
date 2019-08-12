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
        <div
          class="info-item md-layout-item md-size-33 md-medium-size-33 md-small-size-100 md-xsmall-size-100"
        >
          <font-awesome-icon icon="chalkboard-teacher" size="6x" />
          <ul>
            <li>React</li>
            <li>Vue</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>ES6</li>
          </ul>
        </div>
        <div
          class="info-item md-layout-item md-size-33 md-medium-size-33 md-small-size-100 md-xsmall-size-100"
        >
          <font-awesome-icon icon="server" size="6x" />
          <ul>
            <li>NodeJS + Express</li>
            <li>Python + Flask</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Elasticsearch Kibana Logstash</li>
            <li>Apache configuration</li>
          </ul>
        </div>
        <div
          class="info-item md-layout-item md-size-33 md-medium-size-33 md-small-size-100 md-xsmall-size-100"
        >
          <font-awesome-icon icon="keyboard" size="6x" />
          <ul>
            <li>RabbitMQ</li>
            <li>Android</li>
            <li>Git</li>
            <li>Linux System Admin</li>
          </ul>
        </div>
      </div>
      <footer>
        <p>Darren Xu © 2019</p>
      </footer>
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

  .md-icon {
    color: white !important;
  }
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
  text-align: center;
}

.info-item {
  padding: 15px;
  ul {
    list-style: none;
    padding: 0px;
  }
}

.maxWidth960 {
  max-width: 960px;
  margin: auto;
}

footer {
  background-color: #021623;
  color: white;
  padding: 2.2rem;
}
</style>
