import type { PeopleResponseInterface } from "~/interface/response/people/people-response.inteface";
import { http } from "~/utils/http/http";
import { usePeopleStore } from "~/store/people";
export const peopleService = Object.freeze({
  infoPersonal: async (userId: number): Promise<PeopleResponseInterface> => {
    try {
      const response = await http().get(`api/getPerson/${userId}`);
      usePeopleStore().setStatus(response.status);
      return response.data[0];
    } catch (error: any) {
      usePeopleStore().setStatus(error.response.status);
      throw error;
    }
  },
});
