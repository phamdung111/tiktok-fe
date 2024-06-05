import type { ReplyCommentRequestInterface } from "~/interface/request/user/post/reply/reply-comment-request.interface";
import { replyCommentRequestFormDataMapper } from "~/mapper/form/post/reply/reply-comment-request-form-data.mapper";
import { replyCommentService } from "~/service/user/post/reply/reply-comment-service";
import { useUserStore } from "~/store/user";
export const userReplyCommentSubmitComposable = async () => {
  const user = useUserStore();
  const response = await replyCommentService.addReply(replyCommentRequestFormDataMapper());
  user.addReply(response, replyCommentRequestFormDataMapper().comment_id);
};
