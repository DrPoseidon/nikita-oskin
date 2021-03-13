<template>
  <div :class="$style.mobileHeader">
    <div :class="$style.bigHeader" ref="bigHeader" id="header">
      <img
        :src="require('../../assets/mainLogoWhite.png')"
        alt="mainLogo"
        :class="$style.mainLogo"
      />
      <a @click="CHANGE_VISIBILITY()">
        <img
          :src="require('../../assets/menu-button.svg')"
          :class="$style.hamburger"
        />
      </a>
    </div>

    <transition
      :enter-active-class="$style.dropDown"
      :leave-active-class="$style.riseUp"
    >
      <div :class="$style.miniHeader" v-show="isVisible">
        <a @click="CHANGE_VISIBILITY()">
          <img
            :src="require('../../assets/menu-button.svg')"
            :class="$style.hamburger"
          />
        </a>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    ...mapActions(["CHANGE_VISIBILITY"]),
    getXY() {
      if (this.$refs.bigHeader.getBoundingClientRect().y < -100) {
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
