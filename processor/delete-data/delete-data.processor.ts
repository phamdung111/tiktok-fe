import { userDeleteCommentComposable } from "~/composables/user/post/comment/user-delete-comment.composable";
import { userDeletePostComposable } from "~/composables/user/post/delete/user-delete-post.composable";
import { userDeleteReplyCommentComposable } from "~/composables/user/post/reply/user-delete-reply-comment.composable";
import { useUiStore } from "~/store/ui";
import { useUserStore } from "~/store/user";
export const deleteDataProcessor = async (typeDelete: string, idDataDelete: number) => {
  let status = 0;
  if (typeDelete === "comment") {
    const response = await userDeleteCommentComposable(idDataDelete);
    status = response.status;
  } else if (typeDelete === "reply") {
    const response = await userDeleteReplyCommentComposable(idDataDelete);
    status = response.status;
  } else if (typeDelete === "post") {
    const response = await userDeletePostComposable(idDataDelete);
    status = response.status;
    navigateTo(`/profile/${useUserStore().id}`);
  }
  status === 200 ? (useUiStore().notificationDeleteData = []) : "";
};
