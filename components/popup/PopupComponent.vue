<template>
  <transition name="zoomIn">
    <div v-if="isDisplayPopup">
      <div @click.self="closePopup">
        <component :is="componentPopup"></component>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUiStore } from '~/store/ui';
export default defineComponent({
  name: 'PopupComponent',
  setup() {
    const ui = useUiStore()
    const componentPopup = computed(() => { return ui.popup.component })
    const isDisplayPopup = computed(() => { return ui.popup.isDisplayPopup })

    const closePopup = () => {
      ui.closePopup()
    }
    return { componentPopup, isDisplayPopup, closePopup }
  }
})
</script>

<style scoped></style>