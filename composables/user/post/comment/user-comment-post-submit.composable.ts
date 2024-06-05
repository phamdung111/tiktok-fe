import { userCommentPostService } from "~/service/user/post/comment/user-comment-post.service";
import { useUserStore } from "~/store/user";
import { commentRequestFormDataMapper } from "~/mapper/form/post/comment/comment-request-form-data.mapper";
export const userCommentPostSubmitComposable = async () => {
  const user = useUserStore();
  const response = await userCommentPostService.addComment(commentRequestFormDataMapper());
  user.addComment(response);
};
