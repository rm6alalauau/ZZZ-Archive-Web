<template>
  <div class="d-flex flex-column" style="gap: 8px;">
    <div 
        v-for="(item, i) in items" 
        :key="i"
        class="d-flex align-center py-3 px-4 cursor-pointer align-stretch"
        :class="i % 2 === 0 ? 'bg-surface-variant-subtle' : 'bg-surface-container'"
        @click="navigateTo(item.link)"
    >
        <!-- Thumbnail (if exists) -->
        <div v-if="item.image && !isVideo(item.image)" style="width: 96px; height: 72px; min-width: 96px;" class="mr-3 flex-shrink-0 rounded overflow-hidden">
             <v-img
                :src="item.image"
                width="100%"
                height="100%"
                cover
            ></v-img>
        </div>

        <!-- Content -->
        <div class="d-flex flex-column justify-space-between flex-grow-1" style="gap: 4px;">
            <div class="text-body-2 text-on-surface-container text-truncate-2">
                {{ item.title }}
            </div>
            
            <div class="d-flex align-center justify-end">
                <v-icon size="18" color="neutral400" class="mr-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M12.781,2.375C12.4,1.9 11.6,1.9 11.219,2.375L3.219,12.375C3.102,12.522 3.028,12.7 3.007,12.887C2.986,13.074 3.018,13.263 3.1,13.433C3.181,13.602 3.309,13.745 3.468,13.846C3.627,13.946 3.812,14 4,14H8V21C8,21.265 8.105,21.52 8.293,21.707C8.48,21.895 8.735,22 9,22H15C15.265,22 15.52,21.895 15.707,21.707C15.895,21.52 16,21.265 16,21V14H20C20.188,14 20.373,13.946 20.532,13.846C20.691,13.745 20.819,13.602 20.9,13.433C20.982,13.263 21.014,13.074 20.993,12.887C20.972,12.7 20.898,12.522 20.781,12.375L12.781,2.375ZM15,12H14V20H10V12H6.081L12,4.601L17.919,12H15Z" />
                    </svg>
                </v-icon>
                <span class="text-caption text-neutral400 mr-3">{{ item.upvotes }}</span>
                
                <v-icon size="18" color="neutral400" class="mr-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                         <path d="M12.028,2C10.715,2 9.415,2.259 8.201,2.761C6.988,3.264 5.886,4 4.957,4.929C3.082,6.804 2.028,9.348 2.028,12C2.02,14.309 2.82,16.548 4.288,18.33L2.288,20.33C2.149,20.471 2.055,20.649 2.018,20.843C1.981,21.037 2.002,21.238 2.078,21.42C2.161,21.6 2.296,21.751 2.465,21.854C2.634,21.958 2.83,22.008 3.028,22H12.028C14.68,22 17.224,20.946 19.099,19.071C20.975,17.196 22.028,14.652 22.028,12C22.028,9.348 20.975,6.804 19.099,4.929C17.224,3.054 14.68,2 12.028,2ZM12.028,20H5.438L6.368,19.07C6.554,18.883 6.659,18.629 6.659,18.365C6.659,18.101 6.554,17.847 6.368,17.66C5.059,16.352 4.243,14.63 4.061,12.789C3.878,10.947 4.34,9.099 5.367,7.56C6.395,6.02 7.924,4.884 9.695,4.346C11.465,3.808 13.368,3.9 15.078,4.607C16.789,5.314 18.201,6.592 19.075,8.224C19.948,9.856 20.229,11.74 19.869,13.555C19.51,15.37 18.531,17.005 17.102,18.18C15.672,19.355 13.879,19.999 12.028,20Z" />
                    </svg>
                </v-icon>
                <span class="text-caption text-neutral400">{{ item.comments }}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RedditPosts",
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
    isVideo(url) {
      if (!url) return false;
      const cleanUrl = url.split("?")[0];
      const videoExtensions = ["mp4", "webm", "ogg"];
      const extension = cleanUrl.split(".").pop().toLowerCase();
      return videoExtensions.includes(extension);
    },
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
