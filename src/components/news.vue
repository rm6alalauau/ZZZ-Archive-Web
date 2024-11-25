<template>
  <v-row>
    <v-col rounded="lg">
      <v-carousel
        v-if="newsList.length > 0"
        :key="carouselKey"
        height="300"
        show-arrows="hover"
        cycle
        hide-delimiter-background
        ref="carousel"
      >
        <v-carousel-item v-for="(newsItem, i) in newsList" :key="i">
          <v-card flat tile rounded="xl">
            <a
              :href="`https://zenless.hoyoverse.com/en-us/news/${newsItem.iInfoId}`"
              target="_blank"
            >
              <v-img :src="newsItem.imageUrl" max-height="300"></v-img>
            </a>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      carouselKey: 0,
    };
  },
  async mounted() {
    await this.fetchNewsData();
  },
  methods: {
    async fetchNewsData() {
      try {
        const response = await fetch(
          "https://cloudflare-cors-anywhere.zzz-archive-back-end.workers.dev/?https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7/getContentList?iPageSize=5&iPage=1&iChanId=288&sLangKey=zh-tw"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        //console.log("API Response:", data);

        this.newsList = data.data.list.map((item) => ({
          iInfoId: item.iInfoId,
          imageUrl: JSON.parse(item.sExt)["news-banner"][0].url,
        }));

        // 强制重新渲染 v-carousel
        this.carouselKey += 1;
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    },
  },
};
</script>
