<template>
  <div class="fixed top-0 h-height-top-nav flex lg:bottom-0 items-center border-b border-b-gray-300 bg-white z-menu">
    <div class="z-menu w-screen">
      <div id="top-nav-mobile" class="md:hidden w-full flex justify-center relative">
        <div @click="goTo(MENU.MAIN.FOR_YOU.link)" class="cursor-pointer">
          <img src="/assets//images/tiktok-logo.png" width="118" alt="">
        </div>
        <div class="absolute left-3" @click="ui.openMenuMobile()">
          <Icon name="octicon:three-bars-16" size="30"></Icon>
        </div>
        <div class="absolute flex gap-2 justify-center right-3">
          <nuxt-link @click="upload()" to="" id="upload" class="flex cursor-pointer ml-4">
            <div id="upload"
              class="flex leading-1.5rem font-semibold hover:bg-gray-100 px-4 border items-center rounded-[2px]">
              <Icon class="mr-2" name="mdi:plus" color="#A1A2A7" size="22" />
              <span class="text-[16px]">Upload</span>
            </div>
          </nuxt-link>
          <Icon name="ri:search-line" color="#A1A2A7" size="22" />
        </div>
      </div>

      <div class="hidden md:block">
        <div class="flex pr-6 pl-4 justify-between items-center h-full w-full relative">
          <div class="cursor-pointer" @click="goTo(MENU.MAIN.FOR_YOU.link)">
            <img class="logo" src="/assets//images/tiktok-logo.png" width="118" alt="">
          </div>
          <div
            class="hidden sm:flex items-center bg-bg-primary22 p-1 rounded-full sm:max-w-[200px] md:max-w-[380px] lg:max-w-[580px] w-full">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AvatarUser from '../button/AvatarUser.vue';
import { MENU } from '~/constant/menu/menu.constant';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import { logoutUserComposable } from '~/composables/logout/logout-user.composable';
export default defineComponent({
  name: 'TopNavDesktop',
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
    const goTo = (route: string) => {
      ui.setMenuSelected(route)
      navigateTo(`${route}`)
    }
    const showMenuUser = ref(false)
    return { user, ui, upload, logout, goTo, showMenuUser, MENU }
  }
})
</script>
