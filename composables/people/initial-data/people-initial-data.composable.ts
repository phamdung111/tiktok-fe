import { peopleService } from "~/service/people/people.service";
import { usePeopleStore } from "~/store/people";

export const peopleInitialDataComposable = async (userId: number) => {
  const people = usePeopleStore();
  const response = await peopleService.infoPersonal(userId);
  people.setInfoPersonal(response);
};
