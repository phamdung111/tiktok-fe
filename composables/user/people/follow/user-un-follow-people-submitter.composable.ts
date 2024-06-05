import { userFollowPeopleService } from "~/service/user/people/follow/user-follow-people.service";
import { useUserStore } from "~/store/user";
export const userUnFollowPeopleSubmitterComposable = async (idCreator: number) => {
  const status = await userFollowPeopleService.unFollow(idCreator);
  if (status === 200) {
    useUserStore().unFollow(idCreator);
  }
};
