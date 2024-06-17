<template>
  <div v-if="comment" class="w-full justify-between items-center mt-4 relative">
    <div class="flex justify-between mb-4">
      <div class="basis-[50px] mr-4">
        <avatar-user :image="comment.user[0].image" :size="48" :user-id="comment.user[0].id"></avatar-user>
      </div>
      <div class="flex w-full justify-between items-center">
        <div class="w-full">
          <h4 class="font-semibold text-[14px]">{{ comment.user[0].name }}</h4>
          <h4 class="text-text-color-primary2 mb-[6px]">{{ comment.text }}</h4>
          <div class="flex">
            <h5 class="text-[14px] text-text-color-blur">{{ formatDateTimeProvider(new Date(comment.time)) }}</h5>
            <span @click="isReply = true" class="hover:underline ml-6 font-medium">Reply</span>
          </div>
        </div>
        <div>
          <delete-data :userOwn="comment.user[0].id" type="comment" :idData="comment.id"></delete-data>
        </div>
      </div>
    </div>
    <div v-if="isReply" class="flex items-center w-full mt-1 gap-2 mb-3 pl-[52px]">
      <input v-model="textReply" @keyup.enter="summitReply()"
        class="py-[11px] w-full focus:outline-none focus:border-text-color-primary2 focus:ring-[1px] bg-bg-primary rounded-md cursor-pointer"
        placeholder="Add answer..." type="text">
      <button :disabled="!textReply" @click="summitReply()"
        :class="textReply ? 'bg-red-primary text-white' : 'opacity-60 border border-text-color-primary2'"
        class="px-5 py-2 rounded-sm font-medium">Post</button>
      <Icon @click="closeReply()" size="30" name="mdi:close" />
    </div>
    <div v-if="comment?.replies?.length" class="pb-4 pl-[52px]">
      <div v-if="!seeReply" @click="seeReply = true" class="opacity-60 flex gap-1.5 items-center">
        <button class="hover:underline">See {{ comment?.replies.length }} answers</button>
        <Icon size="22" name="iconamoon:arrow-down-2-duotone" />
      </div>
      <div v-else>
        <div v-for="reply in comment?.replies" :key="reply.id" class="mb-2">
          <reply-view :reply="reply" :commentId="comment.id" />
        </div>
        <div v-if="comment?.replies" class="absolute bottom-0 right-0">
          <button @click="seeReply = false" class="text-[14px] text-color-blur">hide</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import DeleteData from '~/components/button/DeleteData.vue';
import AvatarUser from '~/components/button/AvatarUser.vue';
import { userReplyCommentFormData as form } from '~/composables/user/post/reply/user-reply-comment-form-data.composable';
import { userReplyCommentSubmitComposable } from '~/composables/user/post/reply/user-reply-comment-submit.composable';
import type { CommentInterface } from '~/interface/entity/comment/comment.interface';
import { formatDateTimeProvider } from '~/provider/format/date-time/format-date-time.provider';
import { useUserStore } from '~/store/user';
import ReplyView from '../reply/ReplyView.vue';
export default defineComponent({
  components: { ReplyView, DeleteData, AvatarUser },
  name: 'CommentPostView',
  props: {
    comment: {
      type: Object as PropType<CommentInterface>,
      default: []
    }
  },
  setup(props) {
    const user = useUserStore()
    const isReply = ref(false)
    const seeReply = ref(false)
    const textReply = ref('')
    const summitReply = async () => {
      form.comment_id = props.comment.id
      form.text = textReply.value
      await userReplyCommentSubmitComposable()
      isReply.value = false
      form.text = ''
    }
    const closeReply = () => {
      isReply.value = false
      textReply.value = ""
      form.text = ""
    }
    watch(() => isReply, () => {

    })
    return { user, textReply, isReply, form, seeReply, formatDateTimeProvider, closeReply, summitReply }
  }
})
</script>
