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
          <v-text-field
            required
            type='password'
            label='confirmar contrasenia'
            :rules="[v => v === password || 'las contrasenias no coinciden']"
            v-model='passwordConfirmation'></v-text-field>
          <v-btn type='submit' color="primary" :loading="creating"> Registrarse </v-btn>
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
      creating: false,
      email: '',
      emailRules: [
        v => !!v || 'Email es requerido',
        v => /.+@.+/.test(v) || 'ingresa un email valido'
      ],
      passwordRules: [
        v => !!v || 'La contrasenia es requerida'
      ],
      password: '',
      // pcRules: [
      //   v => !!v || 'este campo no pude ser vacio',
      //   v => v == this.password || 'las contrasenias no coinciden'
      // ],
      passwordConfirmation: ''
    }
  },
  methods: {
    async validate () {
      if (this.$refs.form.validate()) {
        this.creating = true

        let data = { email: this.email, password: this.password }
        try {
          // let users = await this.axios.get('https://nails-employes.firebaseio.com/users.json')
          // console.log('users', users)
          let created = await this.axios.post('https://nails-employes.firebaseio.com/users.json', {
            data,
            params: { auth: 'vtf2MMgKZNgNES5ETZesny3JiThYUdzJtDcoJSYO' }
          })
          console.log(created)
          this.creating = false
        } catch (e) {
          this.creating = false
        }
      }
    }
  }
}
</script>
