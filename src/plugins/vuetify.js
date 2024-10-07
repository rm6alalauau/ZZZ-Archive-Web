/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Color theme
const zzzDarkTheme = {
  dark: false,
  colors: {
    background: '#000000',
    surface: '#151515',
    'on-surface': '#e7e7e7',
    'surface-container': '#2a2a2a',
    'on-surface-container': '#d1d1d1',
    'outline': '#797979',
    'on-surface-variant': '#e7e7e7',
    primary: '#5C8A10',
    'on-primary': '#213403',
    'primary-container': '#4D730D',
    'on-primary-container': '#CBE899',
    secondary: '#d19a00',
    'on-secondary': '#442404',
    error: '#fca9a5',
    'on-error': '#450c0a',
    info: '#2196F3',
  },
  variables: {
    'border-color': '#797979',
    'border-opacity': 1,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'zzzDarkTheme',
    themes: {
      zzzDarkTheme,
    },
  },
})
