import type { RegisterValidationInterface } from "~/interface/validation/register-validation.interface";

export const registerFormValidationData = reactive<RegisterValidationInterface>({
  name: {
    isFailed: false,
    message: "",
  },
  email: {
    isFailed: false,
    message: "",
  },
  password: {
    isFailed: false,
    message: "",
  },
  confirmPassword: {
    isFailed: false,
    message: "",
  },
});
