<template>
  <div
    :class="directionVertical ? 'grid justify-center' : 'flex items-center gap-2'"
    class="cursor-pointer text-white" @click="isFavorite ? unFavorite() : favorite()">
    <div class="text-text-color-primary">
      <div
        :class="isFavorite ? 'text-bg-primary3' : 'text-black'"
        class="flex justify-center items-center bg-bg-primary2 w-[40px] h-[40px] rounded-full">
        <Icon name="material-symbols-light:bookmark-sharp" :size="size.toString()" />
      </div>
    </div>
    <div>
      <h4 class="text-text-color-primary2 font-medium text-center">
        {{ favorites.length }}
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userFavoritePostComposable } from '~/composables/user/post/favorite/user-favorite-post.composable';
import { userUnfavoritePostComposable } from '~/composables/user/post/favorite/user-unfavorite-post.composable';
import type { PostFavoriteResponseInterface } from '~/interface/response/post/favorite/post-favorite-response.inteface';
import { useUserStore } from '~/store/user';
export default defineComponent({
  name: 'FavoriteButton',
  props: {
    favorites: {
      type: Array as PropType<PostFavoriteResponseInterface[]>,
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
    const favorite = async () => {
      const response = await userFavoritePostComposable(props.postId)
      if (response.status === 200) {
        props.favorites!.unshift({ 'userId': user.id })
      }
    }
    const unFavorite = async () => {
      const response = await userUnfavoritePostComposable(props.postId)
      if (response.status === 200) {
        const index = props.favorites!.findIndex(favorite => favorite.userId === user.id)
        index >= 0 ? props.favorites!.splice(index, 1) : ''
      }
    }
    const isFavorite = computed(() => {
      const favorite = props.favorites.find(favorite => favorite.userId === user.id)
      return favorite ? true : false

    })
    return {
      isFavorite,
      favorite,
      unFavorite
    }
  }
})
</script>
