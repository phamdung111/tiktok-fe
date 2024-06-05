import type { CommentInterface } from "~/interface/entity/comment/comment.interface";
import type { UserStoreStateInterface } from "~/interface/store/user/user-store-state.interface";
import type { PostLikeResponseInterface } from "./like/post-like-response.inteface";
import type { PostFavoriteResponseInterface } from "./favorite/post-favorite-response.inteface";

export interface PostResponseInterface {
  id: number;
  text: string;
  comments: CommentInterface[];
  likes: PostLikeResponseInterface[] | null;
  user: UserStoreStateInterface[];
  video: string;
  createdAt: string | Date;
  favorites: PostFavoriteResponseInterface[] | null;
}
