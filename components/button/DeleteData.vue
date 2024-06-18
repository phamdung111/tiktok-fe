<template>
  <div class="absolute right-1">
    <div v-if="userOwn === user.id" class="relative" @mouseenter="show = true" @mouseleave="show = false">
      <Icon name="ph:dots-three" size="24" />
      <div
        v-if="show" class="flex items-center gap-1 absolute bg-white border px-4 py-2 rounded-sm hover:text-red-primary right-0"
        @click="deleteData">
        <Icon name="material-symbols:delete-outline" />
        <button>Delete</button>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
export default defineComponent({
  name: "DeleteDta",
  props: {
    userOwn: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: ''
    },
    idData: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const user = useUserStore()
    const ui = useUiStore()
    const show = ref(false)
    const deleteData = () => {
      const data = {
        itemDelete: props.type,
        idItemDelete: props.idData,
      }
      ui.openNotificationDeleteData(data)
    }
    return {
      user,
      show,
      deleteData
    }
  }
})
</script>
