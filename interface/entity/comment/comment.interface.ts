import type { UserStoreStateInterface } from "~/interface/store/user/user-store-state.interface";
import type { ReplyInterface } from "../reply/reply.interface";

export interface CommentInterface {
  id: number;
  replies: ReplyInterface[] | null;
  text: string;
  time: Date | string;
  user: UserStoreStateInterface[];
}
