<template>
  <div v-if="ui.isDisplayMenuMobile"
    class="md:hidden fixed top-0 left-0 h-screen w-[200px] shadow-xl z-overlay bg-white border-l">
    <div class="absolute right-3" @click="ui.closeMenuMobile">
      <Icon name="mdi:close" size="30"></Icon>
    </div>
    <div class="mt-10">

      <div id="PopupMenu" class="border-b  z-menu">
        <div @click="goTo(`${MENU.MAIN.PROFILE.link}/${user.id}`)"
          class="flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer">
          <avatar-user :size="32" :image="user.image"></avatar-user>
          <span class="pl-2 font-semibold text-sm">Profile</span>
        </div>
        <div @click="logout()"
          class="flex items-center justify-start py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer">
          <Icon name="ic:outline-login" size="20" />
          <span class="pl-2 font-semibold text-sm">Log out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUiStore } from '~/store/ui';
import { useUserStore } from '~/store/user';
import AvatarUser from '../button/AvatarUser.vue';
import { MENU } from '~/constant/menu/menu.constant';
import { logoutUserComposable } from '~/composables/logout/logout-user.composable';
export default defineComponent({
  name: 'MenuMobile',
  components: {
    AvatarUser
  },
  setup() {
    const ui = useUiStore()
    const user = useUserStore()
    const goTo = (route: string) => {
      ui.setMenuSelected(route)
      navigateTo(`${route}`)
      ui.closeMenuMobile()
    }

    const logout = async () => {
      await logoutUserComposable()
      ui.isOpenOverlay = true
    }
    return { ui, user, MENU, logout, goTo }
  }
})
</script>
