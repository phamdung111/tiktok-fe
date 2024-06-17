import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { SearchStoreStateInterface } from "../../interface/store/search/search-store-state.interface";
import type { SearchUserResponseInterface } from "~/interface/response/search/search-user-response.interface";
export const useSearchStore = defineStore("search", {
  state: (): SearchStoreStateInterface => {
    return {
      users: [],
      posts: [],
    };
  },
  actions: {
    setPosts(posts: PostResponseInterface[]) {
      posts.forEach((post) => this.posts.push(post));
    },
    setUser(users: SearchUserResponseInterface[]) {
      this.users = users;
    },
    resetSearch() {
      this.users = [];
      this.posts = [];
    },
  },
});
