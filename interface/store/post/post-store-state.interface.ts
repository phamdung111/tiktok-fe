import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { selectedStatusInterface } from './selected-status.interface';

export interface PostStoreStateInterface {
  postSelected: PostResponseInterface | null;
  allPosts: PostResponseInterface[];
  selectedStatus: selectedStatusInterface | null
}
