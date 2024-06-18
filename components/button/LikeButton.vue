<template>
  <div
    :class="directionVertical ? 'grid justify-center' : 'flex items-center gap-2'"
    class="cursor-pointer text-white" @click="isLike ? unLikePost() : likePost()">
    <div class="text-text-color-primary">
      <div
        :class="isLike ? 'text-red-primary' : 'text-black'"
        class="flex justify-center items-center bg-bg-primary2 w-[40px] h-[40px] rounded-full">
        <Icon name="mdi:heart" :size="size.toString()" />
      </div>
    </div>
    <div>
      <h4 class="text-text-color-primary2 font-medium text-center">
        {{ likes.length }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { userLikePostComposable } from '~/composables/user/post/like/user-like-post.composable'
import { userUnlikeComposable } from '~/composables/user/post/like/user-unlike-post.composable'
import { useUserStore } from '~/store/user'
import type { PostLikeResponseInterface } from '~/interface/response/post/like/post-like-response.inteface'
export default defineComponent({
  name: 'LikeButton',
  props: {
    likes: {
      type: Array as PropType<PostLikeResponseInterface[]>,
      default: null
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
  setup(props) {
    const user = useUserStore()
    const isLike = computed(() => {
      return props.likes.find(like => like.userId === user.id) ? true : false
    })
    const likePost = async () => {
      const response = await userLikePostComposable(props.postId)
      if (response.status === 200) {
        props.likes!.unshift({ 'userId': user.id })
      }

    }
    const unLikePost = async () => {
      const response = await userUnlikeComposable(props.postId)
      if (response.status === 200) {
        const index = props.likes.findIndex(like => like.userId === user.id)
        index >= 0 ? props.likes!.splice(index, 1) : ''
      }
    }
    return {
      isLike,
      likePost,
      unLikePost
    }
  }
})
</script>
