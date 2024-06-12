<template>
  <div v-if="post" class="h-[calc(100vh-55px)] py-4 relative">
    <div class="h-full w-full flex justify-center">
      <div class="w-full h-full lg:w-auto relative">
        <video-control :post="post" :perPost="false"></video-control>
        <div class="absolute right-3 bottom-[30px] md:right-6 lg:right-0">
          <div class="grid gap-4 ml-2">
            <div class="relative mr-1 mb-2">
              <avatar-user :image="post.user[0].image" :size="40"></avatar-user>
              <follow-button :id-user-creator="post.user[0].id" :mini-size="true"></follow-button>
            </div>
            <div>
              <like-button :post="post" :size="35" :direction-vertical="true" />
            </div>
            <div @click="navigateTo(`post/${post.id}`)" class="cursor-pointer">
              <div class="grid items-center justify-items-center">
                <div class="flex justify-center items-center  w-[40px] h-[40px] rounded-full opacity-85">
                  <Icon name="ph:chat-circle-dots-light" size="35" color="white" />
                </div>
                <div class="opacity-60 font-medium text-white">
                  {{ totalComments }}
                </div>
              </div>
            </div>
            <favorite-button :post="post" :size="35" :direction-vertical="true" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import VideoControl from '../video/VideoControl.vue';
import LikeButton from '../button/LikeButton.vue';
import FavoriteButton from '../button/FavoriteButton.vue';
import CommentPostView from './comment/CommentPostView.vue';
import AvatarUser from '../button/AvatarUser.vue';
import FollowButton from '../button/FollowButton.vue';
export default defineComponent({
  name: 'PostMain',
  components: {
    LikeButton,
    FavoriteButton,
    CommentPostView,
    AvatarUser,
    FollowButton,
    VideoControl
  },
  props: {
    post: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    }
  },
  setup(props) {
    const videoPlayer = ref<HTMLVideoElement | null>(null)
    const totalComments = computed(() => {
      let total = 0
      props.post.comments?.forEach(comment => {
        total += comment?.replies!.length
      })
      return total + props.post.comments?.length
    })
    return {
      videoPlayer,
      totalComments,
    }
  }
})
</script>
