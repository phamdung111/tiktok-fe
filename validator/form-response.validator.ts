import type { BaseValidationInterface, ObjectValidationInterface, ValidationError } from "~/interface/validation/base-validation.interface";

export const formResponseValidator = async <T extends Record<string, BaseValidationInterface | ObjectValidationInterface[]>>(formErrors: any, formValidationData: T) => {
  let errors: ValidationError[] = [];
  errors = Object.keys(formErrors).map((key) => ({ path: key, message: formErrors[key] }));
  errors.forEach((error) => {
    (formValidationData[error.path] as BaseValidationInterface).isFailed = true;
    (formValidationData[error.path] as BaseValidationInterface).message = error.message[0];
  });
};
