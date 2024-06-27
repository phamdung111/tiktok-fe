<template>
  <div v-if="isCheckingToken">
    <nuxt-page/>
    <div v-if="ui.isOpenOverlay">
      <auth-overlay/>
    </div>
    <div>
      <notification-delete-data/>
    </div>
    <div
      v-if="ui.isLoading"
      class="fixed flex items-center justify-center top-0 left-0 h-full w-full bg-black z-notification bg-opacity-50">
      <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#FFFFFF" />
    </div>
  </div>
</template>

<script setup>
import NotificationDeleteData from './components/message/NotificationDeleteData.vue';
import AuthOverlay from './components/overlay/AuthOverlay.vue';
import { loginWithTokenComposable } from './composables/login/login-with-token.composable';
import { useUiStore } from './store/ui';
const ui = useUiStore()
const token = useCookie("XSRF-TOKEN");
const isCheckingToken = ref(false)
onMounted(async () => {
  if (token.value) {
    await loginWithTokenComposable(token)
  }
})
onMounted(() => {
  isCheckingToken.value = true
})
</script>
<style>
body::-webkit-scrollbar {
  width: 10px;
  height: 100px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(22, 24, 35, 0.5);
}
body {
  overflow-x: hidden;
}
</style>
