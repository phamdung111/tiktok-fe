<template>
  <div v-if="postSelected" class="w-full h-full">
    <div class="grid xl:flex h-full w-full xl:justify-end">
      <div
class="flex-1 max-h-[80vh] h-[80vh] xl:h-full xl:max-h-full relative py-2    rounded-lg"
        :style="{ backgroundImage: `url('${postSelected.image}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
        <video-control :post="postSelected" />
        <div class="absolute top-[calc(50%)] right-[20px] z-menu md:right-[50px] lg:right-[20px]">
          <div class="relative">
            <pre-button class="absolute -top-[1.5em] right-0" />
            <next-button class="absolute top-[1.5em] right-0" />
          </div>
        </div>
        <div class="absolute top-2 left-2 flex items-center text-white">
          <div
            class="w-[40px] h-[40px] bg-text-color-blur flex justify-center items-center rounded-full hover:bg-bg-primary2">
            <Icon name="mdi:close" size="30" color="white" />
          </div>
          <span class="truncate">Close creator's video</span>

        </div>
      </div>
      <div class="xl:basis-[600px]">
        <right-view-post :post-selected="postSelected" />
      </div>
    </div>
  </div>
  <div v-else>
    <not-found-base :icon="`zondicons:video-camera`" :text="`Video is currently unavailable!`" />
  </div>

</template>

<script lang="ts">
import PreButton from '../../button/direction/PreButton.vue';
import NextButton from '../../button/direction/NextButton.vue';
import RightViewPost from './RightViewPost.vue';
import VideoControl from '~/components/video/VideoControl.vue';
import NotFoundBase from '~/components/not-found/NotFoundBase.vue';
import { usePeopleStore } from '~/store/people';
import { usePostStore } from '~/store/post';

export default defineComponent({
  name: 'ViewPost',
  components: {
    PreButton,
    NextButton,
    RightViewPost,
    VideoControl,
    NotFoundBase
  },
  setup() {
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

    return {
      isShowCreatorPosts,
      people,
      postSelected,
      exitWatchPostsCreator,
    }
  }
})
</script>
