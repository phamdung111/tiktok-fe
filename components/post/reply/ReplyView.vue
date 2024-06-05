<template>
  <div class="flex gap-1 justify-between">
    <div class="flex gap-2">
      <div @click="`/profile/${reply?.user[0].id}`" class=" w-[30px] h-[30px] hover:cursor-pointer">
        <img class="rounded-full" :src="reply?.user[0].image" alt="">
      </div>
      <div>
        <p @click="`/profile/${reply.user[0].id}`" class="hover:cursor-pointer">{{ reply.user[0].name }}</p>
        <p class="opacity-75"> {{ reply.text }}</p>
        <p class="text-[14px] text-color-blur">{{ formatDateTimeProvider(new Date(reply.time)) }}</p>
      </div>
    </div>
    <delete-data :userOwn="reply?.user[0].id" type="reply" :idData="reply.id"></delete-data>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { ReplyInterface } from '../../../interface/entity/reply/reply.interface';
import { useUserStore } from '~/store/user';
import DeleteData from '~/components/button/DeleteData.vue';
import { formatDateTimeProvider } from '~/provider/format/date-time/format-date-time.provider';
export default defineComponent({
  components: { DeleteData },
  name: 'ReplyView',
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
  setup(props) {
    const user = useUserStore()
    const isRemoveReply = ref(false)

    return { user, isRemoveReply, formatDateTimeProvider }
  }
})
</script>

<style scoped></style>