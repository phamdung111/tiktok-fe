<template>
  <div id="form-login" class="pt-[64px] mx-[56px]">
    <div id="title-login">
      <h2 class="text-[33px] font-bold text-center mb-[16px]">Log in to TikTok</h2>
    </div>
    <div class="grid">
      <div @keyup.enter="login()" class="grid gap-2">
        <error-message :is-display="validation.email.isFailed" :message="validation.email.message" />
        <input v-model="form.email" class="w-full h-[44px] px-3 bg-input-bg-primary" type="email"
          placeholder="Email address">
        <error-message :is-display="validation.password.isFailed" :message="validation.password.message" />
        <input v-model="form.password" class="w-full h-[44px] px-3 bg-input-bg-primary" type="password"
          placeholder="Password">
        <button @click="login()"
          class="w-full h-[44px] rounded-sm bg-red-primary text-white font-semibold">Login</button>
      </div>
    </div>
    <div class="flex justify-center items-center py-[22px] px-[13px]">
      <div class="w-full h-[1px] bg-slate-200"></div>
      <div class="mx-[15px]">OR</div>
      <div class="w-full h-[1px] bg-slate-200"></div>
    </div>

    <div @click="ui.isOpenOverlay = false" id="visit-without-login"
      class="flex justify-center items-center bg-red-primary text-[15px] h-[44px] rounded-[8px]">
      <div class="w-[calc(100%-64px)] text-center text-white font-semibold">
        Continue as a guest
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { loginFormData as form } from '~/composables/login/login-form-data.composable';
import { loginFormSubmitterComposable } from '~/composables/login/login-form-submitter.composable';
import { loginFormValidationData as validation } from '~/composables/login/login-form-validation-data.composable';
import { useUiStore } from '~/store/ui';
import ErrorMessage from '../message/ErrorMessage.vue';
export default defineComponent({
  name: 'LoginForm',
  components: { ErrorMessage },
  setup() {
    const ui = useUiStore()
    const login = async () => {
      await loginFormSubmitterComposable()
    }
    return { form, login, ui, validation }
  }
})
</script>

<style scoped></style>