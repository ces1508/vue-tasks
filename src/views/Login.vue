<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md3 >
        <v-form lazy-validation v-model='formIsValid' ref='form' @submit="validate">
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
    validate () {
      if (this.$refs.form.validate()) {
        console.log('ahora podemos crear un usuario')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
