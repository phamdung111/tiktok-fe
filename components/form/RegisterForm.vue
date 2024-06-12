<template>
  <div id="register-user" class="pt-[64px] mx-[56px]">
    <div id="title-login">
      <h2 class="text-[33px] font-bold text-center mb-[16px]">Register</h2>
    </div>
    <div class="grid">
      <div class="grid">
        <div class="grid gap-1">
          <p v-if="validation.name.isFailed" class="text-red-primary text-[12px]">{{ validation.name.message }}</p>
          <input v-model="form.name" class="w-full h-[44px] px-3 input-bg-primary2-bg-primary" type="text"
            placeholder="Your name">
          <p v-if="validation.email.isFailed" class="text-red-primary text-[12px]">{{ validation.email.message }}</p>
          <input v-model="form.email" class="w-full h-[44px] px-3 input-bg-primary2-bg-primary" type="email"
            placeholder="Email address">
          <p v-if="validation.password.isFailed" class="text-red-primary text-[12px]">{{ validation.password.message }}
          </p>
          <input v-model="form.password" class="w-full h-[44px] px-3 input-bg-primary2-bg-primary" type="password"
            placeholder="Password">
          <p v-if="validation.confirmPassword.isFailed" class="text-red-primary text-[12px]">{{
            validation.confirmPassword.message }}</p>
          <input v-model="form.password_confirmation" class="w-full h-[44px] px-3 input-bg-primary2-bg-primary"
            type="password" placeholder="Confirm password">
          <button @click="register()" class="w-full h-[44px] rounded-sm bg-red-primary mt-2">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { registerFormData as form } from '~/composables/register/register-form-data.composable';
import { registerFormSubmitterComposable } from '~/composables/register/register-form-submitter.composable';
import { registerFormValidationData as validation } from '~/composables/register/register-form-validation-data.composable';
export default defineComponent({
  name: 'RegisterForm',
  setup() {

    const register = async () => {
      await registerFormSubmitterComposable()
    }
    return { form, register, validation }
  }
})
</script>
