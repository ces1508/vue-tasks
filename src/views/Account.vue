<template>
  <div>
    <header-bar></header-bar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <v-form xs12 sm8 ofset-sm-2 md6 ofset-md3>
              <v-text-field v-model="profile.firstName" label="nombres"/>
              <v-text-field v-model="profile.lastName" label="apellidos"/>
              <v-text-field v-model="profile.address" label="dirrecion"/>
              <v-text-field v-model="profile.phone" label="telefono"/>
              <v-btn color='success'>Actualizar perfil</v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Header from '@/components/shared/Header'
export default {
  components: {
    'header-bar': Header
  },
  data () {
    return {
      profile: {
        firstName: 'chrsitian',
        lastName: 'Segura',
        address: 'carrera 30 A # 2 i 23',
        phone: '3203230522'
      }
    }
  }
}
</script>
