import { http } from "~/utils/http/http";

export const loginWithTokenService = Object.freeze({
  loginWithToken: async (token: string): Promise<any> => {
    try {
      const response = await http().get("sanctum/csrf-cookie", {
        headers: {
          "X-XSRF-TOKEN": token,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
});
