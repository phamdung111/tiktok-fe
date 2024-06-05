import { userFavoritePostService } from "~/service/user/post/favorite/user-favorite-post.service";

export const userFavoritePostComposable = async (postId: number) => {
  const response = await userFavoritePostService.favorite(postId);
  return response;
};
