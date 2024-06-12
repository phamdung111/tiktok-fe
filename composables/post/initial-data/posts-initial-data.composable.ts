import { number } from "yup";
import { postService } from "~/service/post/post.service";
import { usePostStore } from "~/store/post";
export const postsInitialDataComposable = async (page: number) => {
  const post = usePostStore();
  const response = await postService.infinityPosts(page);
  post.infinityPosts(response);
};
