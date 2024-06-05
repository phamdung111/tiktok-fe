<template>
  <div class="flex items-center gap-2 group relative hover:cursor-pointer">
    <div>
      <slot name="icon" />
    </div>
    <div class="hidden lg:block">
      <slot name="text" />

    </div>
    <div class="absolute left-[55px] block lg:hidden">
      <div class="hidden group-hover:block truncate opacity-60">
        <slot name="textMobile" />
      </div>
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

<style scoped></style>