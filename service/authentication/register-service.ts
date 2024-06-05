import { registerFormValidationData } from "~/composables/register/register-form-validation-data.composable";
import type { RegisterFormRequestInterface } from "~/interface/request/authentication/register-form-request.interface";
import { http } from "~/utils/http/http";

export const registerService = Object.freeze({
  register: async (payload: RegisterFormRequestInterface) => {
    try {
      const response = await http().post("/register", payload);
      return response.data;
    } catch (errors: any) {
      return errors.response.data;
    }
  },
});
