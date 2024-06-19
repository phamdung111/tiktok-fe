<template>
  <div class="h-full shadow-xl">
    <div class="flex justify-center h-full ">
      <div class="relative">
        <video
          ref="videoRef" muted loop preload="auto"
          class="object-cover h-full lg:w-auto lg:rounded-2xl overflow-hidden relative" :src="post.video"
          @click="perPost ? playPause() : ''" />
        <div class="absolute w-full bottom-0 left-0 text-white z-controlVideo pb-3">
          <div v-if="!perPost" class="grid gap-3 pl-3">
            <h4 class="cursor-pointer hover:underline " @click="navigateTo(`/profile/${post.user[0].id}`)">{{
              post.user[0].name }}</h4>
            <h4>{{ post.text }}</h4>
            <Icon name="ph:music-notes-simple-fill" />
          </div>
          <div class="flex justify-start items-center gap-2 px-2" :class="perPost ? 'w-full' : ''">
            <Icon
              :name="isPlaying ? 'ic:sharp-pause' : 'material-symbols:play-arrow-rounded'" size="40"
              @click="playPause()" />
            <div class="w-full">
              <input
                v-model="currentTime" class="w-full h-[2px] flex items-center hover:cursor-pointer" type="range"
                min="0" :max="totalTime" @input="handleTimeUpdate">
            </div>
            <div class="relative">
              <div v-if="!isMuted">
                <Icon
                  class="hover:cursor-pointer"
                  name="streamline:entertainment-volume-level-high-speaker-high-volume-control-audio-music" size="30"
                  @click="toggleMutedVideo()" />
              </div>
              <div v-else>
                <Icon
                  class="hover:cursor-pointer" name="fluent:speaker-mute-24-filled" size="30"
                  @click="toggleMutedVideo()" />
              </div>
              <input
                v-model="volumeLevel"
                class="absolute w-[70px] h-[4px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[70px] -rotate-90 hover:cursor-pointer"
                type="range" min="0" max="1" step="0.1" @input="handleVolume()">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface'
export default defineComponent({
  name: 'VideoControl',
  components: {},
  props: {
    post: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    },
    perPost: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const videoRef = ref<HTMLVideoElement | null>(null)
    const isPlaying = ref(false)
    const totalTime = ref(0)
    const currentTime = ref(0)
    const volumeLevel = ref(0)
    const isMuted = ref(true)

    
    const playPause = () => {
      if (videoRef.value) {
        if (videoRef.value.paused) {
          videoRef.value.play()
          isPlaying.value = true
        } else {
          videoRef.value.pause()
          isPlaying.value = false
        }
      }
    }
    // control volume
    const toggleMutedVideo = () => {
      if (!isMuted.value) {
        isMuted.value = true
        setVolumeLocalStorage(isMuted.value, -1)
      } else {
        isMuted.value = false
        setVolumeLocalStorage(isMuted.value, -1)
      }
      getVolumeLocalStorage()
    }
    const handleVolume = () => {
      volumeLevel.value > 0 ? isMuted.value = false : isMuted.value = true
      setVolumeLocalStorage(isMuted.value, volumeLevel.value)
      videoRef.value!.muted = isMuted.value
      videoRef.value!.volume = volumeLevel.value
    }
    const setVolumeLocalStorage = (muted: boolean, volume: number) => {
      if (volume >= 0) {
        localStorage.setItem('webapp-video-volume', JSON.stringify({
          muted: muted,
          volume: volume
        }))
      } else {
        const localVolume = JSON.parse(localStorage.getItem('webapp-video-volume')!)
        localVolume.muted = muted
        localStorage.setItem('webapp-video-volume', JSON.stringify(
          localVolume
        ))
      }
    }
    const getVolumeLocalStorage = () => {
      const localVolume = JSON.parse(localStorage.getItem('webapp-video-volume')!)
      if (localVolume.muted) {
        volumeLevel.value = 0
        videoRef.value!.volume = 0
      } else {
        volumeLevel.value = localVolume.volume
        videoRef.value!.volume = localVolume.volume
      }
      isMuted.value = localVolume.muted
      videoRef.value!.muted = localVolume.muted
    }
    // control duration video
    const getVideoDuration = () => {
      if (videoRef.value) {
        totalTime.value = Math.floor(videoRef.value.duration)
      }
    }
    const handleTimeUpdate = () => {
      if (videoRef.value) {
        videoRef.value.currentTime = currentTime.value
        if (isPlaying.value) {
          videoRef.value.play()
        }
      }
    }

    const resetTime = () => {
      isPlaying.value = false
      currentTime.value = 0
    }
    onMounted(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
      const autoPlayVideo = () => {
        if (videoRef.value && !props.perPost) {
          const promiseVideo = videoRef.value.play()
          if (promiseVideo !== undefined) {
            promiseVideo.then((_ => {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting && entry.target instanceof HTMLVideoElement) {
                    entry.target.play()
                    videoRef.value?.play()
                    getVolumeLocalStorage()
                  } else if (entry.target instanceof HTMLVideoElement) {
                    entry.target.pause()
                    resetTime()
                  }
                })
              }, options)
              if (videoRef.value) {
                observer.observe(videoRef.value)
              }
            }))
          }
        } else {
          videoRef.value?.play()
          isPlaying.value = true
          getVolumeLocalStorage()
        }
      }
      autoPlayVideo()
    })
    onMounted(() => {
      if (videoRef.value) {
        videoRef.value.addEventListener('loadedmetadata', () => {
          getVideoDuration()
        })
      }
    })
    onMounted(() => {
      if (videoRef.value) {
        videoRef.value.paused ? isPlaying.value = true : isPlaying.value = false
      }
    })
    watch(() => isPlaying.value, () => {
      if (isPlaying.value === true) {
        const interval = setInterval(function () {
          currentTime.value++
          if (currentTime.value >= totalTime.value) {
            currentTime.value = 0
          }
          if (isPlaying.value === false) {
            clearInterval(interval)
          }
        }, 1000)
      }
    })
    return {
      videoRef,
      isPlaying,
      currentTime,
      totalTime,
      volumeLevel,
      isMuted,
      playPause,
      handleTimeUpdate,
      handleVolume,
      toggleMutedVideo
    }
  }
})
</script>
