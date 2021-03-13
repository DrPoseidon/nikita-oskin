<template>
  <transition
    :enter-active-class="$style.right"
    :leave-active-class="$style.left"
  >
    <div :class="$style.menu" v-show="VISIBILITY">
      <a @click="CHANGE_VISIBILITY()">
        <img
          :src="require(`../../assets/close-button.svg`)"
          :class="$style.close"
        />
      </a>
      <div :class="$style.miniHeader" v-show="VISIBILITY">
        <a href="#portfolio" :class="$style.link" @click="CHANGE_VISIBILITY()"
          >Портфолио</a
        >
        <a href="#aboutme" :class="$style.link" @click="CHANGE_VISIBILITY()"
          >Обо мне</a
        >
        <a href="#reviews" :class="$style.link" @click="CHANGE_VISIBILITY()"
          >Отзывы</a
        >
        <a href="#contacts" :class="$style.link" @click="CHANGE_VISIBILITY()"
          >Контакты</a
        >
      </div>
    </div>
  </transition>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MobileMenu",
  computed: {
    ...mapGetters(["VISIBILITY"])
  },
  methods: {
    ...mapActions(["CHANGE_VISIBILITY"])
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
