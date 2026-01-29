<template>
  <v-card flat color="surface-container" rounded="xl" class="fill-height d-flex flex-column">
      <!-- Header -->
      <div class="d-flex align-center px-4 pt-4 pb-2">
          <v-icon color="neutral400" size="24" class="mr-2">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M10.818,20.975C11.018,21.058 11.242,20.925 11.249,20.716C11.354,17.526 9.69,16.884 7.486,16.06C7.216,15.959 7.222,15.592 7.494,15.494C9.707,14.697 10.053,14.397 10.263,14.155C10.43,13.962 10.808,13.501 11.698,11.224C11.804,10.953 12.213,10.959 12.315,11.231C13.135,13.421 13.554,13.548 13.922,13.88C14.179,14.113 15.384,14.907 16.694,15.482C16.952,15.595 16.959,15.959 16.701,16.069C14.391,17.053 12.882,17.787 12.999,20.607C13.009,20.843 13.29,20.965 13.494,20.834C14.288,20.327 15.047,20.027 16.479,19.633C18.425,18.956 19.036,18.478 20.133,17.165L20.156,17.137C20.926,15.738 21.198,14.743 20.852,12.193C20.85,12.178 20.847,12.162 20.842,12.147C20.278,10.316 19.177,8.359 17.587,7.235C17.309,7.038 16.722,7.577 16.682,7.907C16.664,8.057 16.632,8.203 16.59,8.337C16.578,8.374 16.559,8.409 16.532,8.437C16.093,8.909 15.545,8.893 15.431,8.884C15.417,8.883 15.402,8.882 15.388,8.882C14.742,8.873 14.02,8.472 13.519,7.815C13.134,7.265 12.952,6.523 13.035,5.463C13.037,5.432 13.045,5.402 13.057,5.373C13.518,4.291 14.203,3.524 15.384,2.895C15.629,2.765 15.616,2.413 15.347,2.336C14.112,1.978 12.563,1.801 11.272,2.351C8.545,3.647 7.746,5.164 8.483,6.705C8.934,7.469 9.596,9.207 9.18,9.77C8.473,10.688 6.729,10.711 6.344,10.081C6.011,9.538 6.121,8.646 6.139,8.029C6.145,7.806 5.903,7.713 5.732,7.865C3.456,9.89 2.723,13.041 3.09,14.657C3.576,17.048 4.625,18.157 6.716,19.278L10.818,20.975Z" />
            </svg>
          </v-icon>
          <span class="text-subtitle-1 font-weight-bold text-neutral400">{{ t('forum_popular') }}</span>
      </div>

      <!-- Filter Chips (ForumIndicator) -->
      <div class="px-4 pb-3">
        <v-chip-group
            v-model="tab"
            selected-class="chip-selected"
            mandatory
            class="forum-chip-group"
        >
            <v-chip 
                value="Reddit" 
                rounded="pill" 
                variant="outlined" 
                class="chip-default font-weight-bold"
            >{{ t('reddit') }}</v-chip>
            <v-chip 
                value="Bahamut" 
                rounded="pill" 
                variant="outlined"
                class="chip-default font-weight-bold"
            >{{ t('bahamut') }}</v-chip>
            <v-chip 
                value="PTT" 
                rounded="pill" 
                variant="outlined"
                class="chip-default font-weight-bold"
            >{{ t('ptt') }}</v-chip>
            <v-chip 
                value="NGA" 
                rounded="pill" 
                variant="outlined"
                class="chip-default font-weight-bold"
            >{{ t('nga') }}</v-chip>
        </v-chip-group>
      </div>

      <!-- Content -->
      <v-window v-model="tab" class="flex-grow-1">
        <v-window-item value="Reddit" class="fill-height">
             <RedditPosts :items="items.RedditPosts" />
        </v-window-item>
        <v-window-item value="Bahamut" class="fill-height">
             <Bahamut :items="items.Bahamut" />
        </v-window-item>
        <v-window-item value="PTT" class="fill-height">
             <PTTList :items="items.PTTList" />
        </v-window-item>
        <v-window-item value="NGA" class="fill-height">
             <NGAList :items="items.NGAList" />
        </v-window-item>
      </v-window>
  </v-card>
</template>

<script>
import Bahamut from "./Bahamut.vue";
import NGAList from "./Nga.vue";
import PTTList from "./Ptt.vue";
import RedditPosts from "./Reddit.vue";
import { useLocalization } from '@/composables/useLocalization';
import { useCachedFetch } from '@/composables/useCachedFetch';

export default {
  name: "AllForumCard",
  components: {
    Bahamut,
    NGAList,
    PTTList,
    RedditPosts,
  },
  setup() {
      const { t } = useLocalization();
      return { t };
  },
  data() {
    return {
      tab: 'Reddit',
      items: {
        Bahamut: [],
        NGAList: [],
        PTTList: [],
        RedditPosts: [],
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
       const sources = [
         { key: 'Bahamut', sheet: 'baha', cacheKey: 'forum_baha' },
         { key: 'NGAList', sheet: 'nga', cacheKey: 'forum_nga' },
         { key: 'PTTList', sheet: 'ptt', cacheKey: 'forum_ptt' },
         { key: 'RedditPosts', sheet: 'reddit', cacheKey: 'forum_reddit' }
       ];

       const { fetchWithCache } = useCachedFetch();

       try {
         const requests = sources.map(src => 
            fetchWithCache(
                `https://api.zzz-archive.com/?sheetName=${src.sheet}`,
                src.cacheKey
            )
            .then(data => ({ 
                key: src.key, 
                data: Array.isArray(data) ? data : (data[src.sheet] || []) 
            }))
         );

         const results = await Promise.all(requests);
         
         results.forEach(result => {
             this.items[result.key] = result.data;
         });
       } catch (error) {
         console.error("Error fetching forum data", error);
       }
    }
  },
};

</script>

<style scoped>
/* Custom style to mimic KMP chip selection */
.chip-default {
    border-color: rgba(var(--v-theme-border), 1) !important;
    background-color: rgb(var(--v-theme-surface)) !important;
    color: rgb(var(--v-theme-on-surface)) !important;
}

.chip-selected {
    background-color: rgb(var(--v-theme-primary-container)) !important;
    color: rgb(var(--v-theme-on-primary-container)) !important;
    border-color: transparent !important;
}

/* Hide default checkmark if any */
:deep(.v-chip__filter) {
    display: none;
}
:deep(.v-chip--selected .v-chip__content) {
    font-weight: bold;
}
</style>
