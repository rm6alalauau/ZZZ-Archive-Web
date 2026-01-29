<template>
  <div class="d-flex flex-column" style="gap: 8px;">
    <div 
        v-for="(item, i) in items" 
        :key="i"
        class="d-flex flex-column py-3 px-4 cursor-pointer"
        :class="i % 2 === 0 ? 'bg-item-variant' : 'bg-transparent'"
        @click="navigateTo(item.link)"
    >
        <div class="text-body-2 text-on-surface-container text-truncate">
            {{ item.title }}
        </div>
        
        <div class="text-caption text-neutral400 text-right mt-1">
            {{ item.replies || 0 }} 回覆
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NGAList",
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
  },
};
</script>

<style scoped>
.scrollable-list {
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #5c8a10 #000000;
}
.bg-item-variant {
    background-color: rgba(135, 135, 135, 0.063) !important; /* 0x10878787 */
}
.nga-text {
  color: #1a3959;
}
</style>
