<template>
  <div class="w-screen h-screen">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PostLayout',
  setup() {
    return {}
  }
})
</script>
