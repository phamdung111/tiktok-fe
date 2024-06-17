import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { SearchUserResponseInterface } from "~/interface/response/search/search-user-response.interface";

export interface SearchStoreStateInterface {
  users: SearchUserResponseInterface[];
  posts: PostResponseInterface[];
}
