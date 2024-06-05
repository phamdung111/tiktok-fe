import { userLikePostService } from "~/service/user/post/like/user-like-post.service";
import { useUserStore } from "~/store/user";
export const userLikePostComposable = async (postId: number) => {
  const response = await userLikePostService.like(postId);
  return response;
};
