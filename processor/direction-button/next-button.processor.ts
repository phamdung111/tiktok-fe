import { usePostStore } from "~/store/post";
import { usePeopleStore } from "~/store/people";

export const nextButton = (): number => {
  const people = usePeopleStore();
  const post = usePostStore();
  if (people.isWatching) {
    const index = people.videos?.findIndex((item) => item.id === people.postSelected?.id);
    return index! >= 0 && index! < people.videos!.length - 1 ? people.videos![index! + 1].id : -1;
  } else {
    const index = post.allPosts?.findIndex((item) => item.id === post.postSelected?.id);
    return index! >= 0 && index! < post.allPosts!.length - 1 ? post.allPosts![index! + 1].id : -1;
  }
};
