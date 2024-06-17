<template>
  <div class="w-full aspect-2/3">
    <video :src="videoUrl" muted loop @mouseenter="playVideo()" @mouseleave="pauseVideo()" ref="videoRef"
      @click="navigateTo(`/post/${id}`)" class="w-full h-full object-cover rounded-md"></video>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

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
  setup() {
    const playVideo = () => {
      videoRef.value?.play()
    }
    const pauseVideo = () => {
      videoRef.value?.pause()
    }
    const videoRef = ref<HTMLVideoElement>()

    return {
      videoRef,
      playVideo,
      pauseVideo,
    }
  }
})
</script>
