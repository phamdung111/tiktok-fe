import { userReplyCommentFormData } from "~/composables/user/post/reply/user-reply-comment-form-data.composable";
import type { ReplyCommentRequestInterface } from "~/interface/request/user/post/reply/reply-comment-request.interface";

export const replyCommentRequestFormDataMapper = (): ReplyCommentRequestInterface => {
  return {
    comment_id: userReplyCommentFormData.comment_id,
    text: userReplyCommentFormData.text,
  };
};
