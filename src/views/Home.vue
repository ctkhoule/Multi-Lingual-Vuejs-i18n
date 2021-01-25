<!-- Appeler les composants de la page d4accueil -->
<template>
  <div>
    <h3>Application multilingue utilisant le plugin vue-i18n</h3>
    <SwitchLanguage/>
    <Multilingual/>
  </div>
</template>

<script>
// @ is an alias to /src
import SwitchLanguage from '../components/SwitchLanguage.vue'
import Multilingual from '../components/Multilingual.vue'

export default {
  name: 'Home',
  components: {
    SwitchLanguage,
    Multilingual
  }
}
</script>
