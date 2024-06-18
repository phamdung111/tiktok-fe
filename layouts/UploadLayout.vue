<template>
  <dir>
    <top-nav />
    <div class="flex w-full pt-[60px]">
      <div class="ml-width-nav-menu-tablet lg:ml-width-nav-menu-laptop w-full h-[calc(100vh-60px)]">
        <slot />
      </div>
    </div>
  </dir>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNav from '~/components/dashboard/TopNav.vue'

export default defineComponent({
  name: 'UploadLayout',
  components: { TopNav },
  setup() {


    return {}
  }
})
</script>
