<template>
  <v-row>
    <v-col rounded="lg">
      <v-carousel
        height="300"
        show-arrows="hover"
        cycle
        hide-delimiter-background
        v-if="items.length > 0"
        :key="carouselKey"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-card flat tile rounded="xl" @click="navigateTo(item.link)">
            <v-img :src="item.imgSrc" max-height="300">
              <v-row class="fill-height" align="end">
                <v-col
                  class="text-center white--text"
                  style="background-color: rgba(0, 0, 0, 0.5)"
                >
                  {{ item.title }}
                </v-col>
              </v-row>
            </v-img>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Bahamut",
  data() {
    return {
      items: [],
      carouselKey: 0,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbx2fQc_sDvU_eh9tsM8ZJEIfRWUTHim_v3VYklE_wn76yfhYtk8-z1E7JppOPSnA-Qx/exec?sheetName=巴哈熱門"
        );
        const data = await response.json();
        this.items = data;

        // 强制重新渲染 v-carousel
        this.carouselKey += 1;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    navigateTo(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.v-img {
  position: relative;
}
.v-col {
  padding: 0;
}
</style>
