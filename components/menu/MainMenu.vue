<template>
  <div class="z-menu">
    <menu-mobile></menu-mobile>
    <div
      class="hidden md:block fixed top-height-top-nav w-width-nav-menu-tablet h-full border-r lg:w-width-nav-menu-laptop border-r-gray-300 bg-white">
      <div class="w-full relative">
        <div class="grid pt-5 font-semibold text-xl gap-6 justify-items-center lg:justify-items-start lg:pl-2">
          <div :class="ui.menuSelected === MENU.MAIN.FOR_YOU.link ? 'text-red-primary' : ''">
            <main-menu-link @click="goTo(MENU.MAIN.FOR_YOU.link)">
              <template #icon>
                <Icon :name="MENU.MAIN.FOR_YOU.icon" size="30" />
              </template>
              <template #text>{{ MENU.MAIN.FOR_YOU.text }}</template>
            </main-menu-link>
          </div>
          <div :class="ui.menuSelected === MENU.MAIN.FOLLOWING.link ? 'text-red-primary' : ''">
            <main-menu-link @click="goTo(MENU.MAIN.FOLLOWING.link)">
              <template #icon>
                <Icon :name="MENU.MAIN.FOLLOWING.icon" size="30" />
              </template>
              <template #text>{{ MENU.MAIN.FOLLOWING.text }}</template>
            </main-menu-link>
          </div>
          <div :class="ui.menuSelected === MENU.MAIN.FRIEND.link ? 'text-red-primary' : ''">
            <main-menu-link @click="goTo(MENU.MAIN.FRIEND.link)">
              <template #icon>
                <Icon :name="MENU.MAIN.FRIEND.icon" size="30" />
              </template>
              <template #text>{{ MENU.MAIN.FRIEND.text }}</template>
            </main-menu-link>

          </div>
          <div :class="ui.menuSelected === `${MENU.MAIN.PROFILE.link}/${user.id}` ? 'text-red-primary' : ''">
            <main-menu-link @click="user.id ? goTo(`${MENU.MAIN.PROFILE.link}/${user.id}`) : showLogin()">
              <template #icon>
                <Icon :name="MENU.MAIN.PROFILE.icon" size="30" />
              </template>
              <template #text>{{ MENU.MAIN.PROFILE.text }}</template>
            </main-menu-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainMenuLink from '../link/MainMenuLink.vue';
import MenuMobile from './MenuMobile.vue';
import { MENU } from '~/constant/menu/menu.constant';
import { useUiStore } from '~/store/ui';
import { useUserStore } from '~/store/user';
export default defineComponent({
  name: 'MainMenu',
  components: { MainMenuLink, MenuMobile },
  setup() {
    const ui = useUiStore()
    const user = useUserStore()
    const goTo = (route: string) => {
      ui.setMenuSelected(route)
      navigateTo(`${route}`)
    }
    const showLogin = () => {
      ui.isOpenOverlay = true
    }

    const upload = () => {
      navigateTo('/upload')
    }
    return { MENU, goTo, ui, user, upload, showLogin, }
  }
})
</script>

<style scoped></style>