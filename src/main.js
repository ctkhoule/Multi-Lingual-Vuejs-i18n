import Vue from 'vue'
import App from './App.vue'
import router from './router'
// le package VueI18n
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
// Traduction du message
const messages = {
  // Anglais
  en: {
    message: {
      value: 'This is an exemple of content translate'
    }
  },
  // Français
  fr: {
    message: {
      value: 'Ceci est un exemple de traduction de contenu'
    }
  },
  // Allemand
  gr: {
    message: {
      value: 'Dies ist ein Beispiel für die Übersetzung von Inhalten'
    }
  },
  // Portugais
  pr: {
    message: {
      value: 'Este é um exemplo de tradução de conteúdo'
    }
  }
};

const i18n = new VueI18n({
  local: 'en',
  messages
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')
