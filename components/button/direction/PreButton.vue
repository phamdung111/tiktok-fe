<template>
  <div class=" absolute top-[calc(50%-1.5rem)] right-3">
    <Icon v-if="preButton() > 0" @click="navigateTo(`/post/${preButton()}`)" size="40" color="white"
      class="bg-gray-500 rounded-full hover:bg-gray-300" name="iconamoon:arrow-up-2-duotone" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { preButton } from '~/processor/direction-button/pre-button.processor'
export default defineComponent({
  name: 'PreButton',
  props: {
    currentPost: {
      type: Number,
      default: 0
    }
  },
  setup() {
    return { preButton }
  }
})
</script>

<style scoped></style>