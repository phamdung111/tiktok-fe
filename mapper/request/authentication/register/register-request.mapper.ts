import { registerFormData } from "~/composables/register/register-form-data.composable";
import type { RegisterFormRequestInterface } from "~/interface/request/authentication/register-form-request.interface";

export const registerRequestMapper = (): RegisterFormRequestInterface => {
  return {
    name: registerFormData.name,
    email: registerFormData.email,
    password: registerFormData.password,
    password_confirmation: registerFormData.password_confirmation,
  };
};
