<template>
  <div>
    <div>
      <top-nav></top-nav>
    </div>
    <div class="mt-[60px]">
      <div>
        <main-menu></main-menu>
      </div>
      <div class="ml-width-nav-menu-mobile lg:ml-width-nav-menu-laptop h-full">
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

<style scoped></style>