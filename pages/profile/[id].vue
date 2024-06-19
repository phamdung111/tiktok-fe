<template>
  <div>
    <nuxt-layout name="main-layout">
      <div class="px-[24px] py-[32px] w-full">
        <dir v-if="people.status === 200">
          <information-user :information="people" :is-my-profile="isMyProfile"/>
        </dir>
        <div v-else-if="people.status === 404">
          <not-found-base :icon="`bx:user`" :text="`This account can't be found!`" />
        </div>
        <div v-else>
          <notification-base />
        </div>
      </div>
      <popup-component/>
    </nuxt-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import InformationUser from '~/components/profile/InformationUser.vue';
import PopupComponent from '~/components/popup/PopupComponent.vue'
import NotFoundBase from '~/components/not-found/NotFoundBase.vue';
import NotificationBase from '~/components/message/NotificationBase.vue';
import { usePeopleStore } from '~/store/people';
import { useUserStore } from '~/store/user';
import { peopleInitialDataComposable } from '~/composables/people/initial-data/people-initial-data.composable';

export default defineComponent({
  components: {
    InformationUser,
    PopupComponent,
    NotFoundBase,
    NotificationBase
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
