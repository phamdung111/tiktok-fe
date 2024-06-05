<template>
  <div v-if="!isShowCreatorPosts" class="border-t p-2 w-full bg-white">
    <div class="p-2 flex mr-8 gap-2 items-center justify-between w-full">
      <input v-model="form.text" class="py-2 px-1 w-full overflow-hidden focus:outline bg-yellow-100 rounded-md"
        placeholder="Add comment..." type="text">
      <button @click="submitComment()" :disabled="!isComment" :class="!isComment ? '' : 'bg-red-primary text-white'"
        class="px-5 py-2 rounded-sm">Post</button>
      <Icon v-if="form.text" @click="form.text = ''" size="30" name="mdi:close" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userCommentPostSubmitComposable } from '~/composables/user/post/comment/user-comment-post-submit.composable';
import { userCommentPostFormDataComposable as form } from '~/composables/user/post/comment/user-comment-post-form-data.composable';
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';

export default defineComponent({
  name: 'FormUserComment',
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

    const submitComment = async () => {
      form.post_id = Number(props.postSelected?.id)
      await userCommentPostSubmitComposable()
    }
    watch(() => form.text, () => {
      form.text.length > 0 ? isComment.value = true : isComment.value = false
    })
    return { submitComment, form, isComment }
  }
})
</script>

<style scoped></style>