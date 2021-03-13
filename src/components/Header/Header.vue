<template>
  <div :class="$style.header">
    <div :class="$style.bigHeader" ref="bigHeader" id="header">
      <div :class="$style.links">
        <div :class="$style.link">
          <a href="#portfolio">Портфолио</a>
        </div>
        <div :class="$style.link">
          <a href="#aboutme" style="margin-left:30px">Обо мне</a>
        </div>
      </div>
      <img
        :src="require('../../assets/mainLogoWhite.png')"
        alt="mainLogo"
        :class="$style.mainLogo"
      />
      <div :class="$style.links">
        <div :class="$style.link">
          <a href="#reviews" style="margin-right:30px">Отзывы</a>
        </div>
        <div :class="$style.link">
          <a href="#contacts">Контакты</a>
        </div>
      </div>
    </div>

    <transition
      :enter-active-class="$style.dropDown"
      :leave-active-class="$style.riseUp"
    >
      <div :class="$style.miniHeader" v-show="isVisible">
        <div :class="$style.links">
          <div :class="$style.link">
            <a href="#portfolio">Портфолио</a>
          </div>
          <div :class="$style.link">
            <a href="#aboutme" style="margin-left:30px">Обо мне</a>
          </div>
        </div>
        <div :class="$style.links">
          <div :class="$style.link">
            <a href="#reviews" style="margin-right:30px">Отзывы</a>
          </div>
          <div :class="$style.link">
            <a href="#contacts">Контакты</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    getXY() {
      if (this.$refs.bigHeader.getBoundingClientRect().y < -130) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
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
