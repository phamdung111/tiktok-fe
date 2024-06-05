import { text } from "stream/consumers";
import type { UserUploadPostRequestInterface } from "~/interface/request/user/post/upload/user-upload-post-request.interface";
import { http } from "~/utils/http/http";

export const userUploadPostService = Object.freeze({
  uploadPost: async (payload: FormData) => {
    try {
      await http().post("/api/uploadPost", payload);
    } catch (error) {
      console.log(error);
    }
  },
});
