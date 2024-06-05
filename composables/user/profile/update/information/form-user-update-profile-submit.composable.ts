import { userUpdateProfileService } from "~/service/user/profile/update/form/user-update-profile.service";
import { formUserUpdateProfileData } from "./form-user-update-profile-data.composable";
import { useUserStore } from "~/store/user";
import { useUiStore } from "~/store/ui";
export const formUserUpdateProfileSubmitComposable = async () => {
  const response = await userUpdateProfileService(formUserUpdateProfileData);
  useUserStore().name = formUserUpdateProfileData.name;
  useUserStore().bio = formUserUpdateProfileData.bio;
  response.status === "success" ? useUiStore().closePopup() : "";
};
