<template>
  <nuxt-layout name="main-layout">
    <div v-for="post in allPosts" :key="post.id">
      <post-main :post="post"></post-main>
    </div>
    <!-- <div v-if="loading"
      class="fixed flex items-center justify-center top-0 left-0 h-full w-full bg-black z-notification bg-opacity-50">
      <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#FFFFFF" />
    </div> -->
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
    const page = ref<number>(1)
    const loading = ref(false)
    const allPosts = computed(() => {
      return post.allPosts
    })

    const callbackApi = async () => {
      if (loading.value) return

      loading.value = true
      await postsInitialDataComposable(page.value)
      loading.value = false
      page.value++
    };

    const handleScroll = () => {

      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading.value
      ) {
        callbackApi();
      }
    };
    onMounted(async () => {
      callbackApi()
      window.addEventListener('scroll', handleScroll)
    })
    return { allPosts, loading }
  }
})
</script>
