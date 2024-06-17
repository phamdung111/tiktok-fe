<template>
  <div class="flex gap-10 mb-4">
    <div v-for="(tab, index) in tabs" :key="tab.value" @click="tabSwitch(index)"
      :class="index === tabDefault ? 'border-b-[2px] border-b-text-color-primary text-text-color-primary' : 'text-text-color-blur'">
      {{ tab.value }}
    </div>
  </div>
  <component :is="tabs[currentTab].component"></component>

</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { TabSwitchInterface } from '~/interface/ui/tab-switch/tab-switch.interface';

export default defineComponent({
  name: 'TabSwitch',
  components: {
  },
  props: {
    tabs: {
      type: Object as PropType<TabSwitchInterface[]>,
      default: []
    },
    tabDefault: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const currentTab = ref(props.tabDefault)
    const tabSwitch = (index: number) => {
      currentTab.value = index
      emit('tab-selected', props.tabs[index])
    }
    return {
      tabSwitch,
      currentTab
    }
  }
})
</script>

<style scoped></style>