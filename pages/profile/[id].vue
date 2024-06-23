<template>
  <div>
    <nuxt-layout name="main-layout">
      <div class="px-[24px] py-[32px] w-full">
        <dir v-if="people">
          <information-user :information="people"/>
        </dir>
        <div v-else>
          <not-found-base :icon="`bx:user`" :text="`This account can't be found!`" />
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
import { usePeopleStore } from '~/store/people';
import { useUserStore } from '~/store/user';
import { peopleInitialDataComposable } from '~/composables/people/initial-data/people-initial-data.composable';

export default defineComponent({
  components: {
    InformationUser,
    PopupComponent,
    NotFoundBase,
  },
  setup() {
    const route = useRoute()
    const people = usePeopleStore()
    const user = useUserStore()
    onMounted(() => {
      peopleInitialDataComposable(Number(route.params.id))
    })
    return { people, user }
  }
})
</script>
