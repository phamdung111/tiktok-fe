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
import PostMain from '~/components/post/PostMain.vue';
import { usePostStore } from '~/store/post';
import { usePeopleStore } from '~/store/people';
import { infinityPosts } from '~/processor/infinity-scroll/infinity-posts.processor';

export default defineComponent({
  components: {
    PostMain
  },
  setup() {
    const posts = usePostStore()
    const people = usePeopleStore()
    const handleScroll = (position: number) => {
      window.scrollTo(0, position)
    }
    onMounted(() => {
      if (!posts.selectedStatus?.isSelected) {
       infinityPosts(postsInitialDataComposable)
      }else{
        const location = posts.selectedStatus.location
          setTimeout(() => {
            handleScroll(location)
          },100)
      }
        posts.removeSelectedStatus()
        people.removeSelectedStatus()
    })
    return { posts }
  }
})
</script>
