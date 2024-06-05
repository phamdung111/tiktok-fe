import { usePeopleStore } from "~/store/people";
import { usePostStore } from "~/store/post";
export const preButton = (): number => {
  const people = usePeopleStore();
  const post = usePostStore();
  if (people.isWatching) {
    let index = people.videos?.findIndex((item) => item.id === people.postSelected?.id);
    return index! > 0 ? people.videos![index! - 1].id : -1;
  } else {
    let index = post.allPosts?.findIndex((item) => item.id === post.postSelected?.id);
    return index! > 0 ? post.allPosts![index! - 1].id : -1;
  }
};
