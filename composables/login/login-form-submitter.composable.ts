import { authenticationService } from "~/service/authentication/authentication.service";
import { loginAuthenticationService } from "~/service/authentication/login-authentication.service";
import { loginFormValidate } from "./login-form-validate.composable";
import { formResponseValidator } from "~/validator/form-response.validator";
import { loginFormValidationData } from "./login-form-validation-data.composable";
import { loginRequestMapper } from "~/mapper/request/authentication/login/login-request.mapper";
export const loginFormSubmitterComposable = async () => {
  const status = await loginFormValidate();
  if (status) {
    await authenticationService.getToken();
    const response = await loginAuthenticationService.login(loginRequestMapper());
    if (response.errors) {
      formResponseValidator(response.errors, loginFormValidationData);
    } else {
      await authenticationService.getUserAuthentication();
    }
  }
};
