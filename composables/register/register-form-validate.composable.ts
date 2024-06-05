import { object, string } from "yup";
import { registerFormData } from "./register-form-data.composable";
import { registerFormValidationData } from "./register-form-validation-data.composable";
import { formSchemaValidator } from "~/validator/form-schema.validator";
export const registerFormValidate = async (): Promise<boolean> => {
  const registerFormSchema = object().shape({
    name: string().required(),
    email: string().email(),
    password: string().required(),
    password_confirmation: string().required(),
  });
  const status = await formSchemaValidator(registerFormSchema, registerFormData, registerFormValidationData);
  return status;
};
