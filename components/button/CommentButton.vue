<template>
  <div @click="navigateTo(`/post/${postId}`)"
    :class="directionVertical ? 'grid justify-center' : 'flex items-center gap-2'" class="cursor-pointer text-white">
    <div class="text-text-color-primary">
      <div class="flex justify-center items-center bg-bg-primary2 w-[40px] h-[40px] rounded-full">
        <Icon name="ph:chat-circle-dots-light" :size="size.toString()" />
      </div>
    </div>
    <div>
      <h4 class="text-text-color-primary2 font-medium text-center">
        {{ comments.length }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { CommentInterface } from '~/interface/entity/comment/comment.interface';

export default defineComponent({
  name: 'CommentButton',
  props: {
    comments: {
      type: Array as PropType<CommentInterface[]>,
      default: []
    },
    postId: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 0
    },
    directionVertical: {
      type: Boolean,
      default: true
    },
  },
  setup() {


    return {}
  }
})
</script>
