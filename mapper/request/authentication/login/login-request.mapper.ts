import { loginFormData } from "~/composables/login/login-form-data.composable";
import type { loginFormRequestInterface } from "~/interface/request/authentication/login-form-request.interface";

export const loginRequestMapper = (): loginFormRequestInterface => {
  return {
    email: loginFormData.email,
    password: loginFormData.password,
  };
};
