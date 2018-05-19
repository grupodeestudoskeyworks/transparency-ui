<template>
  <div>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>
<script>
export default {
  name: 'Public',
  created () {
    document.title = this.$i18n.t('title.app')
  }
}
</script>
