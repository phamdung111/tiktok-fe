import type { FormUserUpdateProfileInterface } from "~/interface/request/user/profile/update/form-user-update-profile.interface";
import { http } from "~/utils/http/http";

export const userUpdateProfileService = async (payload: FormUserUpdateProfileInterface) => {
  try {
    const response = await http().post("/api/updateUser", payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
