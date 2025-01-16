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
            :src="'/public/svg/logo.svg'"
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
      <v-list-item
        v-for="(item, i) in menus"
        :key="`nav-menu-${i}`"
        class=" rounded-lg"
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

const { version, dashboardTitle } = useRuntimeConfig().public
const rail = ref(false)
const open = ref(['Users'])
const menus = ref(
  [
    { text: 'خانه', path: '/dash/', icon: 'mdi-home-outline' },
    { text: 'کاربران', path: '/dash/users', icon: 'mdi-account-group-outline' },
    { text: 'درخواست‌ها', path: '/dash/requests', icon: 'mdi-database-arrow-up-outline' },
    { text: 'گزارش‌ها', path: '/dash/reports', icon: 'mdi-chart-box-outline' },
    // { text: 'مدیریت', path: '/dash/management', icon: 'mdi-family-tree' },
    { text: 'تنظیمات', path: '/dash/settings', icon: 'mdi-cog-outline' },

  ])
</script>

<style>

</style>
