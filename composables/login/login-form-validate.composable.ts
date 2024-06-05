import { object, string } from "yup";
import { formSchemaValidator } from "~/validator/form-schema.validator";
import { loginFormData } from "./login-form-data.composable";
import { loginFormValidationData } from "./login-form-validation-data.composable";

export const loginFormValidate = async (): Promise<boolean> => {
  const loginFormSchema = object().shape({
    email: string().email().required(),
    password: string().required(),
  });
  const status = await formSchemaValidator(loginFormSchema, loginFormData, loginFormValidationData);
  return status;
};
