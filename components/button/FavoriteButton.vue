<template>
  <div @click="isFavorite ? unFavorite() : favorite()"
    :class="directionVertical ? 'grid justify-center' : 'flex items-center gap-1'">
    <div class="flex justify-center items-center bg-gray-200 w-[40px] h-[40px] rounded-full opacity-85"
      :class="isFavorite ? 'text-yellow-400' : ''">
      <Icon name="carbon:bookmark-filled" :size="size.toString()" />
    </div>
    <h4 class="opacity-60 font-medium text-center">
      {{ post.favorites?.length }}
    </h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userFavoritePostComposable } from '~/composables/user/post/favorite/user-favorite-post.composable';
import { userUnfavoritePostComposable } from '~/composables/user/post/favorite/user-unfavorite-post.composable';
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import { useUserStore } from '~/store/user';
export default defineComponent({
  name: 'FavoriteButton',
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
    const favorite = async () => {
      const response = await userFavoritePostComposable(props.post.id)
      if (response.status === 200) {
        props.post.favorites?.unshift({ 'userId': user.id })
      }
    }
    const unFavorite = async () => {
      const response = await userUnfavoritePostComposable(props.post.id)
      if (response.status === 200) {
        const index = props.post.favorites!.findIndex(favorite => favorite.userId === user.id)
        index >= 0 ? props.post.favorites?.splice(index, 1) : ''
      }
    }
    const isFavorite = computed(() => {
      const favorite = props.post.favorites?.find(favorite => favorite.userId === user.id)
      return favorite ? true : false

    })
    return { isFavorite, favorite, unFavorite }
  }
})
</script>
