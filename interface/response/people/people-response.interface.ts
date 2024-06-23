import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";
import type { FollowInterface } from "~/interface/entity/follow/follow.interface";
import type { PostInteractiveResponseInterface } from "../post/profile/post-interactive-response.interface";

export interface PeopleResponseInterface {
  id: number;
  email?: string;
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
}
