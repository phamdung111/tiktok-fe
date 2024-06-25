<template>
  <div>
    <top-nav />
    <div class="flex w-full pt-[60px]">
      <div class="w-full h-[calc(100vh-60px)]">
        <slot />
      </div>
    </div>
  </div>
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
