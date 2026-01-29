<template>
  <v-card rounded="xl" color="surface-container" flat class="pa-0">
    <!-- Header -->
    <div class="d-flex align-center px-4 py-3">
         <v-icon size="24" class="mr-2" color="neutral400">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17.75,2.937H20.817L14.117,10.614L22,21.063H15.829L10.991,14.727L5.463,21.063H2.393L9.559,12.849L2,2.939H8.329L12.694,8.729L17.75,2.937ZM16.671,19.223H18.371L7.4,4.681H5.577L16.671,19.223Z" />
            </svg>
         </v-icon>
         <div class="text-subtitle-1 font-weight-bold text-neutral400">{{ t('popular') }}</div>
         <v-spacer></v-spacer>
    </div>
    
    <!-- Content List -->
    <div class="position-relative">
        <div
          ref="scrollContainer"
          class="d-flex overflow-x-auto px-4 pb-4 cursor-grab"
          :class="{'cursor-grabbing': isDragging}"
          style="scroll-behavior: auto; gap: 12px; scrollbar-width: none;"
          @wheel.prevent="onWheel"
          @mousedown="startDrag"
          @mouseleave="stopDrag"
          @mouseup="stopDrag"
          @mousemove="moveDrag"
        >
          <div
            v-for="(item, i) in items"
            :key="i"
            class="user-select-none"
            style="min-width: 144px; width: 144px;"
          >
            <a :href="item.link" target="_blank" class="text-decoration-none d-flex flex-column align-start text-left gap-2" draggable="false">
                 <!-- 1:1 Aspect Ratio Image Container -->
                 <div class="position-relative w-100 rounded-lg overflow-hidden" style="aspect-ratio: 1/1;">
                     <!-- Blurred Background Layer -->
                     <v-img
                        :src="item.image || '//placehold.it/144x144'"
                        cover
                        class="fill-height filter-blur"
                        draggable="false"
                     ></v-img>
                     <!-- Main Image Layer -->
                     <v-img
                        :src="item.image || '//placehold.it/144x144'"
                        class="position-absolute top-0 left-0 fill-height w-100"
                        style="object-fit: contain;"
                        draggable="false"
                     ></v-img>
                 </div>
                 
                 <!-- Text Info -->
                 <div class="w-100">
                    <div class="text-caption text-neutral300 text-truncate font-weight-bold">{{ item.title }}</div>
                    <!-- Ensuring neutral color for author (neutral400 matches onSurfaceVariant) -->
                    <div class="text-caption text-neutral400 text-truncate">{{ item.author }}</div>
                 </div>
            </a>
          </div>
        </div>
    </div>
  </v-card>
</template>

<style scoped>
.filter-blur {
    filter: blur(8px);
    transform: scale(1.1);
}
.gap-2 {
    gap: 8px;
}
.cursor-grab {
    cursor: grab;
}
.cursor-grabbing {
    cursor: grabbing;
}
/* Prevent text selection during drag */
.user-select-none {
    user-select: none;
}
.disabled-content {
    filter: blur(4px) grayscale(0.8) opacity(0.5);
    pointer-events: none;
    user-select: none;
}
</style>

<script>
import { useLocalization } from '@/composables/useLocalization';
import { useCachedFetch } from '@/composables/useCachedFetch';

export default {
  name: "TwitterCard",
  setup() {
      const { t } = useLocalization();
      return { t };
  },
  data() {
      return {
          items: [],
          isDragging: false,
          startX: 0,
          scrollLeft: 0,
      }
  },
  mounted() {
      this.fetchData();
  },
  methods: {
      async fetchData() {
          try {
             const { fetchWithCache } = useCachedFetch();
             const data = await fetchWithCache("https://api.zzz-archive.com/?sheetName=x", "twitter_x");
             // Support both direct array or wrapped api response
             this.items = Array.isArray(data) ? data : (data.x || []);
          } catch(e) { console.error(e) }
      },
      onWheel(e) {
          if (this.$refs.scrollContainer) {
              this.$refs.scrollContainer.scrollLeft += e.deltaY;
          }
      },
      startDrag(e) {
          this.isDragging = true;
          this.startX = e.pageX - this.$refs.scrollContainer.offsetLeft;
          this.scrollLeft = this.$refs.scrollContainer.scrollLeft;
      },
      stopDrag() {
          this.isDragging = false;
      },
      moveDrag(e) {
          if (!this.isDragging) return;
          e.preventDefault();
          const x = e.pageX - this.$refs.scrollContainer.offsetLeft;
          const walk = (x - this.startX) * 2; // scroll-fast
          this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk;
      }
  }
};
</script>
