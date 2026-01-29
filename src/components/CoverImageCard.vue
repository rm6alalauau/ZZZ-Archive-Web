<template>
  <v-card rounded="xl" flat color="surface-container" class="position-relative overflow-hidden" aspect-ratio="1.777">
    <v-carousel
      height="100%"
      hide-delimiters
      :show-arrows="false"
      cycle
      interval="8000"
      class="fill-height"
    >
      <v-carousel-item
        v-for="(image, i) in filteredList"
        :key="i"
        :src="image.url"
        cover
      >
        <!-- Overlay Info (Fade In on Hover/Press in Reference, usually always visible or subtle in web) -->
        <!-- Logic: KMP shows ArtworkInfo on hover/press. We can mimic with v-hover -->
        <v-hover v-slot="{ isHovering, props }">
            <div 
                v-bind="props"
                class="d-flex flex-column justify-end fill-height"
                style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"
            >
                <v-expand-transition>
                    <div v-if="isHovering" class="pa-4 bg-black-transparent">
                        <div class="text-h6 text-white font-weight-bold">{{ image.name }}</div>
                        <div class="text-body-2 text-grey-lighten-1">{{ image.description || '官方宣傳圖' }}</div>
                    </div>
                </v-expand-transition>
            </div>
        </v-hover>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  name: "CoverImageCard",
  data() {
    return {
      // Hardcoded KMP Cover Images to ensure reliability (avoid fetch CORS issues)
      filteredList: [
        {
             name: 'Version 1.2 Tour de Inferno',
             description: 'Tour de Inferno',
             url: 'https://raw.githubusercontent.com/mrfatworm/ZZZ-Archive-Asset/refs/heads/main/Asset/Banner/3.webp',
             link: '' 
        },
        {
             name: 'Version 1.1 Undercover R&B',
             description: 'Undercover R&B',
             url: 'https://raw.githubusercontent.com/mrfatworm/ZZZ-Archive-Asset/refs/heads/main/Asset/Banner/2.webp',
             link: ''
        },
        {
             name: 'Version 1.0 Welcome to New Eridu',
             description: 'Welcome to New Eridu',
             url: 'https://raw.githubusercontent.com/mrfatworm/ZZZ-Archive-Asset/refs/heads/main/Asset/Banner/1.webp',
             link: ''
        }
      ]
    };
  },
  // Removed mounted fetch to rely on hardcoded assets
  methods: {
  }
};
</script>

<style scoped>
.bg-black-transparent {
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
}
</style>
