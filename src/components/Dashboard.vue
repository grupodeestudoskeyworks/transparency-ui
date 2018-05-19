<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>Dashboard</h1>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  name: 'Dashboard',
  created () {
    document.title = this.$i18n.t('title.dashboard')
  }
}
</script>