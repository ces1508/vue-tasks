<template>
  <header>
    <drawer :drawer="drawer"></drawer>
    <v-toolbar color="indigo" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Home</v-toolbar-title>
    </v-toolbar>
  </header>
</template>

<script>
import Drawer from '@/components/shared/Drawer'
export default {
  components: {
    drawer: Drawer
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>
