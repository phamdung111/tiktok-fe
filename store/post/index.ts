import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { PostStoreStateInterface } from "~/interface/store/post/post-store-state.interface";

export const usePostStore = defineStore("post", {
  state: (): PostStoreStateInterface => {
    return {
      postSelected: null,
      allPosts: [],
    };
  },
  actions: {
    setAllPosts(posts: PostResponseInterface[]) {
      this.allPosts = [...posts];
    },
    setPostSelected(post: PostResponseInterface | null) {
      this.postSelected = post;
    },
  },
});
