<template>
  <div>
    <v-card>
      <v-card-title>{{ task.title  }}</v-card-title>
      <v-card-text>
        <div class="address">
          <p>{{ task.address }}</p>
          <p>{{ task.barrio }}</p>
        </div>
        <p class="clock">a las 3:30 pm</p>

      </v-card-text>
      <v-card-actions>
        <v-btn color="green" :href="map" target="_blank" flat>Ver en indicaciones en el mapa</v-btn>
        <v-btn color="green" flat>ver usuario</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: ['task'],
  computed: {
    map () {
      let { lat, long } = this.task.position
      return `https://map.google.com?q=${lat},${long}`
    }
  }
}
</script>
<style lang="css" scopped>
  .address {
    display: flex;
    flex-direction: row;
  }
</style>
