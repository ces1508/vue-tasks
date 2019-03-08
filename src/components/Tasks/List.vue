<template>
  <div>
    <task v-for="(item, index) in list" :key="index" :task="item"></task>
  </div>
</template>
<script>
import Item from './Item'
export default {
  props: {
    list: Array
  },
  components: {
    task: Item
  }
}
</script>
