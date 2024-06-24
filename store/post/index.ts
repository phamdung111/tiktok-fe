import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { PostStoreStateInterface } from "~/interface/store/post/post-store-state.interface";
import type { selectedStatusInterface } from "~/interface/store/post/selected-status.interface";

export const usePostStore = defineStore("post", {
  state: (): PostStoreStateInterface => {
    return {
      postSelected: null,
      allPosts: [],
      selectedStatus: null
    };
  },
  actions: {
    setPosts(posts: PostResponseInterface[]) {
      posts.forEach((post) => this.allPosts.push(post));
    },
    setPostSelected(post: PostResponseInterface | null) {
      this.postSelected = post;
    },
    setSelectedStatus(status: selectedStatusInterface | null){
      this.selectedStatus = status
    },
    removeSelectedStatus(){
      this.selectedStatus = null
    }
  },
});
