import { userCommentPostFormDataComposable } from "~/composables/user/post/comment/user-comment-post-form-data.composable";
import type { userCommentPostRequestInterface } from "~/interface/request/user/post/comment/comment-post.request.interface";

export const commentRequestFormDataMapper = (): userCommentPostRequestInterface => {
  return {
    post_id: userCommentPostFormDataComposable.post_id,
    text: userCommentPostFormDataComposable.text,
  };
};
