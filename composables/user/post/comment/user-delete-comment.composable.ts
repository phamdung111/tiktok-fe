import { userCommentPostService } from "~/service/user/post/comment/user-comment-post.service";
import { useUserStore } from "~/store/user";
export const userDeleteCommentComposable = async (commentId: number) => {
  const user = useUserStore();
  const response = await userCommentPostService.delete(commentId);
  response.status === 200 ? user.deleteComment(commentId) : "";
  return response;
};
