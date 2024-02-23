import { createI18n } from 'vue-i18n';

const messages = {
  es: require('../locales/es.json'),
  en: require('../locales/en.json')
};

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages
});

export default i18n;