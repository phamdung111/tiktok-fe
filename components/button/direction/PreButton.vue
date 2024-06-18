<template>
  <div v-if="preButton() > 0">
    <Icon
      name="iconamoon:arrow-up-2-duotone" size="40" color="white" class="bg-gray-500 rounded-full hover:bg-gray-300"
      @click="navigateTo(`/post/${preButton()}`)" />
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
    return {
      preButton
    }
  }
})
</script>
