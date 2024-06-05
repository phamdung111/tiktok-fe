<template>

  <div id="info" class="flex justify-start">
    <div class="w-[116px] h-[116px] object-cover">
      <img class="rounded-full shadow-md w-full h-full" width="116" height="116" :src="information.image" alt="">
    </div>
    <div class="grid items-center ml-5">
      <h2 class="text-[32px] mb-1 font-bold">{{ information.name }}</h2>
      <h2 class="text-[18px] font-medium pb-2">{{ information.name }}</h2>
      <button v-if="isMyProfile" @click="openEditProfileForm"
        class="flex items-center gap-2 px-2 min-h-[36px] border cursor-pointer hover:bg-gray-100">
        <Icon
          name="streamline:interface-user-edit-actions-close-edit-geometric-human-pencil-person-single-up-user-write" />
        Edit profile
      </button>
      <follow-button v-else :idUserCreator="information.id"></follow-button>
    </div>
  </div>
  <interact-user :information="information"></interact-user>
  <div class="pt-2">
    <h2 class="opacity-75 font-normal">{{ information.bio ? information.bio : 'No biography yet.' }}</h2>
  </div>
  <div class="flex mt-6">
    <div v-for="(tab, index) in (isMyProfile ? tabsMyProfile : tabsDefault)" :key="index">
      <tab-switch-profile @click="currentTab = index" :tab="tab"
        :class="currentTab === index ? 'border-black border-b-2' : ''"></tab-switch-profile>
    </div>
  </div>
  <div class="w-full">
    <component :is="`Profile${tabsMyProfile[currentTab].value}`" :information="information" :isMyProfile="isMyProfile">
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useUserStore } from '~/store/user';
import { useUiStore } from '~/store/ui';
import ProfileVideo from './ProfileVideo.vue';
import ProfileFavorite from './ProfileFavorite.vue';
import ProfileLiked from './ProfileLiked.vue';
import InteractUser from './InteractUser.vue';
import EditProfileForm from './EditProfileForm.vue';
import TabSwitchProfile from '../tab/TabSwitchProfile.vue';
import FollowButton from '../button/FollowButton.vue';
import type { TabSwitchProfileInterface } from '~/interface/ui/tab-switch/tab-switch-profile.interface';
import type { PeopleResponseInterface } from '~/interface/response/people/people-response.inteface';
import type { UserStoreStateInterface } from '~/interface/store/user/user-store-state.interface';
export default defineComponent({
  components: {
    ProfileVideo,
    InteractUser,
    EditProfileForm,
    TabSwitchProfile,
    ProfileFavorite,
    ProfileLiked,
    FollowButton
  },
  name: 'InformationUser',
  props: {
    information: {
      type: Object as PropType<PeopleResponseInterface | UserStoreStateInterface>,
      default: null
    },
    isMyProfile: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const user = useUserStore()
    const ui = useUiStore()
    const route = useRoute()
    const currentTab = ref(0)
    const tabsMyProfile: TabSwitchProfileInterface[] = [
      {
        value: 'Video',
        icon: ''
      },
      {
        value: 'Favorite',
        icon: ''
      },
      {
        value: 'Liked',
        icon: ''
      }
    ]
    const tabsDefault: TabSwitchProfileInterface[] = [
      {
        value: 'Video',
        icon: ''
      }
    ]
    const openEditProfileForm = () => {
      ui.openPopup(EditProfileForm)
    }
    return { user, openEditProfileForm, tabsMyProfile, currentTab, route, tabsDefault }
  }
})
</script>