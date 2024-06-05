import type { FormUserUpdateProfileInterface } from "~/interface/request/user/profile/update/form-user-update-profile.interface";
import { useUserStore } from "~/store/user";
export const formUserUpdateProfileData = reactive<FormUserUpdateProfileInterface>({
  name: "",
  bio: "",
});
