<template>
  <div>
    <header-bar></header-bar>
    <v-content>
      <v-container>
        <h1>Pendientes</h1>
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
  async created () {
    try {
      let tasks = await this.$http.get('http://localhost:3000/tasks', { params: { state: 'completed' } })
      this.taskList = tasks.data
    } catch (e) {
      alert('los sentimos estamos presetnando problemas para ')
    }
  },
  data () {
    return {
      taskList: [],
      showDrawer: true
    }
  }
}
</script>
