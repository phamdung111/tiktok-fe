<template>
  <div :class="directionVertical ? 'grid' : 'flex'" class="gap-3">
    <like-button :likes="post.likes" :postId="post.id" :size="size"
      :directionVertical="directionVertical"></like-button>
    <comment-button :comments="post.comments" :postId="post.id" :size="size"
      :directionVertical="directionVertical"></comment-button>
    <favorite-button :favorites="post.favorites" :postId="post.id" :size="size"
      :directionVertical="directionVertical"></favorite-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import LikeButton from '../LikeButton.vue';
import FavoriteButton from '../FavoriteButton.vue';
import CommentButton from '../CommentButton.vue';
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
export default defineComponent({
  name: 'InteractPost',
  components: {
    LikeButton,
    FavoriteButton,
    CommentButton
  },
  props: {
    post: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    },
    size: {
      type: Number,
      default: 0
    },
    directionVertical: {
      type: Boolean,
      default: false
    }
  },
  setup() {

    return {}
  }
})
</script>
