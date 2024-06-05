import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import { http } from "~/utils/http/http";

export const postService = Object.freeze({
  allPost: async (): Promise<PostResponseInterface[]> => {
    try {
      const response = await http().get("/api/getAllPosts");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  postById: async (postID: number): Promise<PostResponseInterface | null> => {
    try {
      const response = await http().get(`/api/post/${postID}`);
      return response.data[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});
