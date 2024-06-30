<template>
  <div v-if="!people.liked?.length" class="w-full px-[32px] py-[87px] text-center">
    <Icon class="invisible md:visible opacity-40" size="90" name="ph:user-light" />
    <h3 class="text-[17px] font-medium mb-4">No liked videos yet </h3>
    <h4 class="opacity-70">Videos you liked will appear here</h4>
  </div>
  <div v-else class="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
    <div v-for="post in people.liked" :key="post.id">
      <div class="aspect-2/3">
        <video-base :id="post.id" :video-url="post.video" />
      </div>
      <h4 class="overflow-ellipsis overflow-hidden">{{ post.text }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import VideoBase from '../video/VideoBase.vue';

import { useUserStore } from '~/store/user';
import { usePeopleStore } from '~/store/people';
export default defineComponent({
  name: 'ProfileLiked',
  components: {
    VideoBase
  },
  setup() {
    const people = usePeopleStore()
    const user = useUserStore()
    const showPost = (postId: number) => {
      navigateTo(`/post/${postId}`)
    }
    return {
      user,
      people,
      showPost
    }
  }
})
</script>
