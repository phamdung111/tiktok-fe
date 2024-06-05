import type { AxiosPromise } from "axios";
import { http } from "~/utils/http/http";

export const userDeletePostService = Object.freeze({
  delete: async (postId: number): Promise<AxiosPromise> => {
    try {
      const response = await http().delete(`/api/deletePost/${postId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
});
