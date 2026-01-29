<template>
  <v-container fluid class="pa-4 position-relative" style="min-height: 80vh;">
    <!-- Header -->
    <div class="text-h4 font-weight-bold mb-4 ml-2">Agents</div>

    <!-- Agent Grid (Visual Background with Blur) -->
    <v-row class="agent-grid-blur">
      <v-col
        v-for="agent in agents"
        :key="agent.id"
        cols="4"
        sm="3"
        md="2"
      >
        <v-card flat color="transparent" class="d-flex flex-column align-center gap-2">
            <!-- Agent Avatar -->
             <div 
                class="rounded-lg overflow-hidden position-relative"
                style="width: 100%; aspect-ratio: 1;"
             >
                <v-img 
                    :src="agent.imageUrl" 
                    cover 
                    class="bg-surface-variant"
                ></v-img>
                <!-- Rarity Badge (Mock) -->
                <div 
                    class="position-absolute subheading font-weight-bold text-white px-2 py-0 rounded-tl-lg"
                    style="bottom: 0; right: 0; background: rgba(0,0,0,0.6);"
                >
                    {{ agent.rarity }}★
                </div>
             </div>
             <!-- Name -->
             <div class="text-subtitle-2 font-weight-medium text-center text-truncate w-100">
                 {{ agent.name }}
             </div>
        </v-card>
      </v-col>
    </v-row>
    
    <!-- Mask Overlay -->
    <div 
        class="position-absolute d-flex flex-column justify-center align-center"
        style="
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%; 
            z-index: 10;
        "
    >
        <v-icon size="64" color="white" class="mb-4" style="text-shadow: 0 4px 8px rgba(0,0,0,0.5);">mdi-lock</v-icon>
        <div class="text-h5 font-weight-bold text-white mb-6" style="text-shadow: 0 4px 8px rgba(0,0,0,0.5);">{{ t('agent_database') }}</div>
        <v-btn
            rounded="pill"
            color="#212121"
            variant="flat"
            class="text-white px-6 font-weight-bold"
            height="36"
            to="/"
            style="border: 1px solid rgba(255,255,255,0.2);"
        >
            {{ t('go_to_app') }}
        </v-btn>
    </div>

  </v-container>
</template>

<script>
import { useLocalization } from '@/composables/useLocalization';

export default {
  name: 'AgentsPage',
  setup() {
      const { t } = useLocalization();
      return { t };
  },
  data() {
    // Generate static list of 18 agents to ensure background is always filled
    const mockAgents = Array.from({ length: 18 }, (_, i) => {
        const id = i + 1; 
        return {
            id: id,
            name: `Agent ${id}`,
            rarity: id % 2 === 0 ? 5 : 4,
            imageUrl: `https://raw.githubusercontent.com/mrfatworm/ZZZ-Archive-Asset/refs/heads/main/Asset/Agent/Profile/${id}.webp`
        };
    });

    return {
      agents: mockAgents
    };
  },
  async mounted() {
    // Optional: Try to fetch real names, but we have images already
    await this.fetchAgents();
  },
  methods: {
    async fetchAgents() {
      try {
        const response = await fetch(
           "https://cloudflare-cors-anywhere.zzz-archive-back-end.workers.dev/?https://raw.githubusercontent.com/mrfatworm/ZZZ-Archive-Asset/refs/heads/main/Api/Agent/List.json"
        );
        const data = await response.json();
        // Update if fetch succeeds, otherwise keep mock
        if (data.agents && data.agents.length > 0) {
            this.agents = data.agents.map(agent => ({
                 id: agent.id,
                 name: agent.name,
                 rarity: agent.rarity,
                 imageUrl: `https://raw.githubusercontent.com/mrfatworm/ZZZ-Archive-Asset/refs/heads/main/Asset/Agent/Profile/${agent.id}.webp`
            }));
        }
      } catch (error) {
        console.error("Error fetching agents, using fallback:", error);
      }
    }
  }
}
</script>

<style scoped>
.gap-2 {
    gap: 8px;
}
.agent-grid-blur {
    filter: blur(5px) grayscale(0.6) opacity(0.6);
    pointer-events: none;
    user-select: none;
}
</style>
