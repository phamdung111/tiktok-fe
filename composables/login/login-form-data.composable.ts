import type { loginFormRequestInterface } from "~/interface/request/authentication/login-form-request.interface";

export const loginFormData = reactive<loginFormRequestInterface>({
  email: "",
  password: "",
});
