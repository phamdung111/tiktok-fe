<template>
  <div class="p-4 lg:flex justify-center">
    <div class="pt-2 border-b h-[42px] lg:w-[800px] text-text-color-primary2 px-2 font-medium">
      <tab-switch :tabs="tabs" :tab-default="tabDefault" @tab-selected="tabSelected"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TabSwitch from '../tab/TabSwitch.vue';
import PostSearch from './post/PostSearch.vue';
import AccountSearch from './account/AccountSearch.vue';
import { searchDataComposable } from '~/composables/search/search-data-composable';
import type { TabSwitchInterface } from '~/interface/ui/tab-switch/tab-switch.interface';
export default defineComponent({
  name: 'ViewSearch',
  components: {
    TabSwitch,
  },
  setup() {
    const route = useRoute()
    const searchValue = route.query.q
    const tabDefault = ref(0)
    const currentTab = ref(0)
    const tabs: TabSwitchInterface[] = [{
      value: "Video",
      icon: '',
      component: PostSearch
    }, {
      value: "Account",
      icon: '',
      component: AccountSearch
    }]
    const tabSelected = (tabSelected: TabSwitchInterface) => {
      const tabIndex = tabs.findIndex(tab => tab.value === tabSelected.value)
      currentTab.value = tabIndex
      tabDefault.value = tabIndex
    }
    onMounted(async () => {
      await searchDataComposable(String(searchValue))
    })

    return {
      searchValue,
      tabs,
      currentTab,
      tabDefault,
      tabSelected
    }
  }
})
</script>
