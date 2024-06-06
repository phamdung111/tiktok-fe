import { error } from "console";
import { registerService } from "../../service/authentication/register-service";
import { registerFormValidate } from "./register-form-validate.composable";
import type { BaseValidationInterface, ObjectValidationInterface } from "~/interface/validation/base-validation.interface";
import { registerFormValidationDataResponse } from "./register-form-validation-data-response.composable";
import { registerRequestMapper } from "~/mapper/request/authentication/register/register-request.mapper";
import { authenticationService } from "~/service/authentication/authentication.service";
export const registerFormSubmitterComposable = async <T extends Record<string, BaseValidationInterface | ObjectValidationInterface[]>>() => {
  const status = await registerFormValidate();

  if (status) {
    const response = await registerService.register(registerRequestMapper());
    if (response.errors) {
      registerFormValidationDataResponse(response.errors);
    } else {
    }
  }
};
