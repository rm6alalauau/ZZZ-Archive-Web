<template>
  <v-card rounded="xl" color="surface-container" flat class="pa-0">
    <!-- Header with Custom Dropdown Trigger -->
     <div class="d-flex align-center px-4 py-3">
          <v-icon size="24" class="mr-2" color="neutral400">
             <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                 <path d="M4.5,1.5C2.845,1.5 1.5,2.845 1.5,4.5V19.5C1.5,21.155 2.845,22.5 4.5,22.5H19.5C21.155,22.5 22.5,21.155 22.5,19.5V4.5C22.5,2.845 21.155,1.5 19.5,1.5H4.5ZM12.539,5.438C14.461,5.438 16.116,6.042 17.292,7.088C18.473,8.128 19.158,9.623 19.158,11.25C19.163,12.905 18.38,14.358 17.17,15.328C15.956,16.303 14.33,16.847 12.539,16.847C10.5,16.847 8.611,16.092 8.611,16.092V18.52C8.958,18.623 9.534,18.848 9.169,19.214H6.412C6.052,18.848 6.581,18.633 6.98,18.52V8.227C6.052,8.948 5.578,9.577 5.334,10.041C5.616,10.95 5.086,10.908 5.086,10.908L4.125,9.361C4.125,9.361 7.533,5.438 12.539,5.438ZM12.37,15.886C13.777,15.886 14.995,15.356 15.834,14.517C16.673,13.669 17.142,12.567 17.147,11.227C17.142,9.853 16.702,8.667 15.895,7.777C15.089,6.891 13.894,6.309 12.37,6.305C11.119,6.3 9.567,6.727 8.611,7.416V15.145C9.483,15.581 10.805,15.891 12.37,15.886Z" />
             </svg>
          </v-icon>
          <div class="text-subtitle-1 font-weight-bold text-neutral400 mr-3">{{ t('popular') }}</div>
          
          <!-- Custom Dropdown Trigger (Pill Shape) -->
          <v-menu v-model="menu" location="bottom">
             <template v-slot:activator="{ props }">
                 <div 
                     v-bind="props"
                     class="d-flex align-center px-3 py-1 rounded-pill cursor-pointer bg-surface"
                     style="gap: 8px; border: 1px solid rgba(255,255,255,0.1);"
                 >
                     <v-icon size="16" color="on-surface">mdi-heart</v-icon>
                     <span class="text-caption text-on-surface">{{ selectedTagLabel }}</span>
                 </div>
             </template>
             <v-list density="compact" class="bg-surface rounded-lg">
                 <v-list-item 
                     v-for="(item, index) in options" 
                     :key="index" 
                     :value="index"
                     @click="onOptionChange(item)"
                 >
                     <v-list-item-title class="text-caption text-on-surface">{{ item.title }}</v-list-item-title>
                 </v-list-item>
             </v-list>
          </v-menu>

          <v-spacer></v-spacer>
          <div>
             <v-btn icon="mdi-chevron-left" variant="text" density="compact" @click="scroll('left')" color="on-surface-variant"></v-btn>
             <v-btn icon="mdi-chevron-right" variant="text" density="compact" @click="scroll('right')" color="on-surface-variant"></v-btn>
          </div>
     </div>
    
    <!-- Content List -->
    <!-- Content List -->
    <div class="position-relative">
        <div
          ref="scrollContainer"
          class="d-flex overflow-hidden px-4 pb-4 disabled-content"
          style="gap: 12px;"
        >
          <!-- Dummy Items for Height/Visual -->
          <div
            v-for="i in 4"
            :key="i"
            style="min-width: 144px; width: 144px;"
          >
            <div class="d-flex flex-column gap-2">
                 <!-- 1:1 Aspect Ratio Image Container -->
                 <div class="position-relative w-100 rounded-lg overflow-hidden bg-surface-variant" style="aspect-ratio: 1/1;"></div>
                 <!-- Title -->
                 <div class="bg-surface-variant rounded" style="height: 16px; width: 80%;"></div>
                 <!-- Author Info -->
                 <div class="d-flex align-center gap-2">
                     <div class="bg-surface-variant rounded-circle" style="width: 24px; height: 24px;"></div>
                     <div class="bg-surface-variant rounded" style="height: 12px; width: 60px;"></div>
                 </div>
            </div>
          </div>
        </div>

        <!-- Overlay -->
        <div class="disabled-overlay d-flex align-center justify-center" style="background: rgba(0,0,0,0.4);">
             <v-btn
                rounded="pill"
                color="#212121"
                variant="flat"
                class="text-white px-5 text-subtitle-2 font-weight-bold"
                height="36"
                style="border: 1px solid rgba(255,255,255,0.2);"
             >
                {{ t('go_to_app') }}
             </v-btn>
        </div>
    </div>
  </v-card>
</template>

<script>
import { useLocalization } from '@/composables/useLocalization';

export default {
  name: 'PixivCard',
  setup() {
      const { t } = useLocalization();
      return { t };
  },
  data() {
    return {
      menu: false,
      list: [],
      selectedOption: { title: "100+", value: "100+" },
      options: [
        { title: "100+", value: "100+" },
        { title: "500+", value: "500+" },
        { title: "1000+", value: "1000+" },
      ],
    };
  },
  computed: {
      selectedTagLabel() {
          return this.selectedOption.title;
      }
  },
  mounted() {
    // Disabled state - no fetch
  },
  methods: {
    onOptionChange(option) {
      this.selectedOption = option;
      this.menu = false;
      // Disabled fetch
    },
    // fetchPixivData removed
    scroll(direction) {
      const container = this.$refs.scrollContainer;
      if (container) {
          const scrollAmount = direction === 'left' ? -200 : 200;
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.gap-2 {
    gap: 8px;
}
.disabled-content {
    filter: blur(4px) grayscale(0.8) opacity(0.5);
    pointer-events: none;
    user-select: none;
}
.disabled-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
}
</style>
