<template>
  <div v-if="search.posts.length" class="grid grid-cols-2 lg:grid-cols-3 gap-3">
    <div v-for="post in search.posts" :key="post.id" class="w-full">
      <div class="relative">
        <video-base :video-url="post.video" :id="post.id" />
        <h5 class="absolute bottom-2 left-2 font-medium text-white">{{ formatDateTimeProvider(new Date(post.created_at))
          }}
        </h5>
      </div>
      <div class="px-2 pt-1 py-4 font-normal text-text-color-primary text-[16px]">
        <h4>{{ post.text }}</h4>
        <div class="flex gap-1 items-center">
          <avatar-user :image="post.user[0].image" :size="30" :user-id="post.user[0].id"></avatar-user>
          <h4>{{ post.user[0].name }}</h4>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <not-found-base :icon="`fluent:emoji-sad-20-regular`" :text="`Not Result Found for ${searchContent} `" />
  </div>
</template>

<script lang="ts">
import VideoControl from '~/components/video/VideoControl.vue';
import AvatarUser from '~/components/button/AvatarUser.vue';
import NotFoundBase from '~/components/not-found/NotFoundBase.vue';
import VideoBase from '~/components/video/VideoBase.vue';
import { useSearchStore } from '~/store/search';
import { formatDateTimeProvider } from '~/provider/format/date-time/format-date-time.provider';
export default defineComponent({
  name: 'PostSearch',
  components: {
    VideoControl,
    AvatarUser,
    NotFoundBase,
    VideoBase
  },
  setup() {
    const search = useSearchStore()
    const route = useRoute()
    const searchContent = route.query.q

    return {
      search,
      searchContent,
      formatDateTimeProvider,
    }
  }
})
</script>
