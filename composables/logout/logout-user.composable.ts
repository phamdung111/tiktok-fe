import { logoutAuthenticationService } from "~/service/authentication/logout-authentication.service";
import { useUserStore } from "~/store/user";
export const logoutUserComposable = async () => {
  const user = useUserStore();
  await logoutAuthenticationService.logout();
  user.resetUSer();
};
