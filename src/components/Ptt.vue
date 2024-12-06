<template>
  <v-row>
    <v-col>
      <v-list v-if="items.length > 0" class="scrollable-list">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="navigateTo(item.link)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NGAList",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbx2fQc_sDvU_eh9tsM8ZJEIfRWUTHim_v3VYklE_wn76yfhYtk8-z1E7JppOPSnA-Qx/exec?sheetName=PTT"
        );
        const data = await response.json();
        this.items = data;
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
.scrollable-list {
  max-height: 300px; /* 與 v-carousel 的高度一致 */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #5c8a10 #000000;
}
.v-list-item {
  cursor: pointer;
  border-bottom: 5px solid #000000; /* 添加底部邊框 */
}
</style>
