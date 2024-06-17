import { searchDataService } from "~/service/search/search-data.service";
import { useSearchStore } from "~/store/search";
export const searchDataComposable = async (content: string) => {
  const search = useSearchStore();
  const response = await searchDataService.search(content);
  search.resetSearch();
  search.setUser(response.users);
  search.setPosts(response.posts);
};
