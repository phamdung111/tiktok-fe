<template>
  <div class="h-[calc(100vh-60px)]">
    <div class="flex justify-center h-full py-4 border-b gap-4 w-full">
      <div class="flex gap-4">
        <nuxt-link :to="`/profile/${post.user[0].id}`" class="basis-[50px]">
          <img class="rounded-full w-[50px]" :src="post.user[0].image" alt="">
        </nuxt-link>
        <div class="w-full h-full flex flex-col gap-2">
          <header-post :post="post"></header-post>
          <div class="h-full flex items-end">
            <video ref="video" @click="navigateTo(`/post/${post.id}`)"
              class="rounded-xl object-cover h-full py-2 max-w-[450px] md:max-w-[600px] ove" :src="post.video" muted
              autoplay loop controls></video>
            <div class="grid gap-4 ml-2">
              <div>
                <like-button :post="post" :size="26" :direction-vertical="true" />
              </div>
              <div>
                <button @click="navigateTo(`/post/${post.id}`)" class="grid items-center">
                  <div class="flex justify-center items-center bg-gray-200 w-[40px] h-[40px] rounded-full opacity-85">
                    <Icon name="mdi:chat" size="26" />
                  </div>
                  <div class="opacity-60 font-medium">
                    {{ totalComments }}
                  </div>
                </button>
              </div>
              <favorite-button :post="post" :size="26" :direction-vertical="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { PostResponseInterface } from '~/interface/response/post/post-response.interface';
import HeaderPost from './view/HeaderPost.vue';
import LikeButton from '../button/LikeButton.vue';
import FavoriteButton from '../button/FavoriteButton.vue';
import { useUserStore } from '~/store/user';
export default defineComponent({
  components: { HeaderPost, LikeButton, FavoriteButton },
  props: {
    post: {
      type: Object as PropType<PostResponseInterface>,
      default: null
    }
  },
  setup(props) {
    const user = useUserStore()
    const video = ref()

    const totalComments = computed(() => {
      let total = 0
      props.post.comments?.forEach(comment => {
        total += comment?.replies!.length
      })
      return total + props.post.comments?.length
    })

    return {
      video, totalComments,
    }
  }
})
</script>
