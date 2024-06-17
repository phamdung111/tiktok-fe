<template>
  <div @click="goTo()" :style="avatarStyle">
    <img class="cursor-pointer rounded-full" :src="image" alt="">
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
    const avatarStyle = computed(() => {
      if (props.size) {
        return {
          width: `${props.size}px`,
          height: `${props.size}px`,
        };
      }
      return {};
    });
    return { goTo, avatarStyle }
  }
})
</script>
