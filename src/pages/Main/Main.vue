<template>
  <div>
    <div :class="$style.main" ref="main">
      <Header v-if="!MOBILE_MENU" />
      <MobileHeader v-if="MOBILE_MENU" />
      <MainVideo />
      <Portfolio />
      <AboutMe />
      <Reviews />
      <Footer />
      <MobileMenu v-if="MOBILE_MENU" />
      <SendEmail v-if="SHOW_EMAIL" />
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header";
import MainVideo from "../../components/MainVideo";
import Portfolio from "../../components/Portfolio";
import AboutMe from "../../components/AboutMe";
import Reviews from "../../components/Reviews";
import Footer from "../../components/Footer";
import MobileMenu from "../../components/MobileMenu";
import MobileHeader from "../../components/MobileHeader";
import SendEmail from "../../components/SendEmail";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Header,
    MainVideo,
    Portfolio,
    AboutMe,
    Reviews,
    Footer,
    MobileHeader,
    MobileMenu,
    SendEmail
  },
  computed: {
    ...mapGetters(["MOBILE_MENU", "SHOW_EMAIL"])
  },
  methods: {
    ...mapActions(["RESIZE_TO_MOBILE", "RESIZE_TO_PC"]),
    resize() {
      if (window.innerWidth < 1200 && !this.MOBILE_MENU) {
        this.RESIZE_TO_MOBILE();
      }
      if (window.innerWidth >= 1200 && this.MOBILE_MENU) {
        this.RESIZE_TO_PC();
      }
    }
  },
  created() {
    if (window.innerWidth < 1200) {
      this.RESIZE_TO_MOBILE();
    } else {
      this.RESIZE_TO_PC();
    }
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
