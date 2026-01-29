<template>
  <v-card rounded="xl" class="pa-0" flat color="surface-container">
    <!-- Header Section -->
    <div class="position-relative" style="height: 120px; overflow: hidden; border-radius: 16px;">
      <!-- Background Image -->
      <v-img
        :src="apiData.hasAccount && apiData.card ? apiData.card : previewImage"
        cover
        height="100%"
        class="align-end"
      >
        <template v-slot:placeholder>
           <v-img :src="previewImage" cover height="100%"></v-img>
        </template>
      </v-img>

      <!-- Content Layer -->
      <div class="position-absolute d-flex flex-column justify-space-between pa-3 w-100 h-100" style="top: 0; left: 0; z-index: 1;">
          <!-- Top Left: Check-in Button -->
          <div class="d-flex">
               <div 
                  class="d-flex align-center px-3 py-1 rounded-pill" 
                  style="background: rgba(0,0,0,0.4); gap: 6px; backdrop-filter: blur(0px);"
               >
                  <v-icon size="16" :color="signResult === 'OK' ? 'primary' : 'white'">
                      {{ signResult === 'OK' ? 'mdi-check-circle' : 'mdi-calendar-clock' }}
                  </v-icon>
                  <span class="text-caption font-weight-bold text-white">
                      {{ signResult === 'OK' ? t('checked_in') : t('check_in') }}
                  </span>
               </div>
          </div>

          <!-- Bottom Row: Player Info & Energy -->
          <div class="d-flex align-end justify-space-between w-100">
                <!-- Player Info -->
                <div class="d-flex align-center" style="gap: 12px; overflow: hidden;">
                    <v-avatar size="48" class="flex-shrink-0" style="border: 2px solid white">
                         <v-img :src="apiData.hasAccount && apiData.icon ? apiData.icon : '//placehold.it/48x48'"></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column" style="min-width: 0;">
                        <!-- Name with simulated outline -->
                        <div class="text-subtitle-2 font-weight-black text-white text-truncate" style="text-shadow: 0 0 2px rgba(0,0,0,0.8);">
                            {{ apiData.hasAccount ? apiData.nickname : '----' }}
                        </div>
                        <!-- UID -->
                        <div class="text-caption font-weight-bold text-white text-truncate" style="text-shadow: 0 0 2px rgba(0,0,0,0.8); opacity: 0.9;">
                            UID {{ apiData.hasAccount ? apiData.gameRoleId : '000000000' }}
                        </div>
                    </div>
                </div>

                <!-- Energy Pill -->
                <div 
                   class="d-flex align-center px-3 py-1 rounded-pill flex-shrink-0" 
                   style="background: rgba(0,0,0,0.4); gap: 6px;"
                >
                    <v-icon size="16" color="primary">mdi-battery-charging</v-icon>
                    <span class="text-caption font-weight-bold text-white">
                        {{ apiData.hasAccount ? apiData.currentEnergy : '---' }} / {{ apiData.maxEnergy || '240' }}
                    </span>
                </div>
          </div>
      </div>

      <!-- No Account Overlay (Mask + Button) -->
      <div 
        v-if="!apiData.hasAccount" 
        class="position-absolute d-flex justify-center align-center w-100 h-100" 
        style="top: 0; left: 0; z-index: 2; background: rgba(0,0,0,0.4);"
      >
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

    <!-- Missions Section (Only if Has Account) -->
    <div v-if="apiData.hasAccount" class="position-relative">
        <div class="pa-4 d-flex flex-wrap" style="gap: 12px;">
             <!-- Daily Missions -->
             <div class="flex-grow-1" style="flex-basis: 200px; min-width: 200px;">
                 <div class="d-flex flex-column gap-2 overflow-hidden rounded-lg">
                     <todo-item :title="t('engagement_today')" content="0 / 100" />
                     <todo-item :title="t('scratch_card')" content="未購買" />
                     <todo-item :title="t('video_store')" content="休息" />
                 </div>
             </div>
    
             <!-- Weekly Missions -->
             <div class="flex-grow-1" style="flex-basis: 200px; min-width: 200px;">
                 <div class="d-flex flex-column gap-2">
                     <div class="overflow-hidden rounded-lg">
                         <todo-item :title="t('bounty_commissions')" content="0 / 4" />
                         <todo-item :title="t('ridu_weekly')" content="0 / 10000" />
                     </div>
                     
                     <!-- My Agents Link -->
                     <div 
                        class="d-flex align-center justify-end pa-3 rounded-lg mt-1"
                     >
                        <v-icon color="on-surface-variant" size="16" class="mr-2">mdi-star</v-icon>
                        <span class="text-subtitle-2 text-on-surface-variant mr-1">{{ t('my_agent') }}</span>
                        <v-icon color="on-surface-variant" size="16">mdi-chevron-right</v-icon>
                     </div>
                 </div>
             </div>
        </div>
    </div>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';
import { useLocalization } from '@/composables/useLocalization';

const TodoItem = defineComponent({
  props: ['title', 'content', 'done', 'warning'],
  template: `
    <div class="d-flex align-center justify-space-between py-3 px-4 bg-surface" style="gap: 12px;">
        <span class="text-caption text-on-surface-variant text-truncate" style="flex: 1;">{{ title }}</span>
        <div class="d-flex align-center flex-shrink-0">
             <span class="text-body-2 text-on-surface font-weight-medium mr-2">{{ content }}</span>
             <v-icon v-if="done" color="primary" size="20">mdi-check-circle</v-icon>
             <v-icon v-if="warning" color="error" size="20">mdi-alert-circle</v-icon>
        </div>
    </div>
  `
})

export default {
  name: 'HoYoLabCard',
  components: { TodoItem },
  setup() {
      const { t } = useLocalization();
      return { t };
  },
  data() {
    return {
      apiData: {},
      previewImage: null,
      signResult: null, // "OK" or null
    };
  },
  created() {
      // Dynamic import to handle asset path
      import('../assets/img_hoyolab_card_preview.webp').then(module => {
          this.previewImage = module.default;
      });
  },
  mounted() {
      // Simulate "No Token/No Content" state but maintain Visual Height
      this.apiData = {
          hasAccount: false, // Triggers "No Account" UI
      };
  },
  methods: {
    // No Loading needed
  }
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
