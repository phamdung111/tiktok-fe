<template>
  <div v-if="user.id != idUserCreator" @click="isFollow ? unFollowCreator() : followCreator()"
    class="hover:cursor-pointer">
    <div v-if="!miniSize"
      :class="isFollow ? 'border border-gray-300' : 'text-white bg-red-primary border border-red-primary'"
      class=" font-bold px-5 py-2 rounded-sm hover:opacity-90 max-w-[100px] my-2">
      {{ isFollow ? 'Following' : 'Follow' }}
    </div>
    <div v-else
      class="w-[22px] h-[22px] absolute -bottom-2 right-1/4 bg-red-primary rounded-full flex justify-end items-center">
      <Icon v-if="!isFollow" name="mdi:plus" size="20" color="white"></Icon>
      <Icon v-else name="ion:checkmark" size="20" color="white"></Icon>

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
    },
    miniSize: {
      type: Boolean,
      default: false
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