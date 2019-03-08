// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import firebase from 'firebase'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueAxios, axios)
/* eslint-disable no-new */

let firebaseConfig = {
  apiKey: 'AIzaSyDhU4i53Q7x2MXUuXxI1ETT6A9f8y-bVnc',
  authDomain: 'nails-employes.firebaseapp.com',
  databaseURL: 'https://nails-employes.firebaseio.com',
  projectId: 'nails-employes',
  storageBucket: 'nails-employes.appspot.com',
  messagingSenderId: '483742929114'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
