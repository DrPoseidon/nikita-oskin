<template>
  <div>
    <video
      id="video"
      :class="$style.video"
      :src="require('../../assets/promo.mp4')"
      autoplay
      loop
      muted
      ref="video"
    />
    <a href="#header">
      <img
        :src="require(`../../assets/arrow-button.svg`)"
        :class="$style.upBtn"
        v-show="isVisible"
    /></a>
    <transition
      :enter-active-class="$style.fadein"
      :leave-active-class="$style.fadeout"
    >
      <a @click="CHANGE_VISIBILITY_EMAIL()" v-show="!SHOW_EMAIL">
        <img :src="require(`../../assets/email.svg`)" :class="$style.email"
      /></a>
    </transition>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      isVisible: false
    };
  },
  computed: {
    ...mapGetters(["SHOW_EMAIL"])
  },
  methods: {
    ...mapActions(["CHANGE_VISIBILITY_EMAIL"]),
    getXY() {
      if (
        document.getElementById("video").clientHeight === window.innerHeight
      ) {
        if (this.$refs.video.getBoundingClientRect().y < -window.innerHeight) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      } else {
        if (-this.$refs.video.getBoundingClientRect().y > 350) {
          this.isVisible = true;
        } else {
          this.isVisible = false;
        }
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.getXY);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getXY);
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
