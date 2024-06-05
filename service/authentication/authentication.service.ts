import { http } from "~/utils/http/http";
import { useUserStore } from "~/store/user";
import { useUiStore } from "~/store/ui";
export const authenticationService = Object.freeze({
  getToken: async () => {
    try {
      await http().get("sanctum/csrf-cookie");
    } catch (error) {
      console.log(error);
    }
  },
  getUserAuthentication: async () => {
    try {
      const response = await http().post("api/logged-in-user");
      useUserStore().setUser(response.data[0]);
      useUiStore().isOpenOverlay = false;
    } catch (error) {}
  },
});
