import { useUserStore } from "~/store/user";
import { useUiStore } from "~/store/ui";
export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  const uiStore = useUiStore();
  if (to.path !== `/` && !userStore.id) {
    uiStore.isOpenOverlay = true;
    return navigateTo("/");
  }
});
