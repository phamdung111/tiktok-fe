import type { UserStoreStateInterface } from "~/interface/store/user/user-store-state.interface";

export interface ReplyInterface {
  id: number;
  text: string;
  time: Date;
  user: UserStoreStateInterface[];
}
