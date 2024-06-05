import { userFollowPeopleService } from "~/service/user/people/follow/user-follow-people.service";
import { useUserStore } from "~/store/user";
export const userFollowPeopleSubmitter = async (idUserCreator: number) => {
  const user = useUserStore();
  const response = await userFollowPeopleService.follow(idUserCreator);
  user.follow(response);
};
