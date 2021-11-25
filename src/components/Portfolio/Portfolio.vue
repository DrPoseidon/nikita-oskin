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
        <iframe :src="`https://vk.com/video_ext.php?oid=200830158&${video.link}&hd=3`" :class="$style.video" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
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
          link:'id=456240217&hash=df836d55e8ef0836',
          title: "Андрей и Анастасия"
        },
        {
          number: 2,
          link:'id=456239688&hash=e8c9d237560398ae',

          title: "Николай и Анастасия"
        },
        {
          number: 3,
          link:'id=456240218&hash=b3d28436e0044841',
          title: "Анатолий и Мария"
        },
        {
          number: 4,
          link:'id=456240148&hash=94d394fb4574bcf4',
          title: "Дмитрий и Любовь"
        },
        {
          number: 5,
          link:'id=456240382&hash=96b529d75eabf336',
          title: "Альберт и Алина"
        },
        {
          number: 6,
          link:'id=456240384&hash=1274592e95a207fb',
          title: "Сергей и Юлия"
        },
        {
          number: 7,
          link:'id=456240383&hash=bd353b6e5ef47dee',
          title: "Анна и Иван"
        },
        {
          number: 8,
          link:'id=456240386&hash=0ca76e74fbeef4a7',
          title: "Павел и Дарья"
        },
        {
          number:9,
          link:'id=456240385&hash=61b50d5fb48e1ef8',
          title: 'Юрий и Анна'
        }
      ]
    };
  }
};
</script>
<style lang="scss" module>
@import "./styles.scss";
</style>
