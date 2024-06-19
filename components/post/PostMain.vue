<template>
  <div v-if="post" class="h-[calc(100vh-55px)] py-4 relative">
    <div class="h-full w-full flex justify-center">
      <div class="h-full w-auto flex">
        <div @click="goToPost()">
          <video-control :post="post" :per-post="false" />
        </div>
        <div class="h-full basis-[48px] flex items-end ml-2 pb-3">
          <div class="grid gap-4">
            <div class="relative">
              <avatar-user :image="post.user[0].image" :size="40" :user-id="post.user[0].id" />
              <follow-button class="absolute bottom-0 left-3/4" :id-user-creator="post.user[0].id" :mini-size="true" />
            </div>
            <interact-post :post="post" :size="35" :direction-vertical="true" />
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
import AvatarUser from '../button/AvatarUser.vue';
import FollowButton from '../button/FollowButton.vue';
import InteractPost from '../button/interact/InteractPost.vue';
import { useUiStore } from '~/store/ui';

export default defineComponent({
  name: 'PostMain',
  components: {
    AvatarUser,
    FollowButton,
    VideoControl,
    InteractPost
  },
  props: {
    post: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    }
  },
  setup(props) {
    const ui = useUiStore()
    const videoPlayer = ref<HTMLVideoElement | null>(null)
    const route = useRoute()
    const totalComments = computed(() => {
      let total = 0
      props.post.comments?.forEach(comment => {
        total += comment?.replies!.length
      })
      return total + props.post.comments?.length
    })
    const goToPost = () => {
      const selectedPost = {
        link: route.path,
        location: window.scrollY
      }
      ui.setSelectedPostFrom(selectedPost)
      navigateTo(`/post/${props.post.id}`)
    }

    return {
      videoPlayer,
      totalComments,
      goToPost,
    }
  }
})
</script>
