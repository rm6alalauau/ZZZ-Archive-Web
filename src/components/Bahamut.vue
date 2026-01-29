<template>
  <div class="d-flex flex-column" style="gap: 8px;">
    <div 
        v-for="(item, i) in items" 
        :key="i"
        class="d-flex align-center py-3 px-4 cursor-pointer align-stretch"
        :class="i % 2 === 0 ? 'bg-surface-variant-subtle' : 'bg-surface-container'"
        @click="navigateTo(item.link)"
    >
        <!-- Thumbnail -->
        <div style="width: 96px; height: 72px; min-width: 96px;" class="mr-3 flex-shrink-0 rounded overflow-hidden">
            <v-img
                v-if="item.imgSrc"
                :src="item.imgSrc"
                width="100%"
                height="100%"
                cover
            ></v-img>
        </div>

        <!-- Content -->
        <div class="d-flex flex-column justify-space-between flex-grow-1" style="gap: 4px;">
            <div class="text-body-2 text-on-surface-container text-truncate-2">
                {{ getCleanTitle(item.title) }}
            </div>
            
            <div class="d-flex align-center justify-end">
                <v-chip 
                    v-if="getCategory(item.title)"
                    size="x-small" 
                    color="surface" 
                    variant="flat" 
                    class="text-on-surface text-caption mr-auto font-weight-bold"
                    style="height: 20px;"
                >
                    {{ getCategory(item.title) }}
                </v-chip>
                
                <v-icon size="18" color="neutral400" class="mr-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M5,9V21H1V9H5ZM9,21C8.47,21 7.961,20.789 7.586,20.414C7.211,20.039 7,19.53 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C21.53,8 22.039,8.211 22.414,8.586C22.789,8.961 23,9.47 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9ZM9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
                    </svg>
                </v-icon>
                <span class="text-caption text-neutral400">{{ item.gp || 0 }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bahamut",
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
    getCleanTitle(title) {
        // Remove content inside 【】 at the beginning of string if present
        return title.replace(/^【.*?】\s*/, '');
    },
    getCategory(title) {
        const match = title.match(/^【(.*?)】/);
        return match ? match[1] : null;
    }
  },
};
</script>

<style scoped>
.bg-surface-variant-subtle {
    background-color: rgba(135, 135, 135, 0.1) !important; 
}
.bg-surface-container {
     background-color: transparent !important;
}
.text-truncate-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
