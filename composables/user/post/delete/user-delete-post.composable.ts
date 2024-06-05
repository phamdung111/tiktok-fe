import { userDeletePostService } from "~/service/user/post/delete/user-delete-post.service";
import { useUserStore } from "~/store/user";
export const userDeletePostComposable = async (postId: number) => {
  const response = await userDeletePostService.delete(postId);
  response.status === 200 ? useUserStore().deletePost(postId) : "";
  return response;
};
