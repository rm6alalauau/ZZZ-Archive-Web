
import { ref, computed, watch } from 'vue';
import { useTheme } from 'vuetify';
import { messages } from '../locales/messages';

const currentLocale = ref('zh');

export function useLocalization() {

    // Load saved locale
    // Load saved locale or detect from browser
    const savedLocale = localStorage.getItem('user_locale');
    if (savedLocale && messages[savedLocale]) {
        currentLocale.value = savedLocale;
    } else {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('zh')) {
            currentLocale.value = 'zh';
        } else if (browserLang.startsWith('ja')) {
            currentLocale.value = 'ja';
        } else {
            currentLocale.value = 'en';
        }
    }

    const t = (key) => {
        return messages[currentLocale.value]?.[key] || key;
    };

    const setLocale = (lang) => {
        if (messages[lang]) {
            currentLocale.value = lang;
            localStorage.setItem('user_locale', lang);
        }
    };

    const currentLangName = computed(() => {
        switch (currentLocale.value) {
            case 'zh': return '繁體中文';
            case 'en': return 'English';
            case 'ja': return '日本語';
            default: return '繁體中文';
        }
    });

    return {
        locale: currentLocale,
        t,
        setLocale,
        currentLangName
    };
}

export function useGlobalTheme() {
    const theme = useTheme();

    // Initialize theme based on saved preference or system
    const initTheme = () => {
        const savedTheme = localStorage.getItem('user_theme');
        if (savedTheme) {
            theme.global.name.value = savedTheme;
        } else {
            // Default to dark if no preference
            theme.global.name.value = 'zzzDarkTheme';
        }
    };

    const setTheme = (mode) => {
        // mode: 'light' or 'dark' (mapped to 'zzzDarkTheme')
        const themeName = mode === 'light' ? 'light' : 'zzzDarkTheme';
        theme.global.name.value = themeName;
        localStorage.setItem('user_theme', themeName);
    };

    const currentThemeName = computed(() => {
        return theme.global.current.value.dark ? 'dark_theme' : 'light_theme'; // Returns key for translation
    });

    // Auto-init on composable use (singleton-ish behavior via Vuetify)
    // Actually, calling init in App.vue or Layout is safer.

    return {
        initTheme,
        setTheme,
        currentThemeName,
        isDark: computed(() => theme.global.current.value.dark)
    };
}
