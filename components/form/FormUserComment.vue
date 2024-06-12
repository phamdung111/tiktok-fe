<template>
  <div v-if="!isShowCreatorPosts" class="border-t p-2 w-full bg-white">
    <div class="p-2 flex mr-8 gap-2 items-center justify-between w-full">
      <div class="flex w-full gap-2 items-center">
        <avatar-user v-if="user.id" :image="user.image" :size="40" />
        <input v-model="form.text"
          class="py-2 px-1 w-full overflow-hidden focus:outline bg-input-bg-primary2 rounded-md"
          placeholder="Add comment..." type="text">
      </div>
      <button @click="submitComment()" :disabled="!isComment"
        :class="!isComment ? 'opacity-60' : 'bg-red-primary text-white'"
        class="px-5 py-2 rounded-sm font-medium">Post</button>
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
      }
    }
    watch(() => form.text, () => {
      form.text.length > 0 ? isComment.value = true : isComment.value = false
    })
    return { submitComment, form, isComment, user }
  }
})
</script>

<style scoped></style>