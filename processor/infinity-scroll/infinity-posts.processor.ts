import { POST } from "~/constant/post/post.constant";
import { useUiStore } from "~/store/ui";
import { usePostStore } from "~/store/post";
export const infinityPosts = async (callbackApi: any) => {
  const post = usePostStore();
  const ui = useUiStore();
  post.allPosts = []; // onload page set posts empty
  let offset = 0;
  const loadMoreData = async () => {
    if (ui.isLoading === true) return;
    ui.isLoading = true;
    await callbackApi(offset);
    offset += POST.LIMIT;
    ui.isLoading = false;
  };
  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
      const newPosts = post.allPosts.length % POST.LIMIT;
      newPosts === 0 ? loadMoreData() : "";
    }
  };
  loadMoreData();
  window.addEventListener("scroll", onScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
};
