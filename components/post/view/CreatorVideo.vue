<template>
  <div @click="showPostProfile()" class="h-full relative">
    <div class="absolute flex items-center text-white bottom-3 font-bold">
      <!-- <Icon size="30" name="material-symbols-light:play-arrow-outline" /> -->
      <!-- <span>8.3M</span> -->
    </div>
    <video class="h-full object-cover rounded-sm" @mouseenter="play" @mouseleave="pause" loop muted
      :src="post.video"></video>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
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
    const people = usePeopleStore()
    const play = (e: any) => {
      e.target.play()
    }
    const pause = (e: any) => {
      e.target.pause()
    }
    const showPostProfile = () => {
      people.isWatching = true
      navigateTo(`/post/${props.post.id}`)
    }
    return { play, pause, people, showPostProfile }
  }
})
</script>
