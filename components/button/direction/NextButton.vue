<template>
    <div v-if="nextButton() >= 0">
      <Icon
        name="iconamoon:arrow-down-2-duotone" size="40" color="white"
        class="bg-gray-500 rounded-full hover:bg-gray-300" @click="navigateTo(`/post/${nextButton()}`)" />
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import { nextButton } from '~/processor/direction-button/next-button.processor';
export default defineComponent({
  name: 'NextButton',
  props: {
    currentPost: {
      type: Number,
      default: 0
    },
    list: {
      type: Array as PropType<PostResponseInterface[] | null>,
      default: null
    }
  },
  setup() {
    return {
      nextButton
    }
  }
})
</script>
