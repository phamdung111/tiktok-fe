<template>
  <div>
    <top-nav />
    <div class="h-[calc(100vh-55px)] mt-height-top-nav lg:flex justify-between">
      <main-menu />
      <div class="w-full h-full md:ml-width-nav-menu-tablet lg:ml-width-nav-menu-laptop">
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
