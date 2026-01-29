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
  dark: true,
  colors: {
    // KMP Neutral Palette
    neutral50: '#f6f6f6',
    neutral100: '#ebebeb',
    neutral200: '#d1d1d1',
    neutral300: '#b0b0b0',
    neutral400: '#9e9e9e', // on-surface-variant
    neutral500: '#797979',
    neutral600: '#656565',
    neutral700: '#4d4d4d',
    neutral800: '#3e3e3e',
    neutral900: '#212121', // surface-container
    neutral950: '#1b1a1a', // surface

    background: '#1b1a1a', // neutral950
    surface: '#1b1a1a',    // neutral950
    'on-surface': '#d1d1d1', // neutral200
    'surface-variant': '#3e3e3e', // neutral800
    'surface-container': '#212121', // neutral900
    'on-surface-container': '#ebebeb', // neutral100 (Added for KMP match)
    'on-surface-variant': '#9e9e9e', // neutral400
    primary: '#91ca33', // primary500
    'on-primary': '#213403', // primary950
    'primary-container': '#365405', // primary900
    'on-primary-container': '#dfefc4', // primary100
    secondary: '#EEC316', // secondary500
    'on-secondary': '#272000', // secondary950
    error: '#b9221c', // alert700
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#4d4d4d', // neutral700
    'border-opacity': 1,
  }
}

const zzzLightTheme = {
  dark: false,
  colors: {
    // KMP Light Palette
    neutral50: '#f6f6f6',
    neutral100: '#ebebeb',
    neutral200: '#d1d1d1',
    neutral300: '#b0b0b0',
    neutral400: '#9e9e9e',
    neutral500: '#797979',
    neutral600: '#656565',
    neutral700: '#4d4d4d',
    neutral800: '#3e3e3e',
    neutral900: '#212121',
    neutral950: '#1b1a1a',

    background: '#ebebeb', // neutral100
    surface: '#ebebeb',    // neutral100
    'on-surface': '#3e3e3e', // neutral800
    'surface-variant': '#3e3e3e', // neutral800? - Actually onSurfaceVariant is neutral600
    'surface-container': '#f6f6f6', // neutral50
    'on-surface-container': '#3e3e3e', // neutral800 (Added for KMP match)
    'on-surface-variant': '#656565', // neutral600

    primary: '#76ab1d', // primary600
    'on-primary': '#ebeee5', // primary50
    'primary-container': '#cbe899', // primary200
    'on-primary-container': '#365405', // primary900

    secondary: '#DDB208', // secondary600
    'on-secondary': '#272000', // secondary950

    error: '#dc2d26', // alert600
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#ebebeb', // neutral100
    'border-opacity': 1,
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
      light: zzzLightTheme,
    },
  },
})
