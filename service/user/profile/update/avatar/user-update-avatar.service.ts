import { http } from "~/utils/http/http";

export const userUpdateAvatarService = async (payload: FormData) => {
  try {
    await http().post("/api/update-user-image", payload);
  } catch (error) {
    console.log(error);
  }
};
