<template>
  <nuxt-layout name="main-layout">
    <view-post />
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewPost from '~/components/post/view/ViewPost.vue'

export default defineComponent({
  components: { ViewPost },
  setup() {
    return {}
  }

})
</script>
