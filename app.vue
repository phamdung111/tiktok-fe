<template>
  <div v-if="isCheckingToken">
    <nuxt-page></nuxt-page>

    <div v-if="ui.isOpenOverlay">
      <auth-overlay></auth-overlay>
    </div>
    <div>
      <notification-delete-data></notification-delete-data>
    </div>
  </div>
</template>

<script setup>
import NotificationDeleteData from './components/message/NotificationDeleteData.vue';
import AuthOverlay from './components/overlay/AuthOverlay.vue';
import { loginWithTokenComposable } from './composables/login/login-with-token.composable';
import { formatDateTimeProvider } from './provider/format/date-time/format-date-time.provider';
import { useUiStore } from './store/ui';
const ui = useUiStore()
const token = useCookie("XSRF-TOKEN");
const isCheckingToken = ref(false)
onMounted(async () => {
  if (token.value) {
    await loginWithTokenComposable(token)
    ui.isOpenOverlay = false
  } else {
    ui.isOpenOverlay = true
  }
})
onMounted(() => {
  isCheckingToken.value = true
})
</script>
