<template>
  <div :class="$style.betweenBlocks">
    <h2 :class="$style.h2">{{ info }}</h2>
    <hr />
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
