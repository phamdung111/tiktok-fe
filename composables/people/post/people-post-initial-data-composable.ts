import { postService } from "~/service/post/post.service";
import { usePeopleStore } from "~/store/people";
export const peoplePostInitialDataComposable = async (postId: number) => {
  const people = usePeopleStore();
  const response = await postService.postById(postId);
  people.setPostSelected(response);
};
