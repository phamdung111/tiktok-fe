<template>
  <div class="flex items-center gap-2 group hover:cursor-pointer">
    <div>
      <slot name="icon" />
    </div>
    <div
      class="absolute left-width-nav-menu-tablet hidden hover:block lg:block group-hover:block opacity-60 lg:opacity-100 truncate">
      <slot name="text" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUiStore } from '~/store/ui';
export default defineComponent({
  name: 'MainMenuLink',
  setup() {
    const ui = useUiStore()

    return {}
  }
})
</script>
