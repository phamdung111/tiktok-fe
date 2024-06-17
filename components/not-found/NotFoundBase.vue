<template>
  <div class="flex justify-center items-center pt-[40px] w-screen">
    <div class="text-center">
      <div class="text-text-color-blur a">
        <Icon :name="icon" size="96" />
      </div>
      <div class="grid">
        <h4 class="text-text-color-primary text-[24px] font-bold">{{ text }}</h4>
        <div>
          <span>Are you looking for videos? Try browsing our trending authors, hashtags and sounds.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFoundBase',
  components: {},
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup() {

    return {}
  }
})
</script>
