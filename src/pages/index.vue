<template>
  <v-container fluid class="pa-4">
    <AppDownloadLinks class="mb-2" />

    <v-row>
      <!-- Left Column -->
      <v-col cols="12" md="6" class="d-flex flex-column gap-4">
        <HoYoLabCard />
        <PixivCard />
        <TwitterCard />
      </v-col>

      <!-- Right Column -->
      <v-col cols="12" md="6" class="d-flex flex-column gap-4">
        <AllForumCard class="flex-grow-1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import AppDownloadLinks from "@/components/AppDownloadLinks.vue";
import HoYoLabCard from "@/components/HoYoLabCard.vue"; // Replaces Profile
import PixivCard from "@/components/PixivCard.vue";
import TwitterCard from "@/components/TwitterCard.vue"; // Replaces X
import AllForumCard from "@/components/AllForumCard.vue"; // Replaces Forums

const warningVisible = ref(true);
</script>

<style scoped>
.flex-grow-1 {
  flex-grow: 1; /* 使組件填滿剩餘空間 */
}
.gap-4 {
  gap: 16px;
}
</style>
