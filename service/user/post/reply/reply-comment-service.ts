import type { AxiosPromise } from "axios";
import type { ReplyInterface } from "~/interface/entity/reply/reply.interface";
import type { ReplyCommentRequestInterface } from "~/interface/request/user/post/reply/reply-comment-request.interface";
import { http } from "~/utils/http/http";

export const replyCommentService = Object.freeze({
  addReply: async (payload: ReplyCommentRequestInterface): Promise<ReplyInterface> => {
    try {
      const response = await http().post("/api/reply", payload);
      return response.data[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  delete: async (replyId: number): Promise<AxiosPromise> => {
    try {
      const response = await http().delete(`/api/reply/${replyId}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
});
