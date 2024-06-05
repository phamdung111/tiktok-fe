import { http } from "~/utils/http/http";

export const logoutAuthenticationService = Object.freeze({
  logout: async () => {
    try {
      await http().post("/logout");
    } catch (error) {
      console.log(error);
    }
  },
});
