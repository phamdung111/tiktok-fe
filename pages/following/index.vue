<template>
  <nuxt-layout name="main-layout">
    <div v-for="post in posts.allPosts" :key="post.id">
      <post-main :post="post"/>
    </div>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { postsFollowingInitialDataComposable } from '~/composables/post/initial-data/posts-following-initial-data.composable';
import { infinityPosts } from '~/processor/infinity-scroll/infinity-posts.processor';
import { usePostStore } from '~/store/post';
export default defineComponent({
  setup() {
    const posts = usePostStore()
    infinityPosts(postsFollowingInitialDataComposable)
    return { posts }
  }
})
</script>
