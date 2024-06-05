<template>
  <div>
    <span v-if="isDisplay" class="text-red-primary text-[12px]">{{ message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorMessage',
  props: {
    isDisplay: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
  },
  setup() {


    return {}
  }
})
</script>

<style scoped></style>