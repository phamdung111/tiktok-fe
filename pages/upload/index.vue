<template>
  <nuxt-layout name="upload-layout">
    <div v-if="isUploading"
      class="fixed flex items-center justify-center top-0 left-0 w-full bg-black z-notification bg-opacity-50">
      <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#FFFFFF" />
    </div>
    <div class="w-full h-[calc(100%-60px)] bg-color-bg-creator flex items-center"
      :class="!ui.isUploadPost ? 'justify-center' : 'justify-start'">
      <div v-if="!ui.isUploadPost" class="w-full flex justify-center">
        <input @change="onChange" type="file" class="hidden" id="file-upload" accept="video/*">
        <label for="file-upload" class="w-[90%] bg-white md:p-10 max-w-[1000px]">
          <div @drop.prevent="drop" class="bg-color-bg-creator">
            <div class="w-full h-full py-12 grid justify-center items-center text-center border-[3px] border-dashed">
              <div class="w-full md:w-[400px]">
                <div class="flex justify-center">
                  <Icon name="mdi:cloud-upload" size="40" class="opacity-50" />
                </div>
                <div>
                  <h3>Select a video to upload</h3>
                  <h3 class="opacity-60">Or drag and drop files</h3>
                </div>
                <div>
                  <div>

                  </div>
                  <p class="opacity-50">MP4 or WebM</p>
                  <p class="opacity-50">Resolution 720x1280 or higher</p>
                  <p class="text-red-primary">10 minutes maximum</p>
                  <p class="opacity-50">Less than 10 GB</p>
                  <div
                    class="w-full min-w-[96px] bg-red-primary text-white px-[15px] mt-[32px] rounded-sm font-semibold">
                    <div class="h-[36px] flex items-center justify-center">Select file</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </label>
      </div>

      <form-upload-post v-if="fileData" :fileData="fileData"></form-upload-post>
    </div>
  </nuxt-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FormUploadPost from '~/components/form/FormUploadPost.vue'
import UploadLayout from '~/layouts/UploadLayout.vue'
import { useUiStore } from '~/store/ui'
definePageMeta({ middleware: 'auth', name: 'profile' })

export default defineComponent({
  components: { UploadLayout, FormUploadPost },
  setup() {
    const ui = useUiStore()
    const isUploading = ref(false)
    const fileData = ref(null)

    const fileDisplay = ref()

    const drop = (event: any) => {
      // fileDisplay.value = event.target.files[0]
      // file.value = e.dataTransfer.files[0];
      // fileData.value = e.dataTransfer.files[0]
      fileDisplay.value = URL.createObjectURL(event.dataTransfer.files[0])
      // notes.value = e.dataTransfer.files[0].name
    }
    const onChange = (event: any) => {
      fileData.value = event.target.files[0]
      fileDisplay.value = URL.createObjectURL(event.target.files[0])
      ui.isUploadPost = true
    }

    return { drop, onChange, fileData, fileDisplay, ui, isUploading }
  }
})
</script>
