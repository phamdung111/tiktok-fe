<template>
    <div v-if="nextButton() >= 0">
      <Icon
        name="iconamoon:arrow-down-2-duotone" size="40" color="white"
        class="bg-gray-500 rounded-full hover:bg-gray-300" @click="navigateTo(`/post/${nextButton()}`)" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { nextButton } from '~/processor/direction-button/next-button.processor';
export default defineComponent({
  name: 'NextButton',
  setup() {
    return {
      nextButton
    }
  }
})
</script>
