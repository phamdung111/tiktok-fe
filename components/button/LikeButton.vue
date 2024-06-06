<template>
  <div @click="isLike ? unLikePost() : likePost()"
    :class="directionVertical ? 'grid justify-center' : 'flex items-center gap-1'" class="cursor-pointer">
    <div :class="isLike ? 'text-red-primary' : ''">
      <div class="flex justify-center items-center bg-gray-200 w-[40px] h-[40px] rounded-full opacity-85">
        <Icon name="mdi:heart" :size="size.toString()" />
      </div>
    </div>
    <div>
      <h4 class="opacity-60 font-medium text-center">
        {{ post.likes?.length }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { userLikePostComposable } from '~/composables/user/post/like/user-like-post.composable'
import { userUnlikeComposable } from '~/composables/user/post/like/user-unlike-post.composable'
import { useUserStore } from '~/store/user'
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface'
export default defineComponent({
  name: 'LikeButton',
  props: {
    post: {
      type: Object as PropType<PostResponseInterface> | null,
      default: []
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
      return props.post.likes?.find(like => like.userId === user.id) ? true : false
    })
    const likePost = async () => {
      const response = await userLikePostComposable(props.post.id)
      if (response.status === 200) {
        props.post.likes?.unshift({ 'userId': user.id })
      }

    }
    const unLikePost = async () => {
      const response = await userUnlikeComposable(props.post.id)
      if (response.status === 200) {
        const index = props.post.likes!.findIndex(like => like.userId === user.id)
        index >= 0 ? props.post.likes?.splice(index, 1) : ''
      }
    }
    return { likePost, unLikePost, isLike }
  }
})
</script>
