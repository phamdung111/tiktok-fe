<template>
  <div :class="directionVertical ? 'grid' : 'flex'" class="gap-3">
    <like-button
      :likes="post.likes" :post-id="post.id" :size="size"
      :direction-vertical="directionVertical"/>
    <comment-button
      :comments="post.comments" :post-id="post.id" :size="size"
      :direction-vertical="directionVertical"/>
    <favorite-button
      :favorites="post.favorites" :post-id="post.id" :size="size"
      :direction-vertical="directionVertical"/>
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
