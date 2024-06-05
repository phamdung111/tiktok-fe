import { formatDateTimeProvider } from "~/provider/format/date-time/format-date-time.provider";
import { postService } from "~/service/post/post.service";
import { usePostStore } from "~/store/post";
export const postInitialDataComposable = async (postId: number) => {
  const post = usePostStore();
  const response = await postService.postById(postId);
  post.setPostSelected(response);
};
