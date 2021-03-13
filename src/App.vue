<template>
  <div id="app">
    <Main v-if="complete" />
    <Preloader v-if="!complete" />
  </div>
</template>

<script>
import Main from "../src/pages/Main";
import Preloader from "../src/components/Preloader";
export default {
  name: "App",
  components: {
    Main,
    Preloader
  },
  data() {
    return {
      complete: false
    };
  },
  created() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        if (document.readyState === "complete") {
          this.complete = true;
        }
      }, 2000);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
#app {
  font-family: BebasRegular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "BebasRegular";
  src: url("./assets/BebasRegular/BebasRegular.eot");
  src: url("./assets/BebasRegular/BebasRegular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/BebasRegular/BebasRegular.woff") format("woff"),
    url("./assets/BebasRegular/BebasRegular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
</style>
