<template>
    <div v-if="ui.isUploadPost" class="bg-red-primary-2 w-full flex justify-center pt-4 pb-6 rounded-lg">
        <div class="bg-white w-[90%] px-4">
            <h2 class="text-[30px] font-bold">Upload videos</h2>
            <h2 class="text-[20px] opacity-40">Post videos to your account</h2>
            <div>
                <div class="flex justify-between">
                    <h2>Note</h2>
                    {{ title.length }} / 2200
                </div>
                <error-message :is-display="validate.text.isFailed" :message="validate.text.message" />

                <input v-model="title" class="py-3 border w-full rounded-md focus:outline-none" type="text">
            </div>
            <div
                class="md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative">
                <div class=" h-full w-full">
                    <img class="absolute z-20 pointer-events-none" src="~/assets/images/mobile-case.png">
                    <img class="absolute right-4 bottom-6 z-20" width="90" src="~/assets/images/tiktok-logo-white.png">
                    <video
                        ref="videoRef" class="absolute rounded-xl object-cover z-10 p-[13px] w-full h-full" loop
                        muted autoplay :src="fileDisplay" />
                </div>
            </div>
            <div class=" flex gap-3 pb-2">
                <div class="h-[48px] flex items-center border rounded-sm">
                    <button class="w-[116px]" @click="clearVideo()">Cancel</button>
                </div>
                <div class="h-[48px] flex items-center border bg-red-primary rounded-sm">
                    <button class="w-[116px]" @click="uploadPost()">Post</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ErrorMessage from '../message/ErrorMessage.vue';
import { formUserUploadPostSubmitterComposable } from '~/composables/user/post/upload/form-user-upload-post-submitter.composable';
import { formUserUploadPostValidate as validate } from '~/composables/user/post/upload/form-user-upload-post-validation.composable';
import { useUiStore } from '~/store/ui';
import html2canvas from 'html2canvas';
export default defineComponent({
    name: 'FormUploadPost',
    components: { ErrorMessage },
    props: {
        fileData: {
            type: File,
            default: null
        },
    },
    setup(props) {
        const ui = useUiStore()
        const title = ref('')
        const fileDisplay = ref()
        const videoRef = ref<HTMLVideoElement | null>(null)
        const clearVideo = () => {
            ui.isUploadPost = false
            fileDisplay.value = ''
        }
        const uploadPost = async () => {
            const data = new FormData()
            data.append('video', props.fileData || '')
            data.append('text', title.value || '')
            if (videoRef.value)
                html2canvas(videoRef.value).then((canvas) => {
                    canvas.toBlob(async (blob) => {
                        data.append('image', blob!);
                        data.append('text', title.value || '');
                        await formUserUploadPostSubmitterComposable(data);
                    }, 'image/jpeg');
                });
        }
        onMounted(() => {
            fileDisplay.value = URL.createObjectURL(props.fileData)
        })
        watch(() => props.fileData, () => {
            fileDisplay.value = URL.createObjectURL(props.fileData)
        })
        watch(() => title.value.length, () => {
            title.value.length > 0 ? validate.text.isFailed = false : ''
        }, { immediate: true }
        )
        return {
            ui,
            title,
            fileDisplay,
            videoRef,
            validate,
            clearVideo,
            uploadPost,
        }
    }
})
</script>
