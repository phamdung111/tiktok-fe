<template>
  <div class="flex justify-start mt-4">
    <button class="mr-5">
      <span class="font-semibold pr-2">{{ information.following.length }}</span>
      <span class="opacity-70 hover:underline font-medium">Following</span>
    </button>
    <button class="mr-5">
      <span class="font-semibold pr-2">{{ information.follower }}</span>
      <span class="opacity-70 hover:underline font-medium">Follower</span>
    </button>
    <button class="mr-5">
      <span class="font-semibold pr-2">0</span>
      <span class="opacity-70 font-medium">Prefer</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useUserStore } from '~/store/user';

export default defineComponent({
  name: 'InteractUser',
  props: {
    information: {
      type: Object as PropType<any>,
      default: null
    }
  },
  setup() {
    const user = useUserStore()

    return { user }
  }
})
</script>
