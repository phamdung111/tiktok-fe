import { userUploadPostService } from "~/service/user/post/upload/user-upload-post.service";
import { formUserUploadPostValidate } from "./form-user-upload-post-validation.composable";
import { useUserStore } from "~/store/user";
import { useUiStore } from "~/store/ui";
export const formUserUploadPostSubmitterComposable = async (payload: FormData) => {
  if (!payload.get("text")) {
    formUserUploadPostValidate.text.isFailed = true;
    formUserUploadPostValidate.text.message = "The post title field is required.";
  } else {
    await userUploadPostService.uploadPost(payload);
    navigateTo(`/profile/${useUserStore().id}`);
    useUiStore().isUploadPost = false;
  }
};
