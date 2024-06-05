import type { LoginValidationInterface } from "~/interface/validation/login-validation.interface";

export const loginFormValidationData = reactive<LoginValidationInterface>({
  email: {
    isFailed: false,
    message: "",
  },
  password: {
    isFailed: false,
    message: "",
  },
});
