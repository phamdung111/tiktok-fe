import type { AxiosResponse } from "axios";
import { http } from "~/utils/http/http";

export const userFavoritePostService = Object.freeze({
  favorite: async (postId: number): Promise<AxiosResponse> => {
    try {
      const response = await http().post("/api/favorite", {
        post_id: postId,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  unfavorite: async (postId: number): Promise<AxiosResponse> => {
    try {
      const response = await http().post("/api/unFavorite", {
        post_id: postId,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
});
