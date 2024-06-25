<template>
  <nuxt-layout name="main-layout">
    <div v-if="posts.allPosts.length">
      <div v-for="post in posts.allPosts" :key="post.id">
      <post-main :post="post"/>
      </div>
    </div>
    
    <div v-else>
      <not-found-base :icon="`zondicons:video-camera`" :text="`Video is currently unavailable!`"/>
    </div>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { postsFollowingInitialDataComposable } from '~/composables/post/initial-data/posts-following-initial-data.composable';
import { infinityPosts } from '~/processor/infinity-scroll/infinity-posts.processor';
import { usePostStore } from '~/store/post';
import NotFoundBase from '~/components/not-found/NotFoundBase.vue';
export default defineComponent({
  components: {
    NotFoundBase
  },
  setup() {
    const posts = usePostStore()
    infinityPosts(postsFollowingInitialDataComposable)
    return { posts }
  }
})
</script>
