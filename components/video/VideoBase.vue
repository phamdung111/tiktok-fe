<template>
  <div class="w-full aspect-2/3">
    <video
    ref="videoRef" :src="videoUrl" muted loop class="w-full h-full object-cover rounded-md" @mouseenter="playVideo()"
      @mouseleave="pauseVideo()" @click="navigateTo(`/post/${id}`)"/>
  </div>
</template>

<script lang="ts">

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
