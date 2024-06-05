import { userLikePostService } from "~/service/user/post/like/user-like-post.service";
export const userUnlikeComposable = async (postID: number) => {
  const response = await userLikePostService.unLike(postID);
  return response;
};
