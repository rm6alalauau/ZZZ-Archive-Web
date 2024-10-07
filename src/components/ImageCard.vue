<template>
  <v-row justify="end">
    <v-col>
      <v-card rounded="xl">
        <v-card-title
          class="headline"
          :style="{ fontSize: '1rem', fontWeight: 'bold' }"
        >
          {{ title }}
        </v-card-title>
        <div
          style="
            overflow-x: auto;
            white-space: nowrap;
            scrollbar-width: thin;
            scrollbar-color: #5c8a10 #000000;
          "
        >
          <div
            v-for="(imageUrl, i) in images"
            :key="i"
            class="d-inline-block mx-2 text-center"
          >
            <v-img
              :src="imageUrl"
              height="100"
              width="100"
              class="d-block mx-auto"
            ></v-img>
            <div>{{ i + 1 }}</div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageCard",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await axios.get(
          "https://6fa37c23baabdfc16d2414746d5854b6.r2.cloudflarestorage.com/asset/Live/Asset/Agent/Profile/",
          {
            headers: {
              Authorization: `Bearer rZwbu11Rpj8hQC91PD5_QZe6voRFc0_XxGqcICdI`,
            },
          }
        );
        // 假設 API 返回的數據中包含圖片 URL
        this.images = response.data.map((item) => item.url);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    },
  },
};
</script>
