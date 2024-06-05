import type { PeopleResponseInterface } from "~/interface/response/people/people-response.inteface";
import { http } from "~/utils/http/http";

export const peopleService = Object.freeze({
  infoPersonal: async (userId: number): Promise<PeopleResponseInterface> => {
    try {
      const response = await http().get(`api/getPerson/${userId}`);
      return response.data[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});
