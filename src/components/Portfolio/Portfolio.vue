<template>
  <div :class="$style.portfolio">
    <BetweenBlocks info="Портфолио" id="portfolio" />
    <p :class="$style.wedding">Свадьба</p>
    <div :class="$style.videos">
      <div
        :class="$style.videoBlock"
        v-for="video in videos"
        :key="video.number"
      >
        <video
          :src="require(`../../assets/videos/${video.number}.mp4`)"
          :class="$style.video"
          controls
          preload="auto"
        />
        <p :class="$style.p">&#8226; {{ video.title }} &#8226;</p>
      </div>
    </div>
  </div>
</template>
<script>
import BetweenBlocks from "../BetweenBlocks";
export default {
  components: {
    BetweenBlocks
  },
  data() {
    return {
      videos: [
        {
          number: 1,
          title: "Андрей и Анастасия"
        },
        {
          number: 2,
          title: "Николай и Анастасия"
        },
        {
          number: 3,
          title: "Анатолий и Мария"
        },
        {
          number: 4,
          title: "Дмитрий и Любовь"
        },
        {
          number: 5,
          title: "Альберт и Алина"
        },
        {
          number: 6,
          title: "Сергей и Юлия"
        },
        {
          number: 7,
          title: "Анна и Иван"
        },
        {
          number: 8,
          title: "Павел и Дарья"
        }
      ]
    };
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
