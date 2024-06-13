<template>
  <div @click="goTo()" class="w-full">
    <img class="cursor-pointer rounded-full" :class="`w-[${size}px] h-[${size}px]`" :src="image" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AvatarUser',
  props: {
    image: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 0
    },
    userId: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const goTo = () => {
      props.userId !== 0 ? navigateTo(`/profile/${props.userId}`) : ''
    }
    return { goTo }
  }
})
</script>
