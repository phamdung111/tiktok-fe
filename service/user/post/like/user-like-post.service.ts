import type { AxiosResponse } from "axios";
import { http } from "~/utils/http/http";
export const userLikePostService = Object.freeze({
  like: async (post_id: number): Promise<AxiosResponse> => {
    try {
      const response = await http().post("api/like", {
        post_id: post_id,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  unLike: async (postId: number): Promise<AxiosResponse> => {
    try {
      const response = await http().post("/api/unLike", {
        post_id: postId,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
});
