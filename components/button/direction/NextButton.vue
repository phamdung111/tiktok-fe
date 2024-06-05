<template>
  <div class="absolute top-[calc(50%+1.5rem)] right-3 z-20">
    <div v-if="nextButton() >= 0">
      <Icon @click="navigateTo(`/post/${nextButton()}`)" size="40" color="white"
        class="bg-gray-500 rounded-full hover:bg-gray-300" name="iconamoon:arrow-down-2-duotone" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { nextButton } from '~/processor/direction-button/next-button.processor';
export default defineComponent({
  name: 'NextButton',
  setup() {
    return { nextButton, }
  }
})
</script>

<style scoped></style>