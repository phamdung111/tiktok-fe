<template>
  <div v-if="postSelected" class="w-full h-full auto flex items-center">
    <div class="grid w-full h-full xl:flex justify-center relative">
      <div class="relative w-full h-full flex justify-center xl:bg-black xl:bg-opacity-35">
        <button @click="exitWatchPostsCreator()"
          class="absolute top-5 left-2 flex items-center text-white bg-gray-500 rounded-xl px-2 py-1 z-20"
          v-if="people.isWatching">
          <Icon name="mdi:close" size="25" />
          <p>Exit creator videos</p>
        </button>
        <div class="h-full">
          <video-control :post="postSelected" :perPost="true"></video-control>
        </div>
        <pre-button />
        <next-button />
      </div>
      <right-view-post :post-selected="postSelected" :is-show-creator-posts="isShowCreatorPosts"></right-view-post>
    </div>
  </div>
</template>

<script lang="ts">
import PreButton from '../../button/direction/PreButton.vue';
import NextButton from '../../button/direction/NextButton.vue';
import RightViewPost from './RightViewPost.vue';
import VideoControl from '~/components/video/VideoControl.vue';
import { defineComponent, type PropType } from 'vue'
import { usePeopleStore } from '~/store/people';
import { usePostStore } from '~/store/post';
export default defineComponent({
  name: 'ViewPost',
  components: {
    PreButton,
    NextButton,
    RightViewPost,
    VideoControl
  },
  setup(props) {
    const post = usePostStore()
    const people = usePeopleStore()
    const postSelected = computed(() => {
      return people.$state.isWatching ? people.$state.postSelected : post.$state.postSelected
    })
    const isShowCreatorPosts = ref(false)
    const exitWatchPostsCreator = () => {
      people.$state.isWatching = false
      navigateTo(`/post/${post.$state.postSelected?.id}`)
    }
    onMounted(() => {
      people.isWatching ? isShowCreatorPosts.value = true : ''
    })

    return { isShowCreatorPosts, people, exitWatchPostsCreator, postSelected }
  }
})
</script>
0