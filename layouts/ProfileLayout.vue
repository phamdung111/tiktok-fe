<template>
  <div>
    <div class="fixed top-0 h-[60px] flex items-center border-b border-b-gray-300 bg-white">
      <top-nav></top-nav>
    </div>
    <div class="h-[100%-60px] mt-[60px]">
      <div class="fixed h-full border-r border-r-gray-300">
        <main-menu></main-menu>
      </div>
      <slot name="content" />

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import TopNav from '~/components/dashboard/TopNav.vue';
import MainMenu from '~/components/menu/MainMenu.vue';
import type { UserStoreStateInterface } from '../interface/store/user/user-store-state.interface';
export default defineComponent({
  name: 'ProfileLayout',
  components: {
    TopNav,
    MainMenu,
  },
  props: {
    user: {
      type: Object as PropType<UserStoreStateInterface>,
      default: null

    }
  },
  setup() {
    const isOpenEditProfile = false

    return { isOpenEditProfile }
  }
})
</script>

<style scoped></style>