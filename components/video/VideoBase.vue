<template>
  <div class="w-full aspect-2/3">
    <video
    ref="videoRef" :src="videoUrl" muted loop class="w-full h-full object-cover rounded-md" @mouseenter="playVideo()"
      @mouseleave="pauseVideo()" @click="goToPost()"/>
  </div>
</template>

<script lang="ts">
import { usePeopleStore } from '~/store/people';
export default defineComponent({
  name: 'VideoBase',
  props: {
    videoUrl: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const videoRef = ref<HTMLVideoElement>()
    const people = usePeopleStore()
    const route = useRoute()
    const playVideo = () => {
      videoRef.value?.play()
    }
    const pauseVideo = () => {
      videoRef.value?.pause()
    }
    const goToPost = () => {
      const selectedPost = {
        link: route.fullPath,
        location: window.scrollY,
        isSelected: true
      }
      people.setSelectedStatus(selectedPost)
      navigateTo(`/post/${props.id}`)

    }
    return {
      videoRef,
      playVideo,
      pauseVideo,
      goToPost
    }
  }
})
</script>
