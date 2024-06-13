<template>
  <div class="h-screen w-screen fixed top-0 left-0 flex items-center justify-center z-overlay">
    <div class="fixed left-0 top-0 w-screen h-screen bg-color-wrap flex justify-center items-center">
      <div class="h-[644px] w-[483px] bg-white rounded-md relative">

        <login-form v-if="!isRegister"></login-form>
        <register-form v-else></register-form>
        <div class="absolute bottom-0 w-full grid justify-center">
          <div id="policy-confirm-account-login" class="py-[16px] px-[30px] flex justify-center border-b">
            <p class="w-[337px] text-[12px] text-color-blur text-center">
              By continuing with an account located in Vietnam , you agree to our Terms of Use and confirm that you have
              read
              our Privacy Policy .

            </p>
          </div>
          <div v-if="!isRegister" class="flex justify-center items-center h-[64px] gap-1.5">
            <div>Don't have an account?</div>
            <div @click="isRegister = true"
              class="text-[15px] leading-6 text-red-primary font-semibold hover:underline">Register</div>
          </div>
          <div v-else class="flex justify-center items-center h-[64px] gap-1.5">
            <div>You have an account?</div>
            <div @click="isRegister = false"
              class="text-[15px] leading-6 text-red-primary font-semibold hover:underline">Login</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUiStore } from '~/store/ui';
import LoginForm from '../form/LoginForm.vue';
import { useUserStore } from '~/store/user';
import RegisterForm from '../form/RegisterForm.vue';
export default defineComponent({
  name: 'AuthOverlay',
  components: {
    LoginForm,
    RegisterForm
  },
  setup() {
    const ui = useUiStore()
    const user = useUserStore()
    const isRegister = ref(false)

    return { ui, isRegister }
  }
})
</script>

<style scoped></style>