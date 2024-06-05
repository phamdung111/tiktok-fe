import { userFavoritePostService } from "~/service/user/post/favorite/user-favorite-post.service";

export const userUnfavoritePostComposable = async (postId: number) => {
  const response = await userFavoritePostService.unfavorite(postId);
  return response;
};
