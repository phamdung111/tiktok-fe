<template>
  <div class="fixed h-full border-r border-r-gray-300">
    <div class="w-width-nav-menu-mobile lg:w-width-nav-menu-laptop">
      <div class="pt-5 font-semibold px-5 text-xl grid gap-6 justify-center lg:justify-start">
        <div :class="ui.menuSelected === MENU.MAIN.FOR_YOU.link ? 'text-red-primary' : ''">
          <main-menu-link @click="goTo(MENU.MAIN.FOR_YOU.link)">
            <template #icon>
              <Icon :name="MENU.MAIN.FOR_YOU.icon" size="30" />
            </template>
            <template #text>{{ MENU.MAIN.FOR_YOU.text }}</template>
            <template #textMobile>{{ MENU.MAIN.FOR_YOU.text }}</template>

          </main-menu-link>
        </div>

        <main-menu-link @click="goTo(MENU.MAIN.FOLLOWING.link)">
          <template #icon>
            <Icon :name="MENU.MAIN.FOLLOWING.icon" size="30" />
          </template>
          <template #text>{{ MENU.MAIN.FOLLOWING.text }}</template>
          <template #textMobile>{{ MENU.MAIN.FOLLOWING.text }}</template>
        </main-menu-link>
        <main-menu-link @click="goTo(MENU.MAIN.FRIEND.link)">
          <template #icon>
            <Icon :name="MENU.MAIN.FRIEND.icon" size="30" />
          </template>
          <template #text>{{ MENU.MAIN.FRIEND.text }}</template>
          <template #textMobile>{{ MENU.MAIN.FRIEND.text }}</template>
        </main-menu-link>
        <main-menu-link @click="user.id ? goTo(`${MENU.MAIN.PROFILE.link}/${user.id}`) : showLogin()">
          <template #icon>
            <Icon :name="MENU.MAIN.PROFILE.icon" size="30" />
          </template>
          <template #text>{{ MENU.MAIN.PROFILE.text }}</template>
          <template #textMobile>{{ MENU.MAIN.PROFILE.text }}</template>
        </main-menu-link>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainMenuLink from '../link/MainMenuLink.vue';
import { MENU } from '~/constant/menu/menu.constant';
import { useUiStore } from '~/store/ui';
import { useUserStore } from '~/store/user';
export default defineComponent({
  name: 'MainMenu',
  components: { MainMenuLink },
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
    return { MENU, goTo, ui, user, showLogin }
  }
})
</script>

<style scoped></style>