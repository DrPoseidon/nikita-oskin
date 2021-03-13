<template>
  <div :class="$style.footer" id="contacts" ref="footer">
    <a
      :href="icon.href"
      v-for="(icon, index) in icons"
      :key="index"
      target="_blank"
    >
      <img
        :src="require(`../../assets/socialWebIcons/${icon.name}.png`)"
        :class="$style.socialIcon"
    /></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { name: "vk", href: "https://vk.com/nikitaoskin" },
        { name: "insta", href: "https://www.instagram.com/nikitaoskin/" }
      ]
    };
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
