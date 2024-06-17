<template>
  <div v-if="search.users.length">
    <div v-for="user in search.users" :key="user.id" @click="navigateTo(`/profile/${user.id}`)"
      class="flex items-center hover:bg-bg-primary rounded-lg">
      <div class="m-4">
        <avatar-user :image="user.image" :size="60" :user-id="user.id" />
      </div>
      <div>
        <h4 class="text-[18px] font-bold text-text-color-primary">{{ user.name }}</h4>
        <div class="flex gap-1 text-[14px] font-normal text-text-color-blur">
          <h4 class="">{{ user.name }}</h4>
          <h4>-</h4>
          <h4 class="text-text-color-primary font-semibold">{{ user.follower }}</h4>
          <span>Follower</span>
        </div>
        <div class="mt-1 text-text-color-primary font-normal">{{ user.bio }}</div>
      </div>
    </div>
  </div>
  <div v-else>
    <not-found-base :icon="`fluent:emoji-sad-20-regular`" :text="`Not Result Found for ${searchContent} `" />
  </div>
</template>

<script lang="ts">
import AvatarUser from '~/components/button/AvatarUser.vue';
import NotFoundBase from '~/components/not-found/NotFoundBase.vue';
import { useSearchStore } from '~/store/search';
export default defineComponent({
  name: 'AccountSearch',
  components: {
    AvatarUser,
    NotFoundBase,
  },
  setup() {
    const search = useSearchStore()
    const route = useRoute()
    const searchContent = route.query.q
    return {
      searchContent,
      route,
      search
    }
  }
})
</script>
