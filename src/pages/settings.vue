<template>
  <v-container fluid class="pa-4 custom-container">
    
    <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
            <div class="d-flex flex-column gap-4">
                <!-- 1. General Settings Card (Language, Theme) -->
                <v-card flat rounded="xl" color="surface-container">
                    <v-list bg-color="transparent" class="pa-0">
                    
                    <!-- Language -->
                    <v-list-item class="py-3 px-4">
                        <div class="d-flex align-center justify-space-between w-100">
                            <span class="text-subtitle-1 font-weight-medium text-on-surface-variant">{{ t('language') }}</span>
                            
                            <v-menu location="bottom end" offset="10">
                                <template v-slot:activator="{ props }">
                                    <v-btn
                                        variant="text"
                                        class="text-body-2 text-on-surface pe-0"
                                        v-bind="props"
                                        :ripple="false"
                                    >
                                        {{ currentLangName }}
                                        <v-icon right size="small" color="on-surface-variant" class="ms-1">mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list rounded="xl" bg-color="surface-container" class="elevation-4">
                                    <v-list-item @click="setLocale('zh')" value="zh" density="compact" rounded="lg" class="mb-1 mx-1">
                                         <span :class="{'text-primary': locale === 'zh'}">繁體中文</span>
                                    </v-list-item>
                                    <v-list-item @click="setLocale('en')" value="en" density="compact" rounded="lg" class="mb-1 mx-1">
                                         <span :class="{'text-primary': locale === 'en'}">English</span>
                                    </v-list-item>
                                    <v-list-item @click="setLocale('ja')" value="ja" density="compact" rounded="lg" class="mx-1">
                                         <span :class="{'text-primary': locale === 'ja'}">日本語</span>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-list-item>

                    <v-divider class="mx-4"></v-divider>

                    <!-- Color Theme -->
                    <v-list-item class="py-3 px-4">
                        <div class="d-flex align-center justify-space-between w-100">
                            <span class="text-subtitle-1 font-weight-medium text-on-surface-variant">{{ t('color_theme') }}</span>
                            
                            <v-menu location="bottom end" offset="10">
                                <template v-slot:activator="{ props }">
                                     <v-btn
                                        variant="text"
                                        class="text-body-2 text-on-surface pe-0"
                                        v-bind="props"
                                        :ripple="false"
                                    >
                                        {{ t(currentThemeName) }}
                                        <v-icon right size="small" color="on-surface-variant" class="ms-1">mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list rounded="xl" bg-color="surface-container" class="elevation-4">
                                    <v-list-item @click="setTheme('dark')" value="dark" density="compact" rounded="lg" class="mb-1 mx-1">
                                        <span :class="{'text-primary': isDark}">{{ t('dark_theme') }}</span>
                                    </v-list-item>
                                    <v-list-item @click="setTheme('light')" value="light" density="compact" rounded="lg" class="mx-1">
                                        <span :class="{'text-primary': !isDark}">{{ t('light_theme') }}</span>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-list-item>

                    </v-list>
                </v-card>

                <!-- 2. Open Source Card -->
                <v-card flat rounded="xl" color="surface-container">
                    <v-list bg-color="transparent" class="pa-0">
                        <v-list-item class="py-3 px-4">
                            <div class="d-flex align-center justify-space-between w-100">
                            <span class="text-subtitle-1 font-weight-medium text-on-surface-variant">{{ t('open_source') }}</span>
                            <div class="d-flex align-center gap-2">
                                <a href="https://www.figma.com/@mrfatworm" target="_blank" class="text-decoration-none d-flex">
                                    <v-icon size="24" color="unset">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M9.5,22C11.437,22 13,20.437 13,18.5V15H9.5C7.563,15 6,16.563 6,18.5C6,20.437 7.563,22 9.5,22Z" fill="#0ACF83" />
                                            <path d="M6,12C6,10.34 7.563,9 9.5,9H13V15H9.5C7.563,15 6,13.66 6,12Z" fill="#A259FF" />
                                            <path d="M6,5.5C6,3.563 7.563,2 9.5,2H13V9H9.5C7.563,9 6,7.437 6,5.5Z" fill="#F24E1E" />
                                            <path d="M13,2H16C17.66,2 19,3.563 19,5.5C19,7.437 17.66,9 16,9H13V2Z" fill="#FF7262" />
                                            <path d="M19,12C19,13.66 17.66,15 16,15C14.34,15 13,13.66 13,12C13,10.34 14.34,9 16,9C17.66,9 19,10.34 19,12Z" fill="#1ABCFE" />
                                        </svg>
                                    </v-icon>
                                </a>
                                <a href="https://github.com/mrfatworm/ZZZ-Archive" target="_blank" class="text-decoration-none d-flex">
                                    <v-icon size="24" :color="isDark ? 'white' : 'black'">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M12,2C10.687,2 9.386,2.259 8.173,2.761C6.96,3.264 5.858,4 4.929,4.929C3.054,6.804 2,9.348 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21V19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26V21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,10.687 21.741,9.386 21.239,8.173C20.736,6.96 20,5.858 19.071,4.929C18.142,4 17.04,3.264 15.827,2.761C14.614,2.259 13.313,2 12,2Z" :fill="isDark ? '#EBEBEB' : '#171515'" />
                                        </svg>
                                    </v-icon>
                                </a>
                            </div>
                            </div>
                        </v-list-item>
                    </v-list>
                </v-card>

                <!-- 3. Contributors Card -->
                <v-card flat rounded="xl" color="surface-container" class="py-4 px-4">
                    <div class="d-flex flex-column align-center mb-6">
                         <div class="text-body-1 text-on-surface-variant mb-1">{{ t('contributors') }}</div>
                         <div class="d-flex align-center gap-2">
                             <v-icon color="on-surface-variant" size="small">mdi-account-group</v-icon>
                             <span class="text-caption text-on-surface-variant">2</span> 
                         </div>
                    </div>

                    <div class="d-flex flex-column gap-5">
                        <!-- Developers -->
                        <div class="d-flex flex-column">
                             <div class="text-caption mb-1" :style="{ color: roleColor }">{{ t('developer') }}</div>
                             <div class="d-flex flex-column gap-1 pl-0">
                                 <div class="d-flex align-center gap-2">
                                     <span class="text-body-1 font-weight-bold" :style="{ color: nameColor }">mrfatworm</span>
                                     <span class="text-caption" :style="{ color: descColor }">(ZZZ Archive)</span>
                                 </div>
                                 <div class="d-flex align-center gap-2">
                                     <span class="text-body-1 font-weight-bold" :style="{ color: nameColor }">rm6alalauau</span>
                                     <span class="text-caption" :style="{ color: descColor }">(ZZZ Archive Web)</span>
                                 </div>
                             </div>
                        </div>

                        <!-- UI/UX -->
                        <div class="d-flex flex-column">
                             <div class="text-caption mb-1" :style="{ color: roleColor }">{{ t('ui_ux_designers') }}</div>
                             <div class="d-flex flex-column gap-1 pl-0">
                                 <div class="d-flex align-center gap-2">
                                     <span class="text-body-1 font-weight-bold" :style="{ color: nameColor }">mrfatworm</span>
                                 </div>
                             </div>
                        </div>

                        <!-- Data Integration -->
                         <div class="d-flex flex-column">
                             <div class="text-caption mb-1" :style="{ color: roleColor }">{{ t('data_integration') }}</div>
                             <div class="d-flex flex-column gap-1 pl-0">
                                 <div class="d-flex align-center gap-2">
                                     <span class="text-body-1 font-weight-bold" :style="{ color: nameColor }">mrfatworm</span>
                                 </div>
                                 <div class="d-flex align-center gap-2">
                                     <span class="text-body-1 font-weight-bold" :style="{ color: nameColor }">rm6alalauau</span>
                                 </div>
                             </div>
                        </div>
                    </div>
                </v-card>
            </div>
        </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { useLocalization, useGlobalTheme } from '@/composables/useLocalization';
import { useTheme } from 'vuetify';
import { computed } from 'vue';

const { t, locale, setLocale, currentLangName } = useLocalization();
const { setTheme, currentThemeName, isDark } = useGlobalTheme();
const theme = useTheme();

const nameColor = computed(() => theme.global.current.value.dark ? '#ebebeb' : '#3e3e3e');
const roleColor = computed(() => theme.global.current.value.dark ? '#9e9e9e' : '#656565');
const descColor = computed(() => theme.global.current.value.dark ? '#9e9e9e' : '#656565');
</script>

<style scoped>
.custom-container {
    max-width: 1200px;
    margin: 0 auto;
}
.gap-4 {
    gap: 16px;
}
.gap-2 {
    gap: 8px;
}
.gap-6 {
    gap: 24px;
}
.gap-5 {
    gap: 20px;
}
</style>
