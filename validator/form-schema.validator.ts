import type { ObjectSchema } from "yup";
import type { BaseValidationInterface, ObjectValidationInterface, ValidationError } from "~/interface/validation/base-validation.interface";
export const formSchemaValidator = async <T extends Record<string, BaseValidationInterface | ObjectValidationInterface>>(
  formSchema: ObjectSchema<any>,
  formData: any,
  formValidationData: T
): Promise<boolean> => {
  let status = true;
  let errors: ValidationError[] = [];
  try {
    await formSchema.validate(formData, { abortEarly: false });
  } catch (error: any) {
    status = false;
    errors = error.inner.map((error: any) => {
      return {
        path: error.path,
        message: error.message,
      };
    });
  }
  if (!status) {
    errors.forEach((error) => {
      (formValidationData[error.path].isFailed = true), (formValidationData[error.path].message = error.message);
    });
  } else {
    Object.keys(formValidationData).forEach((item: any) => {
      (formValidationData[item].isFailed = false), (formValidationData[item].message = "");
    });
  }
  return status;
};
