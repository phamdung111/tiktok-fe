import type { userCommentPostRequestInterface } from "~/interface/request/user/post/comment/comment-post.request.interface";

export const userCommentPostFormDataComposable = reactive<userCommentPostRequestInterface>({
  text: "",
  post_id: 0,
});
