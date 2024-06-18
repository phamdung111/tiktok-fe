<template>
  <div
    class="flex gap-1 items-center text-[18px] px-[32px] h-[44px] hover:border-b-2  font-medium"
    @click="tabSwitch()">
    <Icon :name="tab.icon"/>
    <button>{{ tab.value }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { TabSwitchInterface } from '~/interface/ui/tab-switch/tab-switch.interface';

export default defineComponent({
  name: 'TabSwitchProfile',
  props: {
    tab: {
      type: Object as PropType<TabSwitchInterface>,
      default: null
    }
  },
  setup() {
    const tabSwitch = () => {
    }
    return {
      tabSwitch
    }
  }
})
</script>
