import type { AxiosPromise } from "axios";
import type { CommentInterface } from "~/interface/entity/comment/comment.interface";
import type { userCommentPostRequestInterface } from "~/interface/request/user/post/comment/comment-post.request.interface";
import { http } from "~/utils/http/http";

export const userCommentPostService = Object.freeze({
  addComment: async (payload: userCommentPostRequestInterface): Promise<CommentInterface> => {
    try {
      const response = await http().post("/api/comment", payload);
      return response.data[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  delete: async (commentId: number): Promise<AxiosPromise> => {
    try {
      const response = await http().delete(`/api/comment/${commentId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
});
