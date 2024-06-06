<template>
  <div class="grid md:flex justify-between">
    <div>
      <div class="flex gap-2 items-end">
        <h3 class="text-xl font-medium text-black hover:underline">{{ post.user[0].name }}</h3>
        <h4>{{ post.user[0].name }}</h4>
      </div>
      <div>
        <h3>{{ post.text }}</h3>
        <p>
          #music #tamtrang #xuhuong #miztien
        </p>
      </div>
      <div class="flex items-center gap-1 hover:underline">
        <Icon name="mdi:music" size="16" />
        <p class="font-bold">Original sound - AWESOME</p>
        <Icon name="mdi:heart" />
      </div>
    </div>
    <follow-button :idUserCreator="post.user[0].id"></follow-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import FollowButton from '../../button/FollowButton.vue';

export default defineComponent({
  name: 'HeaderPost',
  components: {
    FollowButton

  },
  props: {
    post: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    }
  },
  setup() {


    return {}
  }
})
</script>

<style scoped></style>