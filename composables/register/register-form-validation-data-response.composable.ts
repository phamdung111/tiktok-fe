import { registerFormValidationData } from "./register-form-validation-data.composable";
import { formResponseValidator } from "~/validator/form-response.validator";
export const registerFormValidationDataResponse = async (errors: any) => {
  await formResponseValidator(errors, registerFormValidationData);
};
