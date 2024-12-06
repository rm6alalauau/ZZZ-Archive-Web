<template>
  <v-row>
    <v-col>
      <v-card rounded="xl" class="position-relative" style="max-width: 100%">
        <v-card-title
          class="headline"
          style="font-size: 1rem; display: flex; align-items: center"
        >
          X Posts
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
          style="overflow-x: auto; white-space: nowrap"
        >
          <div
            v-for="(item, i) in items"
            :key="i"
            class="d-inline-block mx-2 text-left"
            style="width: 160px"
          >
            <a :href="item.link" target="_blank">
              <v-img
                :src="item.image || generatePlaceholderImage(item.title)"
                height="160"
                width="160"
                class="d-block mx-auto"
              ></v-img>
            </a>
            <div class="text-ellipsis">{{ item.title }}</div>
            <div class="text-ellipsis">{{ item.hashtag }}</div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "XPosts",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    generatePlaceholderImage(text) {
      const canvas = document.createElement("canvas");
      canvas.width = 160;
      canvas.height = 160;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ccc";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.font = "20px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      return canvas.toDataURL();
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
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: #5c8a10 #000000;
}
</style>
