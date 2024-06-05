<template>
  <nuxt-layout name="main-layout">
    <div v-for="post in allPosts" :key="post.id">
      <post-main :post="post"></post-main>
    </div>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { postsInitialDataComposable } from '~/composables/post/initial-data/posts-initial-data.composable';
import { ROUTES } from '~/constant/route/route.constant';
import PostMain from '~/components/post/PostMain.vue';
import { usePostStore } from '~/store/post';
definePageMeta({
  name: ROUTES.APP.HOME
})
export default defineComponent({
  components: {
    PostMain
  },
  setup() {
    const post = usePostStore()
    const allPosts = computed(() => {
      return post.allPosts
    })
    onMounted(async () => {
      await postsInitialDataComposable()
    })
    return { allPosts }
  }
})
</script>
