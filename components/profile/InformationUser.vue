<template>
  <div id="info" class="flex justify-start">
    <div class="w-[116px] h-[116px] object-cover">
      <img class="rounded-full shadow-md w-full h-full" width="116" height="116" :src="information.image" alt="">
    </div>
    <div class="grid items-center ml-5">
      <h2 class="text-[32px] mb-1 font-bold">{{ information.name }}</h2>
      <h2 class="text-[18px] font-medium pb-2">{{ information.name }}</h2>
      <button
        v-if="isMyProfile" class="flex items-center gap-2 px-2 min-h-[36px] border cursor-pointer hover:bg-gray-100"
        @click="openEditProfileForm">
        <Icon
          name="streamline:interface-user-edit-actions-close-edit-geometric-human-pencil-person-single-up-user-write" />
        Edit profile
      </button>
      <follow-button v-else :id-user-creator="information.id"/>
    </div>
  </div>
  <interact-user :information="information"/>
  <div class="pt-2">
    <h2 class="opacity-75 font-normal">{{ information.bio ? information.bio : 'No biography yet.' }}</h2>
  </div>
  <div class="mt-6">
    <tab-switch :tabs="tabs" :tab-default="tabDefault" @tab-selected="tabSelected"/>
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
import TabSwitch from '../tab/TabSwitch.vue';
import FollowButton from '../button/FollowButton.vue';
import type { TabSwitchInterface } from '~/interface/ui/tab-switch/tab-switch.interface';
import type { PeopleResponseInterface } from '~/interface/response/people/people-response.interface';
export default defineComponent({
  name: 'InformationUser',
  components: {
    InteractUser,
    TabSwitch,
    FollowButton
  },
  props: {
    information: {
      type: Object as PropType<PeopleResponseInterface>,
      default: null
    },
  },
  setup() {
    const user = useUserStore()
    const ui = useUiStore()
    const route = useRoute()
    const currentTab = ref(0)
    const tabDefault = ref(0)
    const isMyProfile = computed(() => {
      return Number(route.params.id) === user.id
    })
    const tabs: TabSwitchInterface[] = [
      {
        value: 'Video',
        icon: '',
        component: ProfileVideo
      },
      {
        value: 'Favorite',
        icon: '',
        component: ProfileFavorite
      },
      {
        value: 'Liked',
        icon: '',
        component: ProfileLiked
      }
    ]
    const openEditProfileForm = () => {
      ui.openPopup(EditProfileForm)
    }
    const tabSelected = (tabSelected: TabSwitchInterface) => {
      const tabIndex = tabs.findIndex(tab => tab.value === tabSelected.value)
      currentTab.value = tabIndex
      tabDefault.value = tabIndex
    }
    return {
      user,
      tabs,
      currentTab,
      route,
      isMyProfile,
      tabDefault,
      openEditProfileForm,
      tabSelected
    }
  }
})
</script>
