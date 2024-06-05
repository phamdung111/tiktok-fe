import type { RegisterFormRequestInterface } from "../../interface/request/authentication/register-form-request.interface";
export const registerFormData = reactive<RegisterFormRequestInterface>({
  email: "",
  name: "",
  password: "",
  password_confirmation: "",
});
