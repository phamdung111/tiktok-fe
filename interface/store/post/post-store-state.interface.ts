import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";

export interface PostStoreStateInterface {
  postSelected: PostResponseInterface | null;
  allPosts: PostResponseInterface[] | null;
}
