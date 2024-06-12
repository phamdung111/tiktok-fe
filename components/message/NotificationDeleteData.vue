<template>
  <div v-if="ui.notificationDeleteData?.length"
    class="fixed top-0 right-0 z-notification flex justify-center items-center w-full h-full bg-black bg-opacity-50">
    <div class="rounded-lg bg-white w-[310px]">
      <div class="px-[24px] py-[28px] text-[24px] font-bold text-center">
        Are you sure you want to delete this {{ ui.notificationDeleteData[0].itemDelete }}?
      </div>
      <div>
        <div class="flex items-center h-[48px] text-center font-normal border-t">
          <span @click="confirmDeleteData()" class="text-center w-full">Erase</span>
        </div>
        <div class="flex items-center h-[48px] text-center font-normal border-t ">
          <span @click="ui.closeNotificationDeleteData()" class="text-center w-full opacity-35">Cancel</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUiStore } from '~/store/ui';
import { deleteDataProcessor } from '~/processor/delete-data/delete-data.processor';

export default defineComponent({
  name: 'NotificationDeleteData',
  setup() {
    const ui = useUiStore()
    const confirmDeleteData = () => {
      deleteDataProcessor(ui.notificationDeleteData![0].itemDelete, ui.notificationDeleteData![0].idItemDelete)
    }
    return { ui, confirmDeleteData }
  }
})
</script>
