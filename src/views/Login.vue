<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md3 >
        <v-form lazy-validation v-model='formIsValid' ref='form' @submit.prevent="onSubmit">
          <v-text-field
            label='Email'
            v-model='email'
            :rules="emailRules"
            required></v-text-field>
          <v-text-field
            required
            type='password'
            label='password'
            :rules="passwordRules"
            v-model='password'></v-text-field>
          <v-btn class="btn-green" type='submit' >Iniciar Sesion</v-btn>
        </v-form>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      formIsValid: true,
      email: '',
      emailRules: [
        v => !!v || 'Email es requerido',
        v => /.+@.+/.test(v) || 'ingresa un email valido'
      ],
      passwordRules: [
        v => !!v || 'La contrasenia es requerida'
      ],
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      console.log('in onsubmit')
      if (this.$refs.form.validate()) {
        let { email, password } = this
        try {
          let user = await firebase.auth().signInWithEmailAndPassword(email, password)
          console.log(user)
        } catch (e) {
          console.log(e)
          alert(e.message)
        }
      }
    }
  }
}
</script>
<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .btn-green {
    color: #fff !important;
    background-color: green !important;
  }
</style>
