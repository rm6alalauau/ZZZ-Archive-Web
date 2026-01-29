<template>
  <div class="d-flex flex-column pa-2 bg-surface" style="gap: 8px;">
    <div 
        v-for="(item, i) in items" 
        :key="i"
        class="d-flex align-center py-3 px-4 cursor-pointer rounded-lg bg-surface-container"
        @click="navigateTo(item.link)"
    >
        <!-- Popularity Value -->
        <div 
            class="text-title-medium mr-3 font-weight-bold"
            :class="getPopularityColor(item.popularity)"
            style="min-width: 24px; text-align: center;"
        >
            {{ item.popularity }}
        </div>
        
        <!-- Title -->
        <div class="text-body-2 text-on-surface-container text-truncate flex-grow-1">
            {{ item.title }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PTTList",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    navigateTo(link) {
      if(link) window.open(link, "_blank");
    },
    getPopularityColor(popularity) {
        const val = parseInt(popularity);
        if (val > 100) return 'text-error';
        if (val >= 10) return 'text-secondary';
        return 'text-primary';
    }
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
}
</style>
