import { authenticationService } from "~/service/authentication/authentication.service";
import { loginWithTokenService } from "~/service/authentication/login-with-token.service";
export const loginWithTokenComposable = async (token: string) => {
  await loginWithTokenService.loginWithToken(token);
  await authenticationService.getUserAuthentication();
};
