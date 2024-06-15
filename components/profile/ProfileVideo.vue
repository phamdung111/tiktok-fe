<template>
  <div v-if="!information.videos?.length" class="w-full px-[32px] py-[87px] text-center">
    <Icon class="invisible md:visible opacity-40" size="90" name="ph:user-light" />
    <h3 class="text-[17px] font-medium mb-4">Upload your first video</h3>
    <h4 class="opacity-70">Your videos will appear here</h4>
  </div>
  <div v-else class="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
    <div class="" v-for="post in information.videos" :key="post.id">
      <div class="aspect-2/3">
        <video @click="showPost(post.id)" :src="post.video" class="h-full w-full object-cover"></video>
      </div>
      <h4 class="overflow-ellipsis overflow-hidden">{{ post.text }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { PeopleResponseInterface } from '~/interface/response/people/people-response.inteface';
export default defineComponent({
  name: 'ProfileVideo',
  props: {
    information: {
      type: Object as PropType<PeopleResponseInterface>,
      default: null
    }
  },
  setup() {
    const showPost = (postId: number) => {
      navigateTo(`/post/${postId}`)
    }
    return { showPost }
  }
})
</script>
