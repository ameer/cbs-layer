<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    location="end"
    offset="24"
    transition="slide-x-reverse-transition"
  >
    <template #activator="{ props }">
      <v-list-item
        variant="flat"
        class="py-2 px-1 rounded-lg hide-append"
        style="margin-right: 1px;"
        v-bind="props"
      >
        <template #prepend>
          <v-avatar
            rounded="lg"
            color="#e4e9eb"
          >
            <v-icon color="grey">
              mdi-account
            </v-icon>
          </v-avatar>
        </template>
        <template #title>
          <div class="d-flex flex-column">
            <span
              class="text-body-1 font-weight-bold"
              v-text="data?.firstName"
            />
            <span
              class="v-list-item-subtitle"
              v-text="data?.username"
            />
          </div>
        </template>
        <template #append>
          <v-btn
            icon="mdi-chevron-left"
            variant="outlined"
            size="24"
            color="#1e2228"
            style="--color: #e0e0e0;"
          />
        </template>
      </v-list-item>
    </template>
    <v-card
      min-width="300"
      class="px-4 pt-2 rounded-lg elevation-1"
    >
      <v-list>
        <v-list-item
          variant="flat"
          class="py-2 px-1 rounded-lg hide-append"
          style="margin-right: 1px;"
        >
          <template #prepend>
            <v-avatar
              rounded="lg"
              color="#e4e9eb"
            >
              <v-icon color="grey">
                mdi-account
              </v-icon>
            </v-avatar>
          </template>
          <template #title>
            <div class="d-flex flex-column">
              <span
                class="text-body-1 font-weight-bold"
                v-text="data.firstName"
              />
              <span
                class="v-list-item-subtitle"
                v-text="data.username"
              />
            </div>
          </template>
        </v-list-item>
        <template v-for="(item, i) in userMenu">
          <v-list-item
            v-if="item.type === undefined"
            :key="`uav-${i}`"
            :prepend-icon="item.icon"
            :base-color="item.baseColor"
            @click="invoke(item.action)"
          >
            <template #title>
              <span
                class="text-body-2"
                v-text="item.text"
              />
            </template>
            <template #append>
              <v-switch
                v-if="item.isSwitch"
                color="primary"
                class="ml-3"
                hide-details
                :ripple="false"
              />
              <v-btn
                v-else
                icon="mdi-chevron-left"
                variant="text"
                size="24"
                color="#1e2228"
                style="--color: #e0e0e0;"
              />
            </template>
          </v-list-item>
          <v-divider
            v-else-if="item.type === 'divider'"
            :key="`uad-${i}`"
          />
        </template>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
const menu = ref(false)
const { data } = useAuthState()

const userMenu = ref([
  { text: 'ویرایش اطلاعات کاربری', icon: 'mdi-account-edit-outline' },
  { text: 'تغییر گذرواژه', icon: 'mdi-lock-outline' },
  { text: 'سوابق ورود', icon: 'mdi-history' },
  { text: 'حالت تاریک', icon: 'mdi-theme-light-dark', isSwitch: true },
  { type: 'divider' },
  { text: 'خروج از سامانه', baseColor: 'error', icon: 'mdi-logout', action: 'logout' },
])

const invoke = (action: string) => {
  if (action === 'logout') {
    useAuth().signOut({ callbackUrl: '/auth/login' })
  }
}
</script>
