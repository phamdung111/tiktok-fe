<template>
  <div v-if="isLoading" class="h-full">
    <div v-if="postSelected" class="w-full h-full">
      <div class="grid xl:flex h-full w-full xl:justify-end">
        <div
          class="flex-1 max-h-[80vh] h-[80vh] xl:h-full xl:max-h-full relative py-2 rounded-lg flex items-center justify-center"
          :style="{ backgroundImage: `url('${postSelected.image}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
          <video-control :post="postSelected" :per-post="true" />
          <div class="absolute top-[calc(50%)] right-[20px] z-menu md:right-[50px] lg:right-[20px]">
            <div class="relative">
              <pre-button class="absolute -top-[1.5em] right-0" />
              <next-button :current-post="postSelected.id" :list="post.allPosts" class="absolute top-[1.5em] right-0" />
            </div>
          </div>
          <div v-if="post.selectedStatus" class="absolute top-4 left-2 flex items-center" @click="closeDetailPost()">
            <div class="w-[35px] h-[35px] flex justify-center items-center bg-gray-500 rounded-full hover:bg-bg-primary2">
              <Icon name="mdi:close" size="25" color="white" />
            </div>
          </div>
          <div class="absolute top-3 right-4">
            <delete-data :user-own="postSelected.user[0].id" type="post" :id-data="postSelected.id">
              <template #icon>
                <div
                  class="w-[40px] h-[40px] bg-gray-500 flex justify-center items-center rounded-full hover:bg-bg-primary2">
                  <Icon name="ph:dots-three-bold" size="30" color="white" />
                </div>
              </template>
            </delete-data>
          </div>
        </div>
        <div class="xl:basis-[600px]">
          <div class="w-full h-full grid grid-cols-1">
            <right-view-post :post-selected="postSelected" />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <not-found-base :icon="`zondicons:video-camera`" :text="`Video is currently unavailable!`" />
    </div>
  </div>
</template>

<script lang="ts">
import PreButton from '../../button/direction/PreButton.vue';
import NextButton from '../../button/direction/NextButton.vue';
import RightViewPost from './RightViewPost.vue';
import VideoControl from '~/components/video/VideoControl.vue';
import NotFoundBase from '~/components/not-found/NotFoundBase.vue';
import DeleteData from '~/components/button/DeleteData.vue';
import { usePeopleStore } from '~/store/people';
import { usePostStore } from '~/store/post';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import { postInitialDataComposable } from '~/composables/post/initial-data/post-initial-data.composable';
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
export default defineComponent({
  name: 'ViewPost',
  components: {
    PreButton,
    NextButton,
    RightViewPost,
    VideoControl,
    NotFoundBase,
    DeleteData
  },
  setup() {
    const ui =useUiStore()
    const user = useUserStore()
    const post = usePostStore()
    const people = usePeopleStore()
    const route = useRoute()
    const isLoading = ref(false);
    const postSelected = ref<PostResponseInterface | null>(null);
    const isShowCreatorPosts = ref(false)
    const closeDetailPost = () => {
      navigateTo(`${post.selectedStatus?.link}`)
    }
    const ownPost = computed(() => {
      return postSelected.value?.user[0].id === user.id
    })
    onMounted(async() => {
      await postInitialDataComposable(Number(route.params.id))
      postSelected.value = post.postSelected
      isLoading.value = true
    })
    watch(() => people.postSelected?.id, () => {
      if(people.selectedStatus?.isSelected) {
        if(people.postSelected){
          postSelected.value = people.postSelected
        }
      }
    })
    return {
      ui,
      post,
      isLoading,
      isShowCreatorPosts,
      people,
      postSelected,
      ownPost,
      closeDetailPost
    }
  }
})
</script>
