import { userUpdateAvatarService } from "../../../../../service/user/profile/update/avatar/user-update-avatar.service";
export const formUserUpdateAvatarSubmit = async (payload: FormData) => {
  await userUpdateAvatarService(payload);
};
