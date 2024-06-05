<template>
  <div class="w-full basis-[600px] relative h-full">
    <div class="h-full grid content-between">
      <div id="rightViewPost" class="relative mx-[32px] my-[24px] overflow-y-scroll overflow-x-hidden h-full">
        <div class="gird mx-5 p-4">
          <div class="h-[42px] mb-[15px] flex justify-between w-full">
            <div class="flex gap-2 items-center hover:cursor-pointer">
              <img @click="navigateTo(`/profile/${postSelected?.user[0].id}`)" class="rounded-full h-full object-cover"
                :src="postSelected?.user[0].image" alt="">
              <div @click="navigateTo(`/profile/${postSelected?.user[0].id}`)" class="hover:cursor-pointer">
                <h2 class="font-bold text-[25px]">{{ postSelected?.user[0].name }}</h2>
                <h2 class="tex-color-blur">{{ postSelected?.user[0].name }}</h2>
              </div>
            </div>
            <dir class="absolute top-0 right-0">
              <div v-if="!isOwnerPost">
                <follow-button :id-user-creator="postSelected.user[0].id"></follow-button>
              </div>
              <div v-else class="absolute top-0 right-0">
                <delete-data :userOwn="postSelected.user[0].id" type="post" :idData="postSelected.id"></delete-data>
              </div>
            </dir>
          </div>

          <div class="text-color-blur">{{ postSelected?.text }}</div>
          <div class="hover:cursor-pointer">
            <Icon class="text-text-color-primary" name="mdi:music" />
          </div>
          <div class="w-full mt-4 flex gap-4 hover:cursor-pointer">
            <like-button :post="postSelected" :size="18" :direction-vertical="false" />
            <div class="flex gap-1 items-center hover:cursor-pointer">
              <Icon name="mdi:chat" />
              <p class="font-bold text-text-color-primary opacity-80">{{ postSelected?.comments.length }}</p>
            </div>
            <favorite-button :post="postSelected" :size="18" :direction-vertical="false"></favorite-button>
          </div>
        </div>
        <div class="flex border-b pb-2">
          <button @click="isShowCreatorPosts = false"
            :class="isShowCreatorPosts ? '' : 'border-black font-bold border-b-[2px]'" class="basis-1/2">Comments({{
            postSelected?.comments.length
            }})</button>
          <button @click="showCreatorPosts()" :class="isShowCreatorPosts ? 'border-black font-bold border-b-[2px]' : ''"
            class="basis-1/2">Creator's video
          </button>
        </div>
        <div>
          <div v-if="!isShowCreatorPosts">
            <div v-for="comment in postSelected?.comments" :key="comment.id">
              <comment-post-view :comment="comment"></comment-post-view>
            </div>
          </div>
          <div v-else class="grid grid-cols-3 gap-2">
            <div v-for="post in videos" :key="post.id">
              <creator-video :post="post" />
            </div>
          </div>
        </div>
      </div>
      <form-user-comment :postSelected="postSelected" :isShowCreatorPosts="isShowCreatorPosts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommentPostView from '../comment/CommentPostView.vue';
import CreatorVideo from './CreatorVideo.vue';
import LikeButton from '../../button/LikeButton.vue';
import FavoriteButton from '../../button/FavoriteButton.vue';
import FormUserComment from '../../form/FormUserComment.vue';
import FollowButton from '~/components/button/FollowButton.vue';

import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import { usePeopleStore } from '~/store/people';
import { useUserStore } from '~/store/user';
import DeleteData from '~/components/button/DeleteData.vue';
import { peopleInitialDataComposable } from '~/composables/people/initial-data/people-initial-data.composable';
export default defineComponent({
  name: 'RightViewPost',
  components: {
    CommentPostView,
    CreatorVideo,
    LikeButton,
    FavoriteButton,
    FormUserComment,
    FollowButton,
    DeleteData
  },
  props: {
    postSelected: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    },
    isShowCreatorPosts: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const user = useUserStore()
    const isShowCreatorPosts = ref(false)
    const isOwnerPost = computed(() => {
      return props.postSelected.user[0].id === user.id ? true : false
    })
    const people = usePeopleStore()
    const { videos } = storeToRefs(people)
    const showCreatorPosts = async () => {
      await peopleInitialDataComposable(Number(props.postSelected?.user[0].id))
      isShowCreatorPosts.value = true
    }
    onMounted(() => {
      people.isWatching ? isShowCreatorPosts.value = true : ''
    })
    return { isShowCreatorPosts, videos, showCreatorPosts, isOwnerPost }
  }
})
</script>

<style scoped lang="css">
#rightViewPost::-webkit-scrollbar {
  display: none;
}
</style>