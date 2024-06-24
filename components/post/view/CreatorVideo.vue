<template>
  <div class="h-full relative" @click="selectPost()">
    <div class="absolute flex items-center text-white bottom-3 font-bold">
      <!-- <Icon size="30" name="material-symbols-light:play-arrow-outline" /> -->
      <!-- <span>8.3M</span> -->
    </div>
    <video
      ref="videoRef"
      class="h-full object-cover rounded-sm" loop muted :src="post.video" @mouseenter="play"
      @mouseleave="pause"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { peoplePostInitialDataComposable } from '~/composables/people/post/people-post-initial-data-composable';
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import type { selectedStatusInterface } from '~/interface/store/post/selected-status.interface';
import { usePeopleStore } from '~/store/people';
export default defineComponent({
  name: 'CreatorVideo',
  props: {
    post: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    }
  },
  setup(props) {
    const route = useRoute()
    const people = usePeopleStore()
    const videoRef = ref<HTMLVideoElement | null>(null)
    const play = () => {
      videoRef.value?.play()
    }
    const pause = () => {
      videoRef.value?.pause()
    }
    const selectPost = async () => {
      await peoplePostInitialDataComposable(props.post.id)
      const link: selectedStatusInterface = {
        link: route.path,
        location: window.scrollY,
        isSelected: true
      }
      people.setSelectedStatus(link)
    }
    return { 
      videoRef,
      people,
      play,
      pause,
      selectPost
    }
  }
})
</script>
