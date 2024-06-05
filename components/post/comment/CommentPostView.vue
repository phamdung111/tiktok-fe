<template>
  <div v-if="comment" class="w-full justify-between items-center mt-4">
    <div class="flex justify-between">
      <div class="basis-1/12">
        <div @click="navigateTo(`/profile/${comment?.user[0].id}`)" class="w-[40px] h-[40px] hover:cursor-pointer">
          <img class="w-full h-full object-cover mx-auto rounded-full" :src="comment?.user[0].image" alt="">
        </div>
      </div>
      <div class="basis-11/12 ml-2">
        <div class="grid">
          <div class="flex justify-between">
            <div class="w-full mb-2">
              <p @click="navigateTo(`/profile/${comment?.user[0].id}`)" class="hover:cursor-pointer">{{
                comment?.user[0].name }}</p>
              <p class="opacity-75">{{ comment.text }}</p>
              <div class="flex w-full items-center justify-between gap-4 text-[14px] text-color-blur">
                <p class="font-mono text-color-blur">
                  {{ formatDateTimeProvider(new Date(comment?.time)) }}
                </p>
                <button @click="isReply = true" class="hover:underline">Reply</button>
              </div>
            </div>
            <delete-data :userOwn="comment.user[0].id" type="comment" :idData="comment.id"></delete-data>
          </div>
          <div v-if="isReply" class="flex items-center w-full mt-1 gap-2 mb-3">
            <input v-model="form.text" class="bg-yellow-100 rounded-sm w-full py-1 border pl-1 focus:outline"
              placeholder="Add answer" type="text">
            <button :disabled="!form.text" @click="summitReply()" :class="form.text ? 'bg-red-primary text-white' : ''"
              class="px-3  py-1  rounded-sm">Post</button>
            <Icon @click="isReply = false" size="30" name="mdi:close" />
          </div>
          <div class="relative pb-4">
            <div v-if="comment?.replies?.length && !seeReply" @click="seeReply = true"
              class="opacity-60 flex gap-1.5 items-center">
              <button class="hover:underline">See {{ comment?.replies.length }} answers</button>
              <Icon size="22" name="iconamoon:arrow-down-2-duotone" />
            </div>
            <div v-if="seeReply">
              <div v-for="reply in comment?.replies" :key="reply.id" class="mb-2">
                <reply-view :reply="reply" :commentId="comment.id" />
              </div>
              <!-- <div v-if="comment?.replies?.length > 0" class="absolute bottom-0 right-0"> -->
              <!-- <button @click="seeReply = false" class="text-[14px] text-color-blur">hide</button> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import DeleteData from '~/components/button/DeleteData.vue';
import { userReplyCommentFormData as form } from '~/composables/user/post/reply/user-reply-comment-form-data.composable';
import { userReplyCommentSubmitComposable } from '~/composables/user/post/reply/user-reply-comment-submit.composable';
import type { CommentInterface } from '~/interface/entity/comment/comment.interface';
import { formatDateTimeProvider } from '~/provider/format/date-time/format-date-time.provider';
import { useUserStore } from '~/store/user';
import ReplyView from '../reply/ReplyView.vue';
export default defineComponent({
  components: { ReplyView, DeleteData },
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
    const summitReply = async () => {
      form.comment_id = props.comment.id
      await userReplyCommentSubmitComposable()
      isReply.value = false
    }

    watch(() => isReply, () => {

    })
    return { user, summitReply, isReply, form, seeReply, formatDateTimeProvider }
  }
})
</script>

<style scoped></style>