<template>
  <div>
    <top-nav></top-nav>
    <div class="h-[calc(100vh-60px)] mt-[60px]">
      <post-layout>
        <view-post />
      </post-layout>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNav from '~/components/dashboard/TopNav.vue'
import ViewPost from '~/components/post/view/ViewPost.vue'
import PostLayout from '~/layouts/PostLayout.vue'
import { postInitialDataComposable } from '~/composables/post/initial-data/post-initial-data.composable'
import { usePeopleStore } from '~/store/people'
import { peoplePostInitialDataComposable } from '~/composables/people/post/people-post-initial-data-composable'
export default defineComponent({
  components: { TopNav, PostLayout, ViewPost },
  setup() {
    const route = useRoute()
    const people = usePeopleStore()
    onMounted(async () => {
      people.$state.isWatching ? await peoplePostInitialDataComposable(Number(route.params.id)) : await postInitialDataComposable(Number(route.params.id))
    })

    return {}
  }

})
</script>

<style scoped></style>