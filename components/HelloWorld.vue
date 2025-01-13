<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
    <v-container>
      <v-btn>Hello</v-btn>
    </v-container>
  </div>
</template>
