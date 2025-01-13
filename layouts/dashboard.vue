<template>
  <NuxtLayout name="default">
    <layout-side-nav />
    <v-main class="fill-height">
      <slot />
    </v-main>
    <common-confirm v-model="showDialog" v-bind="dialogProps">
      <component :is="confirmComponent" v-if="confirmComponent" v-bind="componentProps" />
    </common-confirm>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  auth: true,
})
const dialogProps = ref({})
const componentProps = ref({})
const showDialog = ref(false)
const confirmComponent = shallowRef<null | string>(null)
let resolveConfirm: (value: boolean) => void

function openConfirmDialog(componentName: string, _dialogProps: object, compProps: object): void {
  confirmComponent.value = componentName
  dialogProps.value = _dialogProps
  componentProps.value = compProps
  showDialog.value = true
}
function closeConfirmDialog() {
  confirmComponent.value = null
  showDialog.value = false
}
function handleDialogResponse(response: boolean) {
  resolveConfirm(response)
}
provide('openConfirmDialog', openConfirmDialog)
provide('closeConfirmDialog', closeConfirmDialog)
provide('handleDialogResponse', handleDialogResponse)
</script>

<style>
/* .v-list-group__items .tail::before {
  content: '';
  display: block;
  position: absolute;
  width: 24px;
  height: 40px;
  border-left: transparent;
  border-right: 2px solid #e2e7e9;
  border-bottom: 2px solid #e2e7e9;
  border-bottom-right-radius: 12px;
  right: 8px;
  top: -14px;
  z-index: -1;
}

.tail {
  position: relative !important;
  padding-inline-start: calc(-12px + var(--indent-padding)) !important;
}

.tail .v-list-item__spacer {
  width: 16px !important;
}

.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
  padding-inline: 0 !important;
}

.v-list-group__items .v-list-item {
  padding-inline-start: 0 !important;
}

.v-list-group__items .tail:first-of-type::before {
  height: 24px;
  top: 0;
} */
</style>
