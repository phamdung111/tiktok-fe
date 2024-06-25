import { POST } from "~/constant/post/post.constant";
import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import { http } from "~/utils/http/http";

export const postService = Object.freeze({
  posts: async (offset: number): Promise<PostResponseInterface[]> => {
    try {
      const response = await http().get(`/api/posts?offset=${offset}&limit=${POST.LIMIT}`);
      return response.data;
    } catch (error) {
      return []
    }
  },
  postById: async (postID: number): Promise<PostResponseInterface | null> => {
    try {
      const response = await http().get(`/api/post/${postID}`);
      return response.data[0];
    } catch (error) {
      return null
    }
  },
  postFollowing: async (offset: number): Promise<PostResponseInterface[] | null> => {
    try {
      const response = await http().get(`/api/following/?offset=${offset}&limit=${POST.LIMIT}`);
      return response.data;
    } catch (error) {
      return null
    }
  },
});
