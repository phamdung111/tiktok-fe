import type { FollowInterface } from "~/interface/entity/follow/follow.interface";
import { http } from "~/utils/http/http";

export const userFollowPeopleService = Object.freeze({
  follow: async (userIdCreator: number): Promise<FollowInterface> => {
    try {
      const response = await http().post("/api/follow", {
        user_creator: userIdCreator,
      });
      return response.data.follow;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  unFollow: async (idCreator: number): Promise<number> => {
    try {
      const response = await http().post("/api/unFollow", {
        user_creator: idCreator,
      });
      return response.status;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});
