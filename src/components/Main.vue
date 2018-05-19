<template>
  <div>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.href"
          append
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="$t('toolbar.app')"></v-toolbar-title>
      <v-spacer></v-spacer>
      <logged-user-button/>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
import LoggedUserButton from '@/components/LoggedUserButton'

export default {
  name: 'Main',
  data () {
    return {
      clipped: false,
      drawer: true,
      items: [{
        icon: 'fas fa-desktop',
        title: this.$i18n.t('menu.dashboard'),
        href: '/'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  components: {
    LoggedUserButton
  },
  created () {
    document.title = this.$i18n.t('title.app')
  }
}
</script>
