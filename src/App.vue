<template>
  <router-view />
</template>

<script setup>
import { useGlobalTheme } from '@/composables/useLocalization';

const { initTheme } = useGlobalTheme();
initTheme();
</script>
