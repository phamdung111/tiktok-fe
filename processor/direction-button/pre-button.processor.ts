import { usePeopleStore } from "~/store/people";
import { usePostStore } from "~/store/post";
import { useUiStore } from "~/store/ui";
export const preButton = (): number => {
  const people = usePeopleStore();
  const post = usePostStore();
  const ui = useUiStore()
  if (!ui.selectedPostFrom?.origin) {
    const index = post.allPosts?.findIndex((item) => item.id === post.postSelected?.id);
    return index! > 0 ? post.allPosts![index! - 1].id : -1;
    
  } else if (ui.selectedPostFrom.origin === 'people') {
    const index = people.videos?.findIndex((item) => item.id === people.postSelected?.id);
    return index! > 0 ? people.videos![index! - 1].id : -1;
  }
  return 0
};
