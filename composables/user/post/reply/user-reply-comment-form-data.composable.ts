import { text } from "stream/consumers";
import type { ReplyCommentRequestInterface } from "~/interface/request/user/post/reply/reply-comment-request.interface";

export const userReplyCommentFormData = reactive<ReplyCommentRequestInterface>({
  text: "",
  comment_id: 0,
});
