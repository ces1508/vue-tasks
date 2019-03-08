<template>
  <div>
    <header-bar></header-bar>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 >
            <task-list :list="taskList" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Header from '@/components/shared/Header'
import TaskList from '@/components/Tasks/List'
export default {
  components: {
    'header-bar': Header,
    TaskList
  },
  data () {
    return {
      taskList: [
        {
          id: 1,
          title: 'Manicure',
          address: 'carrera 30 a # 2 i 23',
          barrio: 'los parques',
          position: { lat: 1, long: 1 },
          user: { id: 1, name: 'christian', lastName: 'segura' }
        }
      ]
    }
  }
}
</script>
