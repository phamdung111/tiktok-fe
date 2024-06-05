import type { BaseValidationInterface } from "./base-validation.interface";

export interface RegisterValidationInterface {
  name: BaseValidationInterface;
  email: BaseValidationInterface;
  password: BaseValidationInterface;
  confirmPassword: BaseValidationInterface;
}
