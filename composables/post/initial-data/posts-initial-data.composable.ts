import { postService } from "~/service/post/post.service";
import { usePostStore } from "~/store/post";
export const postsInitialDataComposable = async (offset: number) => {
  const post = usePostStore();
  const response = await postService.posts(offset);
  post.setPosts(response);
};
