<template>
  <div
    id="comment-view"
    class="w-full text-text-color-primary text-[14px] xl:h-full xl:px-8 xl:overflow-y-scroll bg-bg-primary2 xl:overflow-x-hidden relative">
    <div class="bg-bg-primary p-4 rounded-md">
      <div class="flex mb-4">
        <div class="mr-3" @click="goToProfile(postSelected.user[0].id)">
          <avatar-user :image="postSelected.user[0].image" :size="48" :user-id="postSelected.user[0].id" />
        </div>
        <div class="mr-12">
          <h4 class="text-[18px] font-bold cursor-pointer" @click="goToProfile(postSelected.user[0].id)">{{
            postSelected.user[0].name
            }}</h4>
          <div class="text-text-color-primary2 flex">
            <h4>{{ postSelected.user[0].name }}</h4>
            <Icon name="ph:dot-bold" />
            <h4>{{ formatDateTimeProvider(new Date(postSelected.created_at)) }}</h4>
          </div>
        </div>
        <div>
          <follow-button :id-user-creator="postSelected.user[0].id" />
        </div>
      </div>
      <div>
        <h5>{{ postSelected.text }}</h5>
      </div>
      <div class="mt-2 flex gap-1 items-center text-text-color-primary2">
        <Icon name="mdi:music" />
        <h5>soundtrack</h5>
      </div>
      <div class="pt-4 flex">
        <div class="w-full mt-4 flex gap-4 hover:cursor-pointer">
          <interact-post :post="postSelected" :size="20" :direction-vertical="false" />
        </div>
      </div>
    </div>
    <div class="hidden xl:block pt-[18px]">
      <div class="flex border-b pb-2">
        <button
          :class="isShowCreatorPosts ? '' : 'border-black font-bold border-b-[2px]'" class="basis-1/2"
          @click="showComments()">Comments({{
          postSelected?.comments.length
          }})</button>
        <button
          :class="isShowCreatorPosts ? 'border-black font-bold border-b-[2px]' : ''"
          class="basis-1/2 hidden xl:block" @click="showCreatorPosts()">Creator's video
        </button>
      </div>

    </div>
    <div class="mt-6 px-4">
      <div class="basis-[50px] xl:hidden">
        <h4 class="text-[18px] font-bold text-text-color-primary">{{ postSelected.comments.length }} comments</h4>
      </div>
      <div class="mt-4">
        <div class="grid">
          <div class="pb-6 border-b xl:hidden">
            <form-user-comment :post-selected="postSelected" :is-show-creator-posts="isShowCreatorPosts" />
          </div>
          <div>
            <div v-if="!isShowCreatorPosts">
              <comment-post-view v-for="comment in postSelected.comments" :key="comment.id" :comment="comment" />
            </div>
            <div v-else class="grid grid-cols-3 gap-2">
              <div v-for="post in videos" :key="post.id">
                <creator-video :post="post" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="w-full pb-6 px-2 border-t hidden xl:block bottom-0 py-5 fixed z-menu xl:bg-white">
    <form-user-comment :post-selected="postSelected" :is-show-creator-posts="isShowCreatorPosts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommentPostView from '../comment/CommentPostView.vue';
import CreatorVideo from './CreatorVideo.vue';
import FormUserComment from '../../form/FormUserComment.vue';
import FollowButton from '~/components/button/FollowButton.vue';
import AvatarUser from '~/components/button/AvatarUser.vue';
import InteractPost from '~/components/button/interact/InteractPost.vue';
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import { usePeopleStore } from '~/store/people';
import { useUserStore } from '~/store/user';
import { formatDateTimeProvider } from '~/provider/format/date-time/format-date-time.provider';
import { peopleInitialDataComposable } from '~/composables/people/initial-data/people-initial-data.composable';
export default defineComponent({
  name: 'RightViewPost',
  components: {
    CommentPostView,
    CreatorVideo,
    FormUserComment,
    FollowButton,
    AvatarUser,
    InteractPost
  },
  props: {
    postSelected: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    },
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
    const showComments =() => {
      isShowCreatorPosts.value = false
    }
    const goToProfile = (userId: number) => {
      navigateTo(`/profile/${userId}`)
    }
    onMounted(() => {
      people.isWatching ? isShowCreatorPosts.value = true : ''
    })
    return {
      user,
      isShowCreatorPosts,
      videos,
      isOwnerPost,
      showCreatorPosts,
      formatDateTimeProvider,
      goToProfile,
      showComments
    }
  }
})
</script>

<style scoped lang="css">
#comment-view::-webkit-scrollbar {
  display: none;
}
</style>
