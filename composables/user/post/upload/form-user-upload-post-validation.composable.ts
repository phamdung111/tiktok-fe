import type { UploadPostValidationInterface } from "~/interface/validation/upload-post-validation.interface";

export const formUserUploadPostValidate = reactive<UploadPostValidationInterface>({
  text: {
    isFailed: false,
    message: "",
  },
});
