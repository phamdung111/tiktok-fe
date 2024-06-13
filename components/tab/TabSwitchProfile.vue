<template>
  <div @click="tabSwitch()"
    class="flex gap-1 items-center text-[18px] px-[32px] h-[44px] hover:border-b-2  font-medium">
    <Icon :name="tab.icon"></Icon>
    <button>{{ tab.value }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { TabSwitchProfileInterface } from '~/interface/ui/tab-switch/tab-switch-profile.interface';

export default defineComponent({
  name: 'TabSwitchProfile',
  props: {
    tab: {
      type: Object as PropType<TabSwitchProfileInterface>,
      default: null
    }
  },
  setup() {
    const tabSwitch = () => {

    }

    return { tabSwitch }
  }
})
</script>
