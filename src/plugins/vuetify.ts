// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify

import { createVuetify, ThemeDefinition } from 'vuetify'

const lightCustom: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#F8F9F9",
  },
}

const darkCustom: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#181818",
  },
}

export const vuetify = createVuetify({
  theme: { 
    defaultTheme: 'lightCustom' ,
    themes:{
      darkCustom,
      lightCustom
    }
  },
})
