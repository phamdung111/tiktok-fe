import type { FollowInterface } from "~/interface/entity/follow/follow.interface";
import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { PostInteractiveResponseInterface } from "~/interface/response/post/profile/post-interactive-response.interface";

export interface UserStoreStateInterface {
  id: number;
  email?: string;
  image: string;
  name: string;
  bio?: string;
  videos: PostResponseInterface[] | null;
  postSelected: PostResponseInterface | null;
  following: FollowInterface[];
  follower: [];
  prefer: number;
  favorite: PostInteractiveResponseInterface[] | null;
  liked: PostInteractiveResponseInterface[] | null;
}
