import { http } from "~/utils/http/http";
import type { loginFormRequestInterface } from "~/interface/request/authentication/login-form-request.interface";
export const loginAuthenticationService = Object.freeze({
  login: async (payload: loginFormRequestInterface) => {
    try {
      const response = await http().post("/login", payload);
      return response.data;
    } catch (errors: any) {
      return errors.response.data;
    }
  },
});
