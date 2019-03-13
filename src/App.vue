<template>
  <v-app id="inspire">
    <sib-main></sib-main>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import SibMain from './components/SibMain.vue'

export default {
  name: 'app',
  components: {
      SibMain
  }
}
</script>

<style>

</style>
