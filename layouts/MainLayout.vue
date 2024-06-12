<template>
  <div class="h-screen w-screen">
    <top-nav />
    <div class="mt-height-top-nav lg:flex h-full justify-between">
      <main-menu />
      <div class="w-full md:ml-width-nav-menu-tablet lg:ml-width-nav-menu-laptop h-[calc(100vh-55px)]">
        <slot />
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainMenu from '~/components//menu/MainMenu.vue';
import TopNav from '~/components/dashboard/TopNav.vue';
export default defineComponent({
  name: 'MainLayout',
  components: {
    TopNav,
    MainMenu
  }
})
</script>
