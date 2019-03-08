<template>
  <v-navigation-drawer v-model="drawer" :mobile-break-point="1024" clipped persistent app>
      <v-list dense>
        <v-list-tile v-for="page in pages" :key="page.title" @click="$router.push(page.path)">
          <v-list-tile-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ page.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
import firebase from 'firebase'
export default {
  props: {
    drawer: Boolean
  },
  data () {
    return {
      pages: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Completed', path: '/completed', icon: 'playlist-check' },
        { title: 'Cuenta', path: '/account', icon: 'person' }
      ]
    }
  },
  methods: {
    async logout () {
      try {
        await firebase.auth().signOut()
        this.$router.replace('/login')
      } catch (e) {
        alert('Lo sentimos, estamos presentendo problemas para desconectarte')
      }
    }
  }
}
</script>
