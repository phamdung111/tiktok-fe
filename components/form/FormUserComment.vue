<template>
  <div v-if="!isShowCreatorPosts">
    <div class="flex gap-2 items-center justify-between w-full">
      <div class="basis-[50px] items-center">
        <avatar-user v-if="user.id" :image="user.image" :size="48" :user-id="user.id" />
      </div>
      <div class="flex ml-2 w-full gap-2">
        <input
          v-model="form.text"
          class="overflow-hidden py-[11px] w-full focus:outline-none focus:border-text-color-primary2 focus:ring-[1px] bg-bg-primary rounded-md cursor-pointer"
          placeholder="Add comment..." type="text" @keyup.enter="submitComment()">
        <button
          :disabled="!isComment"
          :class="!isComment ? 'opacity-60 border border-text-color-primary2' : 'bg-red-primary text-white'"
          class="px-5 py-2 rounded-sm font-medium" @click="submitComment()">Post</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AvatarUser from '../button/AvatarUser.vue';
import { userCommentPostSubmitComposable } from '~/composables/user/post/comment/user-comment-post-submit.composable';
import { userCommentPostFormDataComposable as form } from '~/composables/user/post/comment/user-comment-post-form-data.composable';
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
export default defineComponent({
  name: 'FormUserComment',
  components: {
    AvatarUser
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
    const isComment = ref(false)
    const user = useUserStore()
    const ui = useUiStore()
    const submitComment = async () => {
      if (!user.id) {
        ui.isOpenOverlay = true
      } else {
        form.post_id = Number(props.postSelected?.id)
        await userCommentPostSubmitComposable()
        form.text = ''
      }
    }
    watch(() => form.text, () => {
      form.text.length > 0 ? isComment.value = true : isComment.value = false
    })
    return {
      form,
      isComment,
      user,
      submitComment
    }
  }
})
</script>
