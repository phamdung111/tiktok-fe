<template>
  <nuxt-layout name="main-layout">
    <view-search />
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ViewSearch from '~/components/search/ViewSearch.vue';
export default defineComponent({
  components: {
    ViewSearch
  },
  setup() {
    return {}
  }
})
</script>
