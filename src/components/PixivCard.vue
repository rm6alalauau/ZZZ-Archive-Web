<template>
  <v-row>
    <v-col>
      <v-card rounded="xl" class="position-relative">
        <v-card-title
          class="headline"
          style="font-size: 1rem; display: flex; align-items: center"
        >
          Pixiv Hot
          <v-select
            v-model="selectedOption"
            :items="options"
            item-title="title"
            item-value="value"
            class="ml-4"
            style="max-width: 160px; height: 60px; align-items: center"
            rounded="xl"
            @update:modelValue="onOptionChange"
            return-object
          ></v-select>
          <div style="margin-left: auto; display: flex; align-items: center">
            <v-btn icon @click="scrollLeft">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon @click="scrollRight">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-card-title>
        <div
          ref="scrollContainer"
          class="scroll-container"
          @scroll="handleScroll"
          style="
            overflow-x: auto;
            white-space: nowrap;
            scrollbar-width: none; /* 隱藏滾動條 */
            -ms-overflow-style: none; /* IE 和 Edge */
          "
        >
          <div
            v-for="(item, i) in list"
            :key="i"
            class="d-inline-block mx-2 text-left"
          >
            <a
              :href="`https://www.pixiv.net/artworks/${item.id}`"
              target="_blank"
            >
              <v-img
                :src="item.imageUrl"
                height="160"
                width="160"
                class="d-block mx-auto"
              ></v-img>
            </a>
            <div class="text-ellipsis">{{ item.title }}</div>
            <div class="d-flex align-items-center">
              <v-avatar size="24">
                <a
                  :href="`https://www.pixiv.net/users/${item.userId}`"
                  target="_blank"
                >
                  <img :src="item.authorAvatar" alt="Avatar" />
                </a>
              </v-avatar>
              <span class="ml-2 text-ellipsis">{{ item.authorName }}</span>
            </div>
          </div>
        </div>
        <div v-if="showLeftShadow" class="left-shadow"></div>
        <div v-if="showRightShadow" class="right-shadow"></div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      selectedOption: { title: "♡ 100+", value: "100+" },
      options: [
        { title: "♡ 100+", value: "100+" },
        { title: "♡ 500+", value: "500+" },
        { title: "♡ 1000+", value: "1000+" },
      ],
      showLeftShadow: false,
      showRightShadow: true,
    };
  },
  async mounted() {
    await this.fetchPixivData();
    this.handleScroll(); // 初始化時檢查滾動狀態
  },
  methods: {
    onOptionChange() {
      console.log("Option changed:", this.selectedOption);
      this.fetchPixivData();
    },
    async fetchPixivData() {
      try {
        let url;
        switch (this.selectedOption.value) {
          case "100+":
            url =
              "https://www.pixiv.net/ajax/search/artworks/ゼンゼロ100users入り?word=ゼンゼロ100users入り&mode=safe&lang=zh";
            break;
          case "500+":
            url =
              "https://www.pixiv.net/ajax/search/artworks/ゼンゼロ500users入り?word=ゼンゼロ500users入り&mode=safe&lang=zh";
            break;
          case "1000+":
            url =
              "https://www.pixiv.net/ajax/search/artworks/ゼンゼロ1000users入り?word=ゼンゼロ1000users入り&mode=safe&lang=zh";
            break;
        }
        console.log("Fetching URL:", url);
        const response = await fetch(`https://cors.zzz-archive-back-end.workers.dev?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);

        const combinedData = data.body.illustManga.data;

        if (combinedData.length > 0) {
          this.list = combinedData.map((item) => ({
            id: item.id,
            userId: item.userId,
            imageUrl: item.url,
            title: item.title,
            authorAvatar: item.profileImageUrl,
            authorName: item.userName,
          }));
        } else {
          throw new Error("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    scrollLeft() {
      const container = this.$refs.scrollContainer;
      container.scrollBy({ left: -200, behavior: "smooth" });
    },
    scrollRight() {
      const container = this.$refs.scrollContainer;
      container.scrollBy({ left: 200, behavior: "smooth" });
    },
    handleScroll() {
      const container = this.$refs.scrollContainer;
      this.showLeftShadow = container.scrollLeft > 0;
      this.showRightShadow =
        container.scrollLeft + container.clientWidth < container.scrollWidth;
    },
  },
};
</script>

<style scoped>
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 150px;
}
.scroll-container {
  position: relative;
}

.left-shadow,
.right-shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
  pointer-events: none;
  z-index: 1;
}

.left-shadow {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
}

.right-shadow {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
}
</style>
