import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enUS from '@/i18n/messages/en-US'
import ptBR from '@/i18n/messages/pt-BR'

Vue.use(VueI18n)

export default new VueI18n({
  locale: navigator.language || navigator.userLanguage,
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'pt-BR': ptBR
  }
})
