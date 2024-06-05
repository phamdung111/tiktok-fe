import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { FollowInterface } from "~/interface/entity/follow/follow.interface";

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
  liked: PostResponseInterface[] | null;
  favorite: PostResponseInterface[] | null;
  isWatching: boolean;
}
