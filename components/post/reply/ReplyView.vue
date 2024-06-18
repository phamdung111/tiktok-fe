<template>
  <div class="flex gap-1 justify-between">
    <div class="flex gap-2">
      <div class=" w-[30px] h-[30px] hover:cursor-pointer">
        <avatar-user :image="reply?.user[0].image" :size="24" :user-id="reply.user[0].id" />
      </div>
      <div>
        <p class="font-semibold text-[14px]" @click="`/profile/${reply.user[0].id}`">{{ reply.user[0].name }}</p>
        <p class="text-text-color-primary2 mb-[6px]"> {{ reply.text }}</p>
        <p class="text-[14px] text-text-color-blur">{{ formatDateTimeProvider(new Date(reply.time)) }}</p>
      </div>
    </div>
    <delete-data :user-own="reply?.user[0].id" type="reply" :id-data="reply.id"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { ReplyInterface } from '../../../interface/entity/reply/reply.interface';
import { useUserStore } from '~/store/user';
import DeleteData from '~/components/button/DeleteData.vue';
import AvatarUser from '~/components/button/AvatarUser.vue';
import { formatDateTimeProvider } from '~/provider/format/date-time/format-date-time.provider';
export default defineComponent({
  name: 'ReplyView',
  components: {
    DeleteData,
    AvatarUser
  },
  props: {
    reply: {
      type: Object as PropType<ReplyInterface>,
      default: null
    },
    commentId: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const user = useUserStore()
    const isRemoveReply = ref(false)

    return {
      user,
      isRemoveReply,
      formatDateTimeProvider
    }
  }
})
</script>
