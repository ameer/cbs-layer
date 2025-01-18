<template>
  <v-navigation-drawer
    rail-width="83"
    :rail="rail"
    permanent
    app
    @click="rail = false"
  >
    <v-list-item
      nav
      class="px-4 pt-4"
    >
      <template #prepend>
        <v-avatar
          tile
          style="margin: 0 5px;"
        >
          <v-img
            :src="'/svg/logo.svg'"
            :cover="false"
          />
        </v-avatar>
      </template>
      <template #title>
        <span class="text-primary text-h6 font-weight-bold">{{ dashboardTitle }}</span>
      </template>
      <template #append>
        <v-btn
          :class="{ translated: rail }"
          icon
          variant="text"
          size="24"
          color="#1e2228"
          style="--color: #e0e0e0;"
          @click.stop="rail = !rail"
        >
          <v-icon size="14">
            mdi-arrow-collapse-right
          </v-icon>
        </v-btn>
      </template>
    </v-list-item>
    <v-list
      v-model:opened="open"
      class="px-4 mt-12"
    >
      <template v-for="(item, i) in props.menus" :key="`nav-menu-${i}`">
        <v-list-group v-if="item.hasChildren">
          <template #activator="{ props: _props }">
            <v-list-item
              class="rounded-lg"
              v-bind="_props"
              :prepend-icon="item.icon"
              :title="item.text"
            />
          </template>
          <v-list-item
            v-for="({ text, icon, path }, j) in item.children"
            :key="`subgroup-${i}-${j}`"
            class="rounded-lg"
            :prepend-icon="icon"
            nav
            :to="path"
            :title="text"
            :value="text"
          />
        </v-list-group>
        <v-list-item
          v-else
          class="rounded-lg"
          nav
          :to="item.path"
          :prepend-icon="item.icon"
        >
          <template #title>
            <div
              class="text-body-1"
              v-text="item.text"
            />
          </template>
        </v-list-item>
      </template>
    </v-list>
    <div class="px-4 mt-auto mb-3">
      <v-divider class="py-2" />
      <userAvatar />
      <v-divider class="my-2" />
      <div class="d-flex align-center justify-space-between text-body-2 text-grey">
        <span>نسخه</span>
        <span v-text="version" />
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import userAvatar from './userAvatar.vue'

interface Props {
  menus: MenuItem[]
}
interface MenuItem {
  text: string
  path?: string
  icon?: string
  hasChildren?: boolean
  children?: MenuItem[]
}
const props = defineProps({
  menus: {
    type: Array,
    default: () => ([
      { text: 'خانه', path: '/dash/', icon: 'mdi-home-outline' },
    ] as MenuItem[]),
  },
}) as Props
const { version, dashboardTitle } = useRuntimeConfig().public
const rail = ref(false)
const open = ref(['Users'])
</script>

<style>

</style>
