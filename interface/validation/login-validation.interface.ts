import type { BaseValidationInterface } from "./base-validation.interface";

export interface LoginValidationInterface {
  email: BaseValidationInterface;
  password: BaseValidationInterface;
}
