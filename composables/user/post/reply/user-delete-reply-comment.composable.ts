import { replyCommentService } from "~/service/user/post/reply/reply-comment-service";
import { useUserStore } from "~/store/user";
export const userDeleteReplyCommentComposable = async (replyId: number) => {
  const user = useUserStore();
  const response = await replyCommentService.delete(replyId);
  response.status === 200 ? user.deleteReply(replyId) : "";
  return response;
};
