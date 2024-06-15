import { postService } from "~/service/post/post.service";
import { usePostStore } from "~/store/post";
export const postsFollowingInitialDataComposable = async (offset: number) => {
  const post = usePostStore();
  const response = await postService.postFollowing(offset);
  post.posts([]);
  post.posts(response);
};
