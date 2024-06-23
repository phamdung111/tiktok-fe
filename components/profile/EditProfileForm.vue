<template>
  <div v-if="true" class="fixed w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div v-if="!uploadedImage" class="max-w-[700px] max-h-[700px] w-[600px] bg-white rounded-md border-b">
      <div class="w-full px-3">
        <div class="flex justify-between items-end py-4 border-b">
          <h1 class="text-[24px]">Edit profile</h1>
          <Icon class="opacity-50" size="30" name="mdi:close" @click="closePopup" />
        </div>
        <div class="flex border-b py-3">
          <div class="basis-1/4">Profile Photo</div>
          <div class="basis-3/4 flex justify-center">
            <label for="change-avatar" class="relative">
              <input id="change-avatar" ref="fileInput" type="file" class="hidden" @change="updateAvatar">
              <div class="w-[100px] h-[100px] ">
                <img class="w-full h-full rounded-full" :src="user.image" alt="">
              </div>
              <Icon
                class="absolute rounded-full border cursor-pointer bottom-2 right-0 bg-white border-gray-400 p-1"
                size="30" color="gray" name="solar:pen-2-linear" />
            </label>
          </div>
        </div>
        <div class="flex items-start border-b py-3">
          <h2 class="basis-1/4">Name</h2>
          <div class="basis-3/4">
            <input
              v-model="form.name"
              class="h-[38px] px-[12px] py-[7px] w-full rounded-sm bg-red-primary-2 placeholder-gray-700 focus:outline-none focus:visible"
              type="text">
            <span class="text-[12px] text-gray-500">You can only change your nickname every 7 days.</span>
          </div>
        </div>
        <div class="flex items-start border-b py-3">
          <h2 class="basis-1/4">Story</h2>
          <div class="basis-3/4">
            <textarea
              v-model="form.bio" maxlength="80"
              class="h-[100px] px-[12px] py-[7px] w-full focus:outline-none rounded-sm bg-red-primary-2 placeholder-gray-500"
              type="text"/>
            <span class="text-[12px] text-gray-500">{{ form.bio?.length }}/80</span>
          </div>
        </div>
      </div>
      <div class="h-[86px] flex justify-end items-center gap-5 px-8">
        <button class="h-[36px] px-4 border border-red-primary-2" @click="closePopup">Cancel</button>
        <button
          class="h-[36px] px-4 border border-red-primary-2 " :class="isUpdateProfile ? 'bg-red-primary text-white' : 'cursor-not-allowed text-gray-400'"
          @click="isUpdateProfile ? updateUser() : ''">Save</button>
      </div>
    </div>
    <div v-else class="aspect-square w-[500px] lg:w-[700px] xl:w-[1000px]">
      <div class="w-full h-full">
        <cropper ref="cropper" class="cropper" :stencil-component="CircleStencil" :src="cropperImageLink" />
      </div>
      <dir class="w-full p-0 m-0">
        <div class="w-full h-[86px] flex justify-end items-center gap-5 px-8 bg-white">
          <button
            class="h-[36px] px-4 border border-red-primary-2 hover:bg-gray-100"
            @click="uploadedImage = false">Cancel</button>
          <button
            class="h-[36px] px-4 border border-red-primary-2 bg-red-primary text-white rounded-sm"
            @click="applyNewAvatar()">Apply</button>
        </div>
      </dir>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '~/store/user'
import { useUiStore } from '~/store/ui';
import { Cropper, CircleStencil } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
import { formUserUpdateProfileSubmitComposable } from '~/composables/user/profile/update/information/form-user-update-profile-submit.composable';
import { formUserUpdateProfileData as form } from '~/composables/user/profile/update/information/form-user-update-profile-data.composable';
import { formUserUpdateAvatarSubmit } from '~/composables/user/profile/update/avatar/user-update-avatar-submit.composable';
import { authenticationService } from '~/service/authentication/authentication.service';
export default defineComponent({
  name: 'EditProfileForm',
  components: {
    Cropper,
  },
  setup() {
    const user = useUserStore()
    const ui = useUiStore()
    const fileInput = ref<HTMLInputElement | null> (null)
    const isUpdateProfile = ref(false)
    const cropperImageLink = ref('')
    const cropper = ref()
    const closePopup = () => {
      ui.closePopup()
    }
    const uploadedImage = ref(false)
    const updateAvatar = () => {
      cropperImageLink.value = URL.createObjectURL(fileInput.value!.files![0])
      uploadedImage.value = true
    }
    const applyNewAvatar = async () => {
      const { coordinates } = cropper.value.getResult()
      console.log(coordinates);
      
      const image = new Image()
      image.src = cropperImageLink.value
      const canvas = document.createElement('canvas')
      canvas.width = coordinates.width
      canvas.height = coordinates.height
      const ctx = canvas?.getContext('2d')
      ctx?.drawImage(image, coordinates.left, coordinates.top, coordinates.width, coordinates.height, 0, 0,   coordinates.width, coordinates.height)
      
      canvas.toBlob(async (blob) => {
        const data = new FormData()
        data.append('image',blob!)
        try {
        await formUserUpdateAvatarSubmit(data)
        uploadedImage.value = false
        await authenticationService.getUserAuthentication()
      } catch (error) {
        console.log(error);
      }
      })
      
    }
    const updateUser = async () => {
      await formUserUpdateProfileSubmitComposable()
    }

    onMounted(() => {
      form.name = user.name
      form.bio = user.bio
    })
    watch(() => form.name, () => {
      form.name != user.name && form.name.length > 0 ? isUpdateProfile.value = true : ''
    })
    watch(() => form.bio, () => {
      form.bio != user.bio && form.bio!.length <= 80 ? isUpdateProfile.value = true : ''
    })
    return {
      user,
      form,
      fileInput,
      isUpdateProfile,
      cropper,
      uploadedImage,
      cropperImageLink,
      updateAvatar,
      applyNewAvatar,
      updateUser,
      closePopup,
      CircleStencil,

    }
  }
})
</script>
<style lang="css" scoped>
.cropper {
  height: 100%;
}
</style>
