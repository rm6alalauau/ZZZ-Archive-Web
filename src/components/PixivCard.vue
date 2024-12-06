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
                  <v-img
                    :src="item.authorAvatar"
                    height="24"
                    width="24"
                    class="d-block mx-auto"
                  />
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
      this.$refs.scrollContainer.scrollLeft = 0; // 滾動到最左邊
    },
    async fetchPixivData() {
      try {
        let word;
        switch (this.selectedOption.value) {
          case "100+":
            word = "ゼンゼロ";
            break;
          case "500+":
            word = "ゼンゼロ500users入り";
            break;
          case "1000+":
            word = "ゼンゼロ1000users入り";
            break;
        }

        const params = {
          word: word,
          mode: "partial_match_for_tags", // 可以改為 "exact_match_for_tags" 或 "title_and_caption"
          order: "date_desc", // 可以改為 "date_asc" 或 "popular_desc"
          page: 1,
          size: 500,
          include_translated_tag_results: true,
          search_ai_type: false,
        };

        const queryString = new URLSearchParams(params).toString();
        const url = `https://api.obfs.dev/api/pixiv/search?${queryString}`;

        //console.log("Fetching URL:", url);
        const response = await fetch(url, {
          headers: {
            "accept-language": "zh-TW", // 可以改為其他語言代碼
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        //console.log("API Response:", data);

        const combinedData = data.illusts.filter(
          (item) => item.sanity_level === 2
        ); // 過濾掉sanity_level為4和6的內容

        if (combinedData.length > 0) {
          this.list = combinedData.map((item) => ({
            id: item.id,
            userId: item.user.id,
            imageUrl: `https://pximg-cors.zzz-archive-back-end.workers.dev/${item.image_urls.square_medium.replace(
              "https://i.pximg.net/",
              ""
            )}`,
            title: item.title,
            authorAvatar: item.user.profile_image_urls.medium.includes(
              "https://s.pximg.net/common/images/no_profile.png"
            )
              ? item.user.profile_image_urls.medium
              : `https://pximg-cors.zzz-archive-back-end.workers.dev/${item.user.profile_image_urls.medium.replace(
                  "https://i.pximg.net/",
                  ""
                )}`,
            authorName: item.user.name,
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
