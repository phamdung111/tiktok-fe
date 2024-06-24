import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { FollowInterface } from "~/interface/entity/follow/follow.interface";
import type { PostInteractiveResponseInterface } from "~/interface/response/post/profile/post-interactive-response.interface";
import type { selectedStatusInterface } from "../post/selected-status.interface";

export interface PeopleStoreStateInterface {
  id: number;
  image: string;
  name: string;
  bio: string;
  videos: PostResponseInterface[] | null;
  postSelected: PostResponseInterface | null;
  following: FollowInterface[] | null;
  follower: [];
  prefer: number;
  liked: PostInteractiveResponseInterface[] | null;
  favorite: PostInteractiveResponseInterface[] | null;
  isWatching: boolean;
  status: number;
  selectedStatus: selectedStatusInterface | null
}
