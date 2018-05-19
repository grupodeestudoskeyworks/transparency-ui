<template>
  <v-menu bottom left>
    <v-btn  icon slot="activator" dark color="primary" fab flat>
      <v-icon x-large dark>person</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile>
        <v-list-tile-title>{{ $t('toolbar.profile') }}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-title>{{ $t('toolbar.logout') }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: 'LoggedUserButton'
}
</script>
