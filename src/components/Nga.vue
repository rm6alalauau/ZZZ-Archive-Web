<template>
  <v-row>
    <v-col>
      <v-list v-if="items.length > 0" class="scrollable-list">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="navigateTo(item.link)"
          :class="{ 'odd-item': i % 2 === 0, 'even-item': i % 2 !== 0 }"
        >
          <v-list-item-content>
            <v-list-item-title class="nga-text">{{
              item.title
            }}</v-list-item-title>
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
    this.loadItemsFromLocalStorage();
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbx2fQc_sDvU_eh9tsM8ZJEIfRWUTHim_v3VYklE_wn76yfhYtk8-z1E7JppOPSnA-Qx/exec?sheetName=NGA"
        );
        const data = await response.json();
        this.items = data;
        this.saveItemsToLocalStorage();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    navigateTo(link) {
      window.open(link, "_blank");
    },
    saveItemsToLocalStorage() {
      const data = {
        items: this.items,
        timestamp: new Date().getTime(),
      };
      localStorage.setItem("ngaItemsData", JSON.stringify(data));
    },
    loadItemsFromLocalStorage() {
      const data = JSON.parse(localStorage.getItem("ngaItemsData"));
      if (data) {
        const currentTime = new Date().getTime();
        const expiryTime = 4 * 60 * 60 * 1000; // 4小時
        if (currentTime - data.timestamp < expiryTime) {
          this.items = data.items;
        } else {
          localStorage.removeItem("ngaItemsData");
        }
      }
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
.odd-item {
  background-color: #fff0cd;
}
.even-item {
  background-color: #fff8e7;
}
.nga-text {
  color: #1a3959;
}
</style>
