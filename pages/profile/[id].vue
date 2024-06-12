<template>
  <div>
    <nuxt-layout name="profile-layout">
      <template #content>
        <div class="h-full w-full ml-width-nav-menu-tablet lg:ml-width-nav-menu-laptop">
          <div class="px-[24px] py-[32px]">
            <div class="w-full">
              <information-user :information="isMyProfile ? user : people"
                :isMyProfile="isMyProfile"></information-user>
            </div>
          </div>
        </div>
        <popup-component></popup-component>
      </template>
    </nuxt-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import InformationUser from '~/components/profile/InformationUser.vue';
import PopupComponent from '~/components/popup/PopupComponent.vue'

import { usePeopleStore } from '~/store/people';
import { useUserStore } from '~/store/user';
import { peopleInitialDataComposable } from '~/composables/people/initial-data/people-initial-data.composable';

export default defineComponent({
  components: {
    InformationUser,
    PopupComponent
  },
  setup() {
    const route = useRoute()
    const people = usePeopleStore()
    const user = useUserStore()

    const isMyProfile = computed(() => {
      return Number(route.params.id) === user.id
    })
    onMounted(() => {
      peopleInitialDataComposable(Number(route.params.id))
    })
    return { people, isMyProfile, user }
  }
})
</script>

<style scoped></style>