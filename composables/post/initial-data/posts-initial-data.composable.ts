import { postService } from "~/service/post/post.service";
import { usePostStore } from "~/store/post";
export const postsInitialDataComposable = async () => {
  const post = usePostStore();
  const response = await postService.allPost();
  post.setAllPosts(response);
};
