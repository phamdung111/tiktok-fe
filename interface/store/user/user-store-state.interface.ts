import type { FollowInterface } from "~/interface/entity/follow/follow.interface";
import type { PostResponseInterface } from "~/interface/response/post/post-response.interface";

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
  likedPost: PostResponseInterface[] | null;
  favorite: PostResponseInterface[] | null;
  liked: PostResponseInterface[] | null;
}
