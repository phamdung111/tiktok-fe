<template>
  <div class="w-full">
    <img class="cursor-pointer rounded-full" :class="`w-[${size}px] h-[${size}px]`" :src="image" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AvatarUser',
  props: {
    image: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 0
    },
  },
  setup() {


    return {}
  }
})
</script>

<style scoped></style>