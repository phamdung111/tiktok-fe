<template>
  <nuxt-layout name="main-layout">
    <div v-for="post in posts.allPosts" :key="post.id">
      <post-main :post="post"/>
    </div>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { postsInitialDataComposable } from '~/composables/post/initial-data/posts-initial-data.composable';
import { ROUTES } from '~/constant/route/route.constant';
import PostMain from '~/components/post/PostMain.vue';
import { usePostStore } from '~/store/post';
import { useUiStore } from '~/store/ui';
import { infinityPosts } from '~/processor/infinity-scroll/infinity-posts.processor';
definePageMeta({
  name: ROUTES.APP.HOME
})
export default defineComponent({
  components: {
    PostMain
  },
  setup() {
    const posts = usePostStore()
    const ui = useUiStore()
    const route = useRoute()
    const handleScroll = (position: number) => {
      window.scrollTo(0, position)
    }
    onMounted(async() => {
      if (ui.selectedPostFrom?.link === route.path) {
          const location = ui.selectedPostFrom!.location
          setTimeout(() => {
            handleScroll(location)
          },100)
      }else{
        await infinityPosts(postsInitialDataComposable)

      }
    })
    return { posts }
  }
})
</script>
