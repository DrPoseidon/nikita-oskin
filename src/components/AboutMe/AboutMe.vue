<template>
  <div :class="$style.aboutMe">
    <BetweenBlocks info="Обо мне" id="aboutme" />
    <div :class="$style.block">
      <img
        :class="$style.myPhoto"
        :src="require('../../assets/portrait.jpg')"
      />
      <div :class="$style.text">
        Меня зовут Никита и я занимаюсь видеосъемкой. Каждое видео - отдельная
        история, которую невозможно повторить, но можно пересматривать снова и
        снова. <br />Главное для меня — услышать каждую пару, создать историю,
        которая будет только о них. Ни одна Ваша эмоция не будет утеряна:
        радостный смех первой встречи, восхищенные взгляды, устремленные на
        молодоженов, нежность и теплота моментов.
      </div>
    </div>
  </div>
</template>
<script>
import BetweenBlocks from "../BetweenBlocks";
export default {
  components: {
    BetweenBlocks
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
