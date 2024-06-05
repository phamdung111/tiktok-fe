<template>
  <div v-if="user.id != idUserCreator" class="hover:cursor-pointer">
    <div @click="isFollow ? unFollowCreator() : followCreator()"
      :class="isFollow ? 'border border-gray-300' : 'text-red-primary border border-red-primary'"
      class=" font-bold px-5 py-2 rounded-sm hover:bg-red-primary-2 max-w-[100px] my-2">
      {{ isFollow ? 'Following' : 'Follow' }}
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userFollowPeopleSubmitter } from '~/composables/user/people/follow/user-follow-people-submitter.composable'
import { userUnFollowPeopleSubmitterComposable } from '~/composables/user/people/follow/user-un-follow-people-submitter.composable'
import { useUserStore } from '~/store/user'
export default defineComponent({
  name: 'FollowButton',
  props: {
    idUserCreator: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const user = useUserStore()
    const followCreator = async () => {
      await userFollowPeopleSubmitter(props.idUserCreator)
    }
    const unFollowCreator = () => {
      userUnFollowPeopleSubmitterComposable(props.idUserCreator)

    }
    const isFollow = computed(() => {
      const index = user.following.findIndex(item => item.idUserCreator === props.idUserCreator)

      return index >= 0 ? true : false
    })
    return { followCreator, unFollowCreator, isFollow, user }
  }
})
</script>

<style scoped></style>