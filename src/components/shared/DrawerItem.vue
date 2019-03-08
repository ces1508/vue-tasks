<template>
   <v-list-tile @click="handleClick">
      <v-list-tile-action >
        <v-icon>{{ page.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ page.title }}</v-list-tile-title>
      </v-list-tile-content>
  </v-list-tile>
</template>
<script>
export default {
  props: ['page', 'onClick', 'customClick'],
  methods: {
    handleClick () {
      if (this.onClick) {
        return this.onClick(this.page.path)
      }
      this.customClick()
    }
  }
}
</script>
