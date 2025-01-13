<template>
  <v-locale-provider rtl>
    <v-layout class="rounded rounded-md">
      <v-app>
        <v-container class="fill-height" style="position: relative;width: 100vw !important;">
          <slot />
        </v-container>
      </v-app>
    </v-layout>
  </v-locale-provider>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
