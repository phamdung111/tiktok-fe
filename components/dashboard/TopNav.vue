<template>
  <div class="fixed top-0 h-[60px] flex items-center border-b border-b-gray-300 bg-white z-20">
    <div id="top-nav-menu" class="z-20 bg-white w-screen">
      <div class="flex pr-6 pl-4 justify-between items-center h-full w-full relative">
        <nuxt-link to="/">
          <img class="logo" src="/assets//images/tiktok-logo.png" width="118" alt="">
        </nuxt-link>
        <div
          class="hidden sm:flex items-center bg-[#F1F1F2] p-1 rounded-full sm:max-w-[200px] md:max-w-[380px] lg:max-w-[580px] w-full">
          <input type="text"
            class="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
            placeholder="Search accounts" />
          <div class="px-3 py-1 flex items-center border-l border-l-gray-300">
            <Icon name="ri:search-line" color="#A1A2A7" size="22" />
          </div>
        </div>
        <div class="top-nav-right flex h-[36px]">
          <nuxt-link @click="upload()" to="" id="upload" class="flex cursor-pointer ml-4">
            <div id="upload"
              class="flex leading-1.5rem font-semibold hover:bg-gray-100 px-4 border items-center rounded-[2px]">
              <Icon class="mr-2" name="mdi:plus" color="#A1A2A7" size="22" />
              <span class="text-[16px]">Upload</span>
            </div>
          </nuxt-link>
          <div v-if="!user.id" @click="ui.isOpenOverlay = true" id="button-login"
            class="flex justify-center w-[84px] ml-4 px-5 py-1.5 items-center whitespace-nowrap rounded-sm text-white font-semibold bg-red-primary border border-red-primary leading-5 cursor-pointer">
            Log in
          </div>
          <div v-else class="flex gap-3 items-center ml-2">
            <div class="cursor-pointer">
              <Icon name="ph:paper-plane-tilt-bold" size="22" />
            </div>
            <div class="cursor-pointer">
              <Icon name="ri:message-line" size="22" />
            </div>
            <div @click="showMenuUser = !showMenuUser" class="relative ml-[24px] w-[32px]">
              <avatar-user :size="32" :image="user.image"></avatar-user>
              <div v-if="showMenuUser" id="PopupMenu"
                class="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2 z-[10]">
                <nuxt-link :to="`/profile/${user.id}`"
                  class="flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer">
                  <Icon name="ph:user" size="20" />
                  <span class="pl-2 font-semibold text-sm">Profile</span>
                </nuxt-link>
                <div @click="logout()"
                  class="flex items-center justify-start py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer">
                  <Icon name="ic:outline-login" size="20" />
                  <span class="pl-2 font-semibold text-sm">Log out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AvatarUser from '../button/AvatarUser.vue';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import { logoutUserComposable } from '~/composables/logout/logout-user.composable';
export default defineComponent({
  name: 'TopNav',
  components: { AvatarUser },
  setup() {
    const user = useUserStore()
    const ui = useUiStore()
    const upload = () => {
      navigateTo('/upload')
    }
    const logout = async () => {
      await logoutUserComposable()
      ui.isOpenOverlay = true
    }
    const showMenuUser = ref(false)
    return { user, ui, upload, logout, showMenuUser }
  }
})
</script>

<style scoped></style>