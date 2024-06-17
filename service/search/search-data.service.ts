import { http } from "~/utils/http/http";

export const searchDataService = Object.freeze({
  search: async (content: string): Promise<any> => {
    try {
      const response = await http().get(`api/search/${content}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
