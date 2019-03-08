<template>
  <v-navigation-drawer v-model="drawer" :mobile-break-point="1024" clipped persistent app>
      <v-list dense>
        <drawer-item v-for="page in pages" :page="page" :key="page.title" :onClick="handleItemClick" />
        <drawer-item :page="drawerLogout" :customClick="logout" />
      </v-list>
    </v-navigation-drawer>
</template>
<script>
import firebase from 'firebase'
import DrawerItem from './DrawerItem'
export default {
  components: {
    DrawerItem
  },
  props: {
    drawer: Boolean
  },
  computed: {
    drawerLogout () {
      return { title: 'salir', icon: 'logout' }
    }
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
    handleItemClick (path) {
      this.$router.push(path)
    },
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
