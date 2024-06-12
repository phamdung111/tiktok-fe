<template>
  <top-nav></top-nav>
  <div class="pt-[60px] flex w-full">
    <main-menu />
    <div class="ml-width-nav-menu-tablet lg:ml-width-nav-menu-laptop w-full h-[calc(100vh-60px)]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNav from '~/components/dashboard/TopNav.vue'
import MainMenu from '~/components/menu/MainMenu.vue'

export default defineComponent({
  components: { TopNav, MainMenu },
  name: 'UploadLayout',
  setup() {


    return {}
  }
})
</script>

<style scoped></style>