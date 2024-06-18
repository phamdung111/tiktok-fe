<template>
  <nuxt-layout name="main-layout">
    <view-post />
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewPost from '~/components/post/view/ViewPost.vue'
import { postInitialDataComposable } from '~/composables/post/initial-data/post-initial-data.composable'
import { usePeopleStore } from '~/store/people'
import { peoplePostInitialDataComposable } from '~/composables/people/post/people-post-initial-data-composable'
export default defineComponent({
  components: { ViewPost },
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
